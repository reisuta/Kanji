// Index construction and lookup logic extracted from questionSelector.ts.
// The TS class becomes a thin facade that holds a value of type `t` returned
// from `build` and delegates getters here.
//
// Fields beyond id/type/difficulty are unmodelled — they pass through at
// runtime because no helper here constructs new question records.
type question = {
  id: string,
  @as("type") type_: string,
  difficulty: float,
}

type t = {
  questions: array<question>,
  byId: Dict.t<question>,
  byType: Dict.t<array<question>>,
  byDifficulty: Dict.t<array<question>>,
}

let build = (questions: array<question>): t => {
  let byId = Dict.make()
  let byType = Dict.make()
  let byDifficulty = Dict.make()

  questions->Array.forEach(q => {
    byId->Dict.set(q.id, q)

    let typeBucket = byType->Dict.get(q.type_)->Option.getOr([])
    typeBucket->Array.push(q)
    byType->Dict.set(q.type_, typeBucket)

    let diffKey = q.difficulty->Float.toString
    let diffBucket = byDifficulty->Dict.get(diffKey)->Option.getOr([])
    diffBucket->Array.push(q)
    byDifficulty->Dict.set(diffKey, diffBucket)
  })

  {questions, byId, byType, byDifficulty}
}

let getById = (selector: t, id: string): option<question> => selector.byId->Dict.get(id)

let getByType = (selector: t, type_: string): array<question> =>
  selector.byType->Dict.get(type_)->Option.getOr([])->Array.copy

let getByDifficultyExact = (selector: t, difficulty: float): array<question> =>
  selector.byDifficulty->Dict.get(difficulty->Float.toString)->Option.getOr([])->Array.copy

let getByDifficultyRange = (selector: t, min: float, max: float): array<question> => {
  let result = []
  let d = ref(min)
  while d.contents <= max {
    let bucket = selector.byDifficulty->Dict.get(d.contents->Float.toString)
    switch bucket {
    | Some(qs) => qs->Array.forEach(q => result->Array.push(q))
    | None => ()
    }
    d := d.contents +. 1.0
  }
  result
}

let getAll = (selector: t): array<question> => selector.questions->Array.copy

let totalCount = (selector: t): int => selector.questions->Array.length

let availableTypes = (selector: t): array<string> => selector.byType->Dict.keysToArray

let availableDifficulties = (selector: t): array<float> => {
  let nums = selector.byDifficulty->Dict.keysToArray->Array.map(Float.fromString)->Array.filterMap(x => x)
  nums->Array.toSorted(Float.compare)
}
