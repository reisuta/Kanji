// Pure helpers extracted from questionSelector.ts. The TS class delegates here
// for filter, shuffle, and stats computation while keeping its index Maps for
// O(1) id/type/difficulty lookup.
//
// Only fields actually read by these helpers are modelled. Other Question
// fields (question, choices, correctAnswer, explanation) pass through at
// runtime because filter operations never construct new objects.
type question = {
  id: string,
  @as("type") type_: string,
  difficulty: float,
}

let shuffleArray = (arr: array<'a>): array<'a> => {
  let result = arr->Array.copy
  let len = result->Array.length
  for i in len - 1 downto 1 {
    let j = Math.Int.floor(Math.random() *. Int.toFloat(i + 1))
    let tmp = result->Array.getUnsafe(i)
    result->Array.setUnsafe(i, result->Array.getUnsafe(j))
    result->Array.setUnsafe(j, tmp)
  }
  result
}

let filterByDifficultyExact = (
  questions: array<question>,
  difficulty: float,
): array<question> => questions->Array.filter(q => q.difficulty === difficulty)

let filterByDifficultyRange = (
  questions: array<question>,
  min: float,
  max: float,
): array<question> =>
  questions->Array.filter(q => q.difficulty >= min && q.difficulty <= max)

let filterByTypes = (questions: array<question>, types: array<string>): array<question> => {
  let typeSet = Set.fromArray(types)
  questions->Array.filter(q => typeSet->Set.has(q.type_))
}

let excludeByIds = (questions: array<question>, ids: array<string>): array<question> => {
  let idSet = Set.fromArray(ids)
  questions->Array.filter(q => !(idSet->Set.has(q.id)))
}

type difficultyRange = {min: float, max: float}

type stats = {
  totalQuestions: int,
  byType: Dict.t<int>,
  byDifficulty: Dict.t<int>,
  difficultyRange: difficultyRange,
}

let computeStats = (questions: array<question>): stats => {
  let byType = Dict.make()
  let byDifficulty = Dict.make()
  let minRef = ref(Float.Constants.positiveInfinity)
  let maxRef = ref(Float.Constants.negativeInfinity)

  questions->Array.forEach(q => {
    let typeCount = byType->Dict.get(q.type_)->Option.getOr(0)
    byType->Dict.set(q.type_, typeCount + 1)

    let diffKey = q.difficulty->Float.toString
    let diffCount = byDifficulty->Dict.get(diffKey)->Option.getOr(0)
    byDifficulty->Dict.set(diffKey, diffCount + 1)

    if q.difficulty < minRef.contents {
      minRef := q.difficulty
    }
    if q.difficulty > maxRef.contents {
      maxRef := q.difficulty
    }
  })

  {
    totalQuestions: questions->Array.length,
    byType,
    byDifficulty,
    difficultyRange: {min: minRef.contents, max: maxRef.contents},
  }
}
