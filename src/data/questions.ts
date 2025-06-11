import { Question } from '@/types/question';

export const sampleQuestions: Question[] = [
  {
    id: '1',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「薫陶」',
    choices: ['くんとう', 'くんどう', 'かんとう', 'かんどう'],
    correctAnswer: 'くんとう',
    explanation: '薫陶（くんとう）は、人格や学問などを感化し育成することを意味します。',
    difficulty: 8
  },
  {
    id: '2',
    type: 'writing',
    question: '次の読み方に対応する漢字を選択してください：「ちょうちょう」（蝶々ではない意味）',
    choices: ['調調', '重畳', '聴聴', '長長'],
    correctAnswer: '重畳',
    explanation: '重畳（ちょうちょう）は、山などが幾重にも重なっている様子、またはとても良いという意味です。',
    difficulty: 9
  },
  {
    id: '3',
    type: 'meaning',
    question: '「蟷螂の斧」の意味として正しいものはどれですか？',
    choices: [
      '非常に強力な武器',
      '微力なのに強大なものに立ち向かうこと',
      '昆虫の研究に使う道具',
      '秋の風物詩'
    ],
    correctAnswer: '微力なのに強大なものに立ち向かうこと',
    explanation: '蟷螂の斧（とうろうのおの）は、蟷螂（カマキリ）が前脚を上げて車に立ち向かうという故事から、自分の力を顧みず強大な相手に立ち向かうことを指します。',
    difficulty: 7
  },
  {
    id: '4',
    type: 'fourCharacter',
    question: '「因果○○」の○○に入る適切な漢字はどれですか？',
    choices: ['応報', '関係', '律動', '循環'],
    correctAnswer: '応報',
    explanation: '因果応報（いんがおうほう）は、良い行いには良い報い、悪い行いには悪い報いがあるという意味の四字熟語です。',
    difficulty: 6
  },
  {
    id: '5',
    type: 'idiom',
    question: '「百聞は一見に○○」の○○に入る漢字はどれですか？',
    choices: ['勝る', '如かず', '等しい', '優る'],
    correctAnswer: '如かず',
    explanation: '百聞は一見に如かず（ひゃくぶんはいっけんにしかず）は、何度聞くよりも一度見る方が確実で良く分かるという意味です。',
    difficulty: 5
  }
];

export const getRandomQuestions = (count: number = 5): Question[] => {
  const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, sampleQuestions.length));
};