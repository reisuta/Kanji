import { Question } from '@/types/question';

export const questionBank: Question[] = [
  {
    id: '1',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「薫陶」',
    choices: ['くんとう', 'くんどう', 'かんとう', 'かんどう'],
    correctAnswer: 'くんとう',
    explanation: '薫陶（くんとう）は、人格や学問などを感化し育成することを意味します。',
    difficulty: 1
  },
  {
    id: '2',
    type: 'writing',
    question: '「国境の山岳は____として」の空欄に入る適切な漢字はどれですか？',
    choices: ['調調', '重畳', '聴聴', '長長'],
    correctAnswer: '重畳',
    explanation: '重畳（ちょうじょう）は、山などが幾重にも重なっている様子。またはこの上もなく満足なこと。大変喜ばしいこと。感動詞的にも用いる',
    difficulty: 3
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
    difficulty: 3
  },
  {
    id: '4',
    type: 'fourCharacter',
    question: '「琳琅○○」の○○に入る適切な漢字はどれですか？',
    choices: ['満目', '関係', '律動', '循環'],
    correctAnswer: '満目',
    explanation: '琳琅満目（りんろうまんもく）は、美しいものが目の前にたくさんあること。「琳琅」は美しい宝石や詩文のこと。',
    difficulty: 6
  },
  {
    id: '5',
    type: 'idiom',
    question: '「古人の○○」の○○に入る漢字はどれですか？',
    choices: ['糟魄	', '正義', '淪落', '琥珀'],
    correctAnswer: '糟魄',
    explanation: '古人の糟魄（こじんのそうはく）は、言葉や文章では、聖人や賢人の本質を伝えるのは到底不可能であるということ。今日伝わる昔の聖賢の言葉や書物は残りかすのようなものであるという意',
    difficulty: 4
  },
  {
    id: '6',
    type: 'meaning',
    question: '「振起」の意味として正しいものはどれですか？',
    choices: ['奮い立つこと', '休息すること', '倒れること', '迷うこと'],
    correctAnswer: '奮い立つこと',
    explanation: '振起（しんき）は、気持ちを奮い立たせること、活気づくことを意味します。',
    difficulty: 2
  },
  {
    id: '7',
    type: 'meaning',
    question: '「朔風」の意味として正しいものはどれですか？',
    choices: ['北風', '南風', '東風', '西風'],
    correctAnswer: '北風',
    explanation: '朔風（さくふう）は、北から吹く風、北風を意味します。特に冬の冷たい北風を指すことが多いです。',
    difficulty: 2
  },
  {
    id: '8',
    type: 'meaning',
    question: '「凌侮」の意味として正しいものはどれですか？',
    choices: ['侮辱すること', '尊敬すること', '愛すること', '無視すること'],
    correctAnswer: '侮辱すること',
    explanation: '凌侮（りょうぶ）は、人をあなどり侮辱すること、見下すことを意味します。',
    difficulty: 2
  },
  {
    id: '9',
    type: 'meaning',
    question: '「隻影」の意味として正しいものはどれですか？',
    choices: ['一人だけの影', '二つの影', '大きな影', '小さな影'],
    correctAnswer: '一人だけの影',
    explanation: '隻影（せきえい）は、ひとりぼっちの影、孤独な様子を表します。',
    difficulty: 3
  },
  {
    id: '10',
    type: 'meaning',
    question: '「宛然」の意味として正しいものはどれですか？',
    choices: ['まるで～のように', '決して～ない', 'いつも～する', 'もし～なら'],
    correctAnswer: 'まるで～のように',
    explanation: '宛然（えんぜん）は、まるで～のように、あたかも～であるかのようにという意味です。',
    difficulty: 3
  },
  {
    id: '11',
    type: 'meaning',
    question: '「玉梓」の意味として正しいものはどれですか？',
    choices: ['手紙', '宝石', '楽器', '武器'],
    correctAnswer: '手紙',
    explanation: '玉梓（たまずさ）は、手紙、書簡を意味する雅語です。古代中国で手紙を梓の木の板に書いたことに由来します。',
    difficulty: 5
  },
  {
    id: '12',
    type: 'meaning',
    question: '「芝眉」の意味として正しいものはどれですか？',
    choices: ['お顔', '美しい', '賢い', '強い人'],
    correctAnswer: 'お顔',
    explanation: '芝眉（しび）は、他人の顔を敬っていう語。お顔。',
    difficulty: 5
  },
  {
    id: '13',
    type: 'meaning',
    question: '「愛日」の意味として正しいものはどれですか？',
    choices: ['短い冬の日を惜しむ', '太陽を愛する', '恋人同士の日', '記念日'],
    correctAnswer: '短い冬の日を惜しむ',
    explanation: '愛日（あいじつ）は、短い冬の日を惜しむこと、また時間を大切にすることを意味します。',
    difficulty: 5
  },
  {
    id: '14',
    type: 'idiom',
    question: '「滄浪の水清まば以て我が纓を濯うべし」の意味として正しいものはどれですか？',
    choices: [
      '環境に応じて身の処し方を変える',
      '水の流れに逆らう',
      '清潔を保つことの大切さ',
      '川で洗濯をする方法'
    ],
    correctAnswer: '環境に応じて身の処し方を変える',
    explanation: 'この故事成語は、環境や情勢に応じて自分の身の処し方を適切に変えるべきだという意味です。',
    difficulty: 4
  },
  {
    id: '15',
    type: 'idiom',
    question: '「渙然氷釈する」の意味として正しいものはどれですか？',
    choices: [
      '疑いや不安が完全に解ける',
      '氷が溶けて水になる',
      '寒さが厳しくなる',
      '関係が冷え込む'
    ],
    correctAnswer: '疑いや不安が完全に解ける',
    explanation: '渙然氷釈（かんぜんひょうしゃく）は、氷が溶けるように疑いや不安が完全に解けることを意味します。',
    difficulty: 3
  },
  {
    id: '16',
    type: 'fourCharacter',
    question: '「風檣陣馬」の意味として正しいものはどれですか？',
    choices: [
      '詩文の勢いが激しく雄大なこと',
      '風が強く船が揺れること',
      '戦場での激しい戦い',
      '馬が風のように走ること'
    ],
    correctAnswer: '詩文の勢いが激しく雄大なこと',
    explanation: '風檣陣馬（ふうしょうじんば）は、詩文の気勢が激しく雄大で、表現が生き生きとしていることを意味します。',
    difficulty: 6
  },
  {
    id: '17',
    type: 'meaning',
    question: '「絳帳」の意味として正しいものはどれですか？',
    choices: ['先生の席や学者の書斎', '武道場の道具', '商人の帳簿', '役所の文書'],
    correctAnswer: '先生の席や学者の書斎',
    explanation: '絳帳（こうちょう）は、あかいとばり。または、先生の席や学者の書斎',
    difficulty: 5
  },
  {
    id: '18',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「滌盪」',
    choices: ['てきとう', 'できとう', 'じょうとう', 'りょうとう'],
    correctAnswer: 'できとう',
    explanation: '滌盪（できとう）は、汚れや穢れを、あらい落とすこと。',
    difficulty: 1
  },
];
