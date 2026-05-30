// "use client" lives in ExplanationModal.tsx — see StartScreen.res for rationale.

// Local mirror of Question from src/types/question.ts. correctAnswer is the
// string | string[] union, modelled as JSON.t and discriminated inside
// QuizState.isAnswerCorrect. choices/explanation are optional.
type question = {
  id: string,
  @as("type") type_: string,
  question: string,
  choices?: array<string>,
  correctAnswer: JSON.t,
  difficulty: int,
  explanation?: string,
}

let choiceLetter = (index: int): string => String.fromCharCode(65 + index)

let difficultyDots = (difficulty: int): React.element => {
  let filled =
    Belt.Array.makeBy(difficulty, i =>
      <div key={Int.toString(i)} className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
    )
  let empty =
    Belt.Array.makeBy(10 - difficulty, i =>
      <div key={`e${Int.toString(i)}`} className="w-2 h-2 bg-gray-600 rounded-full" />
    )
  <> {filled->React.array} {empty->React.array} </>
}

let choiceMarker = (~isCorrectChoice: bool, ~isUserChoice: bool, ~isCorrect: bool): React.element =>
  if isCorrectChoice {
    <span className="ml-auto text-green-400 font-bold">
      {React.string(`✓ 正解`)}
    </span>
  } else if isUserChoice && !isCorrect {
    <span className="ml-auto text-red-400 font-bold">
      {React.string(`× あなたの回答`)}
    </span>
  } else {
    React.null
  }

let renderChoices = (
  ~choices: option<array<string>>,
  ~userAnswer: string,
  ~correctAnswer: JSON.t,
  ~isCorrect: bool,
): React.element =>
  switch choices {
  | None => React.null
  | Some(choices) =>
    choices
    ->Array.mapWithIndex((choice, choiceIndex) => {
      let isUserChoice = choice === userAnswer
      let isCorrectChoice = QuizState.isAnswerCorrect(choice, correctAnswer)
      let choiceClass = if isCorrectChoice {
        "bg-green-800/40 border-green-500 text-green-200"
      } else if isUserChoice && !isCorrect {
        "bg-red-800/40 border-red-500 text-red-200"
      } else {
        "bg-gray-800 border-gray-600 text-gray-300"
      }
      <div
        key={Int.toString(choiceIndex)}
        className={`p-3 rounded-lg border-2 ${choiceClass} transition-all`}>
        <div className="flex items-center">
          <span
            className="inline-block w-6 h-6 bg-gray-700 text-gray-300 rounded-full text-center leading-6 mr-3 text-sm font-bold">
            {React.string(choiceLetter(choiceIndex))}
          </span>
          {React.string(choice)}
          {choiceMarker(~isCorrectChoice, ~isUserChoice, ~isCorrect)}
        </div>
      </div>
    })
    ->React.array
  }

let renderExplanation = (explanation: option<string>): React.element =>
  switch explanation {
  | None => React.null
  | Some(text) =>
    <div className="bg-gray-800/60 rounded-lg p-4 border-l-4 border-amber-500">
      <h4 className="text-amber-200 font-bold mb-2 flex items-center">
        <span className="w-4 h-4 bg-amber-500 rounded-full mr-2" />
        {React.string(`解説`)}
      </h4>
      <p className="text-gray-200 leading-relaxed"> {React.string(text)} </p>
    </div>
  }

@react.component
let make = (
  ~questions: array<question>,
  ~userAnswers: array<string>,
  ~isOpen: bool,
  ~onClose: unit => unit,
) =>
  if !isOpen {
    React.null
  } else {
    <div
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-black max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-red-900/50 animate-creepy-pulse">
        <div
          className="sticky top-0 bg-gradient-to-r from-gray-900 to-black p-6 border-b border-red-900/50">
          <div className="flex justify-between items-center">
            <h2
              className="text-3xl font-horror-title text-red-400 tracking-wide animate-creepy-glow">
              {React.string(`地獄の解説書`)}
            </h2>
            <button
              onClick={_ => onClose()}
              className="text-red-400 hover:text-red-300 transition-colors text-2xl font-horror-title bg-gray-800 hover:bg-red-900/20 w-10 h-10 rounded-full flex items-center justify-center border border-red-900/50 animate-creepy-pulse">
              {React.string(`×`)}
            </button>
          </div>
          <div
            className="mt-2 h-0.5 bg-gradient-to-r from-red-600 via-black to-red-600 rounded-full animate-blood-drip"
          />
        </div>
        <div className="p-6 space-y-8">
          {questions
          ->Array.mapWithIndex((question, index) => {
            let userAnswer = userAnswers->Array.get(index)->Option.getOr("")
            let isCorrect = QuizState.isAnswerCorrect(userAnswer, question.correctAnswer)
            let containerClass = isCorrect
              ? "from-green-900/30 to-green-800/20 border-green-700/50"
              : "from-red-900/30 to-red-800/20 border-red-700/50"
            let verdictClass = isCorrect ? "text-green-400" : "text-red-400"
            let verdictText = isCorrect ? `魂の勝利` : `地獄への堕落`
            <div
              key={question.id}
              className={`bg-gradient-to-br ${containerClass} border rounded-xl p-6 backdrop-blur-sm`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span
                    className="bg-red-700 text-red-200 text-sm font-horror-text px-3 py-1 rounded-full animate-pulse">
                    {React.string(`呪い ${(index + 1)->Int.toString}`)}
                  </span>
                  <span
                    className="bg-gray-800 text-red-300 text-sm font-horror-text px-3 py-1 rounded-full border border-red-900/50">
                    {React.string(QuestionLabels.getQuestionTypeLabel(question.type_))}
                  </span>
                  <div className="flex space-x-1"> {difficultyDots(question.difficulty)} </div>
                </div>
                <div
                  className={`text-lg font-horror-subtitle ${verdictClass} animate-creepy-glow`}>
                  {React.string(verdictText)}
                </div>
              </div>
              <h3
                className="text-xl font-horror-text text-red-300 mb-4 leading-relaxed animate-creepy-glow">
                {React.string(question.question)}
              </h3>
              <div className="grid gap-3 mb-4">
                {renderChoices(
                  ~choices=question.choices,
                  ~userAnswer,
                  ~correctAnswer=question.correctAnswer,
                  ~isCorrect,
                )}
              </div>
              {renderExplanation(question.explanation)}
            </div>
          })
          ->React.array}
        </div>
        <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-t border-red-900/50">
          <button
            onClick={_ => onClose()}
            className="w-full bg-gradient-to-r from-red-700 via-black to-red-700 text-red-100 font-horror-title py-4 px-8 rounded-xl hover:from-red-600 hover:via-gray-900 hover:to-red-600 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-red-900/50 border border-red-500/50 animate-creepy-pulse">
            {React.string(`地獄の扉を閉じよ`)}
          </button>
        </div>
      </div>
    </div>
  }
