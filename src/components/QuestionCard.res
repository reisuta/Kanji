// "use client" lives in QuestionCard.tsx — see StartScreen.res for rationale.

// Local mirror of Question from src/types/question.ts. Only the fields we
// actually consume here are modelled; correctAnswer/explanation/id pass
// through unread. difficulty is int (range 1..10 in practice).
type question = {
  @as("type") type_: string,
  question: string,
  choices?: array<string>,
  difficulty: int,
}

// "A", "B", "C", ... for choice index 0, 1, 2, ...
let choiceLetter = (index: int): string => String.fromCharCode(65 + index)

let difficultyDots = (difficulty: int): React.element => {
  let filled =
    Belt.Array.makeBy(difficulty, i =>
      <div
        key={Int.toString(i)}
        className="w-2 h-2 bg-gray-500 rounded-full shadow-lg shadow-gray-500/50"
      />
    )
  let empty =
    Belt.Array.makeBy(10 - difficulty, i =>
      <div
        key={`e${Int.toString(i)}`}
        className="w-2 h-2 bg-gray-700 rounded-full"
      />
    )
  <> {filled->React.array} {empty->React.array} </>
}

let difficultyDotsSmall = (difficulty: int): React.element => {
  let filled =
    Belt.Array.makeBy(difficulty, i =>
      <div
        key={Int.toString(i)}
        className="w-2 h-2 bg-gray-500 rounded-full shadow-sm"
      />
    )
  let empty =
    Belt.Array.makeBy(10 - difficulty, i =>
      <div
        key={`e${Int.toString(i)}`}
        className="w-2 h-2 bg-gray-700 rounded-full"
      />
    )
  <> {filled->React.array} {empty->React.array} </>
}

@react.component
let make = (
  ~question: question,
  ~currentIndex: int,
  ~totalQuestions: int,
  ~onAnswer: string => unit,
  ~selectedAnswer: option<string>=?,
) => {
  let progressPct =
    Int.toFloat(currentIndex + 1) /. Int.toFloat(totalQuestions) *. 100.0
  let progressStyle: JsxDOMStyle.t = {width: `${progressPct->Float.toString}%`}

  let choicesEl = switch question.choices {
  | Some(choices) =>
    choices
    ->Array.mapWithIndex((choice, index) => {
      let isSelected = selectedAnswer == Some(choice)
      let buttonClass = `w-full p-5 text-left rounded-xl border-2 transition-all duration-300 font-medium transform hover:scale-102 ${isSelected
          ? "dead-gray-border bg-gradient-to-r from-gray-600/60 to-gray-700/60 text-gray-200 shadow-lg shadow-gray-500/25"
          : "dead-gray-border bg-gradient-to-r from-gray-800/60 to-gray-700/60 text-gray-300 hover:border-gray-400 hover:bg-gradient-to-r hover:from-gray-600/20 hover:to-gray-700/20 hover:shadow-md hover:text-gray-200"}`
      <button key={Int.toString(index)} onClick={_ => onAnswer(choice)} className={buttonClass}>
        <span
          className="inline-block w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-200 rounded-full text-center leading-10 mr-4 text-lg font-bold dead-gray-border">
          {React.string(choiceLetter(index))}
        </span>
        {React.string(choice)}
      </button>
    })
    ->React.array
  | None =>
    <div className="text-center dead-gray-text py-8 bg-gray-800/40 rounded-xl dead-gray-border">
      {React.string(`選択肢が設定されていません`)}
    </div>
  }

  <div
    className="dead-gray-theme rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto transform transition-all duration-300 hover:scale-105 dead-gray-border backdrop-blur-sm animate-gentle-flicker animate-slide-in-right">
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <span
            className="bg-gradient-to-r from-gray-700 to-gray-800 dead-gray-text text-sm font-bold px-4 py-2 rounded-full shadow-lg border dead-gray-border">
            {React.string(QuestionLabels.getQuestionTypeLabel(question.type_))}
          </span>
          <div className="flex space-x-1"> {difficultyDots(question.difficulty)} </div>
        </div>
        <span className="dead-gray-text text-lg font-bold tracking-wide">
          {React.string(
            `第 ${(currentIndex + 1)->Int.toString} 問 / ${totalQuestions->Int.toString}`,
          )}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 mb-6 shadow-inner dead-gray-border">
        <div
          className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-gray-500/30"
          style={progressStyle}
        />
      </div>
    </div>
    <div
      className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 rounded-xl p-6 mb-8 dead-gray-border shadow-2xl shadow-gray-900/20">
      <h2
        className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed text-center tracking-wide">
        {React.string(question.question)}
      </h2>
    </div>
    <div className="space-y-4"> {choicesEl} </div>
    <div className="mt-8 text-center">
      <div
        className="inline-flex items-center space-x-2 bg-gray-800/60 rounded-full px-4 py-2 dead-gray-border shadow-lg shadow-gray-900/20">
        <span className="dead-gray-text text-sm font-medium">
          {React.string(`難易度`)}
        </span>
        <div className="flex space-x-1"> {difficultyDotsSmall(question.difficulty)} </div>
        <span className="text-gray-400 text-sm">
          {React.string(`${question.difficulty->Int.toString}/10`)}
        </span>
      </div>
    </div>
  </div>
}
