// Mirrors src/types/question.ts -> Question. We only need correctAnswer here,
// which is `string | string[]` in TypeScript. ReScript can't express that union
// as a sound record field, so we treat the field as JSON and discriminate at use.
type questionLike = {correctAnswer: JSON.t}

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

let calculateScore = (userAnswers: array<string>, questions: array<questionLike>): float => {
  let len = Math.Int.min(userAnswers->Array.length, questions->Array.length)
  let correct = ref(0)

  for i in 0 to len - 1 {
    switch (userAnswers[i], questions[i]) {
    | (Some(answer), Some(question)) =>
      if isAnswerCorrect(answer, question.correctAnswer) {
        correct := correct.contents + 1
      }
    | _ => ()
    }
  }

  let total = questions->Array.length
  if total === 0 {
    0.0
  } else {
    Math.round(Int.toFloat(correct.contents) /. Int.toFloat(total) *. 100.0)
  }
}

let getScoreGrade = (score: float): string =>
  if score >= 90.0 {
    "S"
  } else if score >= 80.0 {
    "A"
  } else if score >= 70.0 {
    "B"
  } else if score >= 60.0 {
    "C"
  } else {
    "D"
  }

let getScoreMessage = (score: float): string =>
  if score >= 90.0 {
    `汝は深淵の奥義を極めし者...地獄の王座に相応しい魂よ`
  } else if score >= 80.0 {
    `闇の知識に染まりし者よ、邪悪なる力が汝に宿る`
  } else if score >= 70.0 {
    `呪いの文字に魅入られし者よ、更なる深淵が汝を待つ`
  } else if score >= 60.0 {
    `地獄の門は開かれた...だが汝の魂は未だ浄化が必要である`
  } else {
    `絶望の淵に堕ちよ...汝の無知なる魂に恐怖の教えを`
  }

let formatTime = (seconds: float): string => {
  let totalSeconds = Math.floor(seconds)->Float.toInt
  let minutes = totalSeconds / 60
  let remaining = mod(totalSeconds, 60)
  let remainingStr = remaining->Int.toString->String.padStart(2, "0")
  `${minutes->Int.toString}:${remainingStr}`
}
