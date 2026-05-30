// "use client" lives in page.tsx — see StartScreen.res for rationale.

// Local mirror of Question. correctAnswer is the string | string[] union from
// TS — modelled as JSON.t and stringified through correctAnswerToText when
// shown raw (since we display the raw value as the answer label).
// difficulty kept as float to match VocabularyFilter.question (so filterQuestions
// can receive this array directly). Runtime is the same JS number — display side
// converts via Float.toInt for React.int.
type question = {
  id: string,
  @as("type") type_: string,
  question: string,
  choices?: array<string>,
  correctAnswer: JSON.t,
  explanation?: string,
  difficulty: float,
}

// Bindings for the TS-side data module and next/navigation. Relative paths
// resolve through the project's bundler/vitest config; absolute @/ aliases
// would also work but explicitness here helps vi.mock target the same module.
@module("../../data/questionBank")
external questionBank: array<question> = "questionBank"

// Runtime is identical (same JS object shape). ReScript's nominal type system
// rejects passing our local `question` to VocabularyFilter.filterQuestions
// directly; %identity is the zero-cost cast for cases like this.
external asFilterQuestions: array<question> => array<VocabularyFilter.question> = "%identity"
external fromFilterQuestions: array<VocabularyFilter.question> => array<question> = "%identity"

module Navigation = {
  type router = {push: string => unit}
  @module("next/navigation") external useRouter: unit => router = "useRouter"
}

// correctAnswer is JSON union; for raw display we string-join arrays.
let renderAnswer = (correctAnswer: JSON.t): string =>
  switch correctAnswer->JSON.Classify.classify {
  | String(s) => s
  | Array(arr) =>
    arr
    ->Array.map(item =>
      switch item->JSON.Classify.classify {
      | String(s) => s
      | _ => ""
      }
    )
    ->Array.join(",")
  | _ => ""
  }

let renderChoiceGrid = (
  ~choices: option<array<string>>,
  ~correctAnswer: JSON.t,
): React.element =>
  switch choices {
  | None => React.null
  | Some(choices) =>
    let correctText = renderAnswer(correctAnswer)
    <div className="mt-6">
      <p className="text-lg font-medium text-gray-700 mb-3">
        {React.string(`選択肢:`)}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {choices
        ->Array.mapWithIndex((choice, idx) => {
          let isCorrect = choice === correctText
          let cls = isCorrect
            ? "p-3 rounded-lg border-2 border-green-500 bg-green-50"
            : "p-3 rounded-lg border-2 border-gray-300 bg-gray-50"
          <div key={Int.toString(idx)} className={cls}>
            <p className="text-lg text-gray-800"> {React.string(choice)} </p>
          </div>
        })
        ->React.array}
      </div>
    </div>
  }

let renderExplanationBlock = (explanation: option<string>): React.element =>
  switch explanation {
  | None => React.null
  | Some(text) =>
    <div className="pt-6 border-t border-gray-200">
      <h4 className="text-xl font-medium text-gray-700 mb-3">
        {React.string(`解説`)}
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed">
        {React.string(text)}
      </p>
    </div>
  }

let renderCardExplanation = (explanation: option<string>): React.element =>
  switch explanation {
  | None => React.null
  | Some(text) =>
    <div className="pt-4 border-t border-gray-200">
      <p className="text-lg text-gray-600"> {React.string(text)} </p>
    </div>
  }

@react.component
let make = () => {
  let router = Navigation.useRouter()
  let (typeFilter, setTypeFilter) = React.useState(() => "all")
  let (difficultyFilter, setDifficultyFilter) = React.useState(() => "all")
  let (searchTerm, setSearchTerm) = React.useState(() => "")
  let (selectedQuestion, setSelectedQuestion) = React.useState((): option<question> => None)

  let filteredQuestions = React.useMemo(
    () =>
      VocabularyFilter.filterQuestions(
        questionBank->asFilterQuestions,
        ~typeFilter,
        ~difficultyFilter,
        ~searchTerm,
      )->fromFilterQuestions,
    (typeFilter, difficultyFilter, searchTerm),
  )

  let onChangeType = event => {
    let value: string = (event->ReactEvent.Form.target)["value"]
    setTypeFilter(_ => value)
  }
  let onChangeDifficulty = event => {
    let value: string = (event->ReactEvent.Form.target)["value"]
    setDifficultyFilter(_ => value)
  }
  let onChangeSearch = event => {
    let value: string = (event->ReactEvent.Form.target)["value"]
    setSearchTerm(_ => value)
  }

  let renderTypeOption = (option: VocabularyFilter.filterOption) =>
    <option key={option.value} value={option.value} className="text-gray-900">
      {React.string(option.label)}
    </option>

  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <button
          onClick={_ => router.push("/")}
          className="mb-4 text-gray-600 hover:text-gray-900 transition-colors duration-200">
          {React.string(`← ホームに戻る`)}
        </button>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          {React.string(`語彙学習`)}
        </h1>
        <p className="text-xl text-gray-600">
          {React.string(`漢字検定の語彙を学習しましょう`)}
        </p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              {React.string(`種類でフィルター`)}
            </label>
            <select
              value={typeFilter}
              onChange={onChangeType}
              className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {VocabularyFilter.typeOptions->Array.map(renderTypeOption)->React.array}
            </select>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              {React.string(`難易度でフィルター`)}
            </label>
            <select
              value={difficultyFilter}
              onChange={onChangeDifficulty}
              className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {VocabularyFilter.difficultyOptions->Array.map(renderTypeOption)->React.array}
            </select>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              {React.string(`検索`)}
            </label>
            <input
              type_="text"
              value={searchTerm}
              onChange={onChangeSearch}
              placeholder=`漢字や読みを検索...`
              className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-4 text-base text-gray-600">
          {React.string(
            `${filteredQuestions->Array.length->Int.toString} 件の語彙が見つかりました`,
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuestions
        ->Array.mapWithIndex((question, index) =>
          <div
            key={Int.toString(index)}
            onClick={_ => setSelectedQuestion(_ => Some(question))}
            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span
                className={`text-base font-medium text-white px-4 py-2 rounded ${VocabularyFilter.typeColor(
                    question.type_,
                  )}`}>
                {React.string(question.type_)}
              </span>
              <span
                className="text-base font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded">
                {React.int(question.difficulty->Float.toInt)}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {React.string(question.question)}
              </h3>
              <p className="text-xl text-gray-700">
                <span className="font-medium"> {React.string(`答え: `)} </span>
                {React.string(renderAnswer(question.correctAnswer))}
              </p>
            </div>
            {renderCardExplanation(question.explanation)}
          </div>
        )
        ->React.array}
      </div>
      {filteredQuestions->Array.length === 0
        ? <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              {React.string(`該当する語彙が見つかりませんでした`)}
            </p>
          </div>
        : React.null}
    </div>
    {switch selectedQuestion {
    | None => React.null
    | Some(q) =>
      <div
        className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50"
        onClick={_ => setSelectedQuestion(_ => None)}>
        <div
          className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={event => event->ReactEvent.Mouse.stopPropagation}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <span
                className={`text-lg font-medium text-white px-5 py-2 rounded ${VocabularyFilter.typeColor(
                    q.type_,
                  )}`}>
                {React.string(q.type_)}
              </span>
              <span
                className="text-lg font-medium text-gray-600 bg-gray-100 px-5 py-2 rounded">
                {React.int(q.difficulty->Float.toInt)}
              </span>
            </div>
            <button
              onClick={_ => setSelectedQuestion(_ => None)}
              className="text-gray-400 hover:text-gray-600 text-3xl">
              {React.string(`×`)}
            </button>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {React.string(q.question)}
            </h3>
            <p className="text-2xl text-gray-700 mb-2">
              <span className="font-medium"> {React.string(`答え: `)} </span>
              {React.string(renderAnswer(q.correctAnswer))}
            </p>
            {renderChoiceGrid(~choices=q.choices, ~correctAnswer=q.correctAnswer)}
          </div>
          {renderExplanationBlock(q.explanation)}
        </div>
      </div>
    }}
  </div>
}
