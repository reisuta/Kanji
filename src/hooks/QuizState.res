// Pure state transitions extracted from useQuiz.ts. The React hook keeps the
// useState/useCallback wiring; these helpers compute the next state from the
// previous one without referencing React.
//
// `'q` is left polymorphic so the hook can keep its full Question type. We only
// touch correctAnswer here, and the caller passes it in explicitly.
type state<'q> = {
  currentQuestionIndex: int,
  questions: array<'q>,
  userAnswers: array<string>,
  score: int,
  isCompleted: bool,
}

type result = {
  score: int,
  totalQuestions: int,
  correctAnswers: int,
  timeTaken: int,
}

let init = (questions: array<'q>): state<'q> => {
  currentQuestionIndex: 0,
  questions,
  userAnswers: [],
  score: 0,
  isCompleted: false,
}

let isAnswerCorrect = (userAnswer: string, correctAnswer: JSON.t): bool => {
  switch correctAnswer->JSON.Classify.classify {
  | String(s) => s === userAnswer
  | Array(arr) =>
    arr->Array.some(item =>
      switch item->JSON.Classify.classify {
      | String(s) => s === userAnswer
      | _ => false
      }
    )
  | _ => false
  }
}

let submitAnswer = (
  state: state<'q>,
  correctAnswer: JSON.t,
  answer: string,
): state<'q> => {
  let newAnswers = state.userAnswers->Array.concat([answer])
  let correct = isAnswerCorrect(answer, correctAnswer)
  let newScore = state.score + (correct ? 1 : 0)
  let nextIndex = state.currentQuestionIndex + 1
  let isCompleted = nextIndex >= state.questions->Array.length
  {
    ...state,
    userAnswers: newAnswers,
    score: newScore,
    currentQuestionIndex: nextIndex,
    isCompleted,
  }
}

let goToNext = (state: state<'q>): state<'q> =>
  if state.currentQuestionIndex < state.questions->Array.length - 1 {
    {...state, currentQuestionIndex: state.currentQuestionIndex + 1}
  } else {
    state
  }

let goToPrevious = (state: state<'q>): state<'q> =>
  if state.currentQuestionIndex > 0 {
    {...state, currentQuestionIndex: state.currentQuestionIndex - 1}
  } else {
    state
  }

let computeResult = (
  state: state<'q>,
  startTimeMs: float,
  nowMs: float,
): result => {
  let total = state.questions->Array.length
  let score = if total === 0 {
    0
  } else {
    Math.round(Int.toFloat(state.score) /. Int.toFloat(total) *. 100.0)->Float.toInt
  }
  let timeTaken = Math.floor((nowMs -. startTimeMs) /. 1000.0)->Float.toInt
  {
    score,
    totalQuestions: total,
    correctAnswers: state.score,
    timeTaken,
  }
}
