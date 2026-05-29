// Japanese display labels for QuestionType. Kept separate from QuestionFilters
// since this is presentation-only — used by ExplanationModal and could be
// reused by other views (vocabulary, etc.) without dragging in filter helpers.
let getQuestionTypeLabel = (type_: string): string =>
  switch type_ {
  | "reading" => `読み`
  | "writing" => `書き`
  | "meaning" => `意味`
  | "idiom" => `慣用句`
  | "fourCharacter" => `四字熟語`
  | other => other
  }
