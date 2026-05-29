// Pure helpers for the vocabulary page: type→color map, search/type/difficulty
// predicate, and the static option lists used by the filter UI. Kept on the
// ReScript side so they remain JSX-free and trivially unit-testable.
type question = {
  @as("type") type_: string,
  question: string,
  correctAnswer: JSON.t,
  difficulty: float,
}

let typeColor = (type_: string): string =>
  switch type_ {
  | "reading" => "bg-blue-500"
  | "writing" => "bg-green-500"
  | "meaning" => "bg-purple-500"
  | "idiom" => "bg-orange-500"
  | "antonym" => "bg-red-500"
  | "synonym" => "bg-yellow-500"
  | "usage" => "bg-pink-500"
  | "fourCharacter" => "bg-indigo-500"
  | _ => "bg-gray-500"
  }

// correctAnswer is `string | string[]` from the TS side. For free-text search
// we render either form to a single lowercase haystack.
let correctAnswerToText = (correctAnswer: JSON.t): string =>
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

// typeFilter / difficultyFilter use the literal `"all"` sentinel from the TS
// component to mean "no filter". difficultyFilter carries the numeric value as
// a string so React can stash it in a <select> without coercion churn.
let matchesFilter = (
  q: question,
  ~typeFilter: string,
  ~difficultyFilter: string,
  ~searchTerm: string,
): bool => {
  let typeOk = typeFilter === "all" || q.type_ === typeFilter
  let diffOk = difficultyFilter === "all" || q.difficulty->Float.toString === difficultyFilter
  let searchOk = if searchTerm === "" {
    true
  } else {
    let needle = searchTerm->String.toLowerCase
    let inQuestion = q.question->String.toLowerCase->String.includes(needle)
    let inAnswer =
      q.correctAnswer->correctAnswerToText->String.toLowerCase->String.includes(needle)
    inQuestion || inAnswer
  }
  typeOk && diffOk && searchOk
}

let filterQuestions = (
  questions: array<question>,
  ~typeFilter: string,
  ~difficultyFilter: string,
  ~searchTerm: string,
): array<question> =>
  questions->Array.filter(q => matchesFilter(q, ~typeFilter, ~difficultyFilter, ~searchTerm))

type filterOption = {value: string, label: string}

let typeOptions: array<filterOption> = [
  {value: "all", label: `すべて`},
  {value: "reading", label: `読み`},
  {value: "writing", label: `書き`},
  {value: "meaning", label: `意味`},
  {value: "idiom", label: `熟語`},
  {value: "antonym", label: `対義語`},
  {value: "synonym", label: `類義語`},
  {value: "usage", label: `用法`},
]

let difficultyOptions: array<filterOption> = [
  {value: "all", label: `すべて`},
  {value: "6", label: "6"},
  {value: "5", label: "5"},
  {value: "4", label: "4"},
  {value: "3", label: "3"},
  {value: "2", label: "2"},
  {value: "1", label: "1"},
]
