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
    choices: ['糟魄', '正義', '淪落', '琥珀'],
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
  {
    id: '19',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「榛莽」',
    choices: ['しんぼう', 'しんもう', 'しんばう', 'しんもん'],
    correctAnswer: ['しんぼう', 'しんもう'],
    explanation: '榛莽（しんぼう/しんもう）は、草木が群がり茂っている所。また、群がり茂った草木。どちらの読み方も正解です。',
    difficulty: 6
  },
  {
    id: '20',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「九竅」',
    choices: ['きゅうきょう', 'くきょう', 'きゅうこう', 'きゅうよう'],
    correctAnswer: 'きゅうきょう',
    explanation: '九竅（きゅうきょう）は、九つの穴（人体の九つの開口部）を意味します。',
    difficulty: 6
  },
  {
    id: '21',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「棺椁」',
    choices: ['かんかく', 'かんがく', 'かんこく', 'かんごく'],
    correctAnswer: 'かんかく',
    explanation: '棺椁（かんかく）は、遺体を納める箱。ひつぎ。',
    difficulty: 5
  },
  {
    id: '22',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「前褌」',
    choices: ['ぜんこん', 'まえみつ', 'まえこん', 'ぜんみつ'],
    correctAnswer: 'まえみつ',
    explanation: '前褌（まえみつ）は、相撲で、まわしを締めたとき体の前面で横になっている部分。前まわし。',
    difficulty: 5
  },
  {
    id: '23',
    type: 'meaning',
    question: '「余沢」の意味として正しいものはどれですか？',
    choices: ['先人が残してくれた恩恵', '残り物の食べ物', '余った時間', '追加の給料'],
    correctAnswer: '先人が残してくれた恩恵',
    explanation: '余沢（よたく）は、先人が残してくれた恩恵。また、あり余って他にまで及ぶ広大な恩沢。余徳。',
    difficulty: 4
  },
  {
    id: '24',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「焠鍼」',
    choices: ['さいしん', 'すいしん', 'さいじん', 'すいじん'],
    correctAnswer: 'さいしん',
    explanation: '焠鍼（さいしん）は、医療用の鍼の一種。',
    difficulty: 6
  },
  {
    id: '25',
    type: 'meaning',
    question: '「賛襄」の意味として正しいものはどれですか？',
    choices: ['助けて事を行うこと', '反対すること', '批判すること', '無視すること'],
    correctAnswer: '助けて事を行うこと',
    explanation: '賛襄（さんじょう）は、助けて事を行うこと。君主を助けて政治を行うこと。',
    difficulty: 5
  },
  {
    id: '26',
    type: 'meaning',
    question: '「聳動」の意味として正しいものはどれですか？',
    choices: ['驚かし動揺させること', '高く積み上げること', '静かに動くこと', '優雅に踊ること'],
    correctAnswer: '驚かし動揺させること',
    explanation: '聳動（しょうどう）は、驚かし動揺させること。また、恐れ動揺すること。',
    difficulty: 5
  },
  {
    id: '27',
    type: 'meaning',
    question: '「纏頭」の意味として正しいものはどれですか？',
    choices: ['祝儀', '頭巾', '帽子', '髪飾り'],
    correctAnswer: '祝儀',
    explanation: '纏頭（てんとう）は、祝儀。はな。心づけ。歌舞・演芸などをした者に、褒美として衣服・金銭などを与えること。',
    difficulty: 4
  },
  {
    id: '28',
    type: 'idiom',
    question: '「沐猴にして冠す」の意味として正しいものはどれですか？',
    choices: [
      '見かけは立派だが、心が卑しく思慮分別に欠ける人物のたとえ',
      '猿が人間のように振る舞うこと',
      '偉い人が謙遜すること',
      '身分の高い人が庶民と交流すること'
    ],
    correctAnswer: '見かけは立派だが、心が卑しく思慮分別に欠ける人物のたとえ',
    explanation: '沐猴にして冠す（もっこうにしてかんす）は、猿であるのに冠をかぶっている。見かけは立派だが、心が卑しく思慮分別に欠ける人物のたとえ。',
    difficulty: 6
  },
  {
    id: '29',
    type: 'meaning',
    question: '「沐猴」の意味として正しいものはどれですか？',
    choices: ['猿の類', '水鳥', '犬の種類', '野生の馬'],
    correctAnswer: '猿の類',
    explanation: '沐猴（もっこう）は、猿の類。',
    difficulty: 5
  },
  {
    id: '30',
    type: 'idiom',
    question: '「白頭新の如く、傾蓋故の如し」の意味として正しいものはどれですか？',
    choices: [
      '交友の深さは付き合った年月の長さによらず、互いの心を知る深さによる',
      '年をとると新しいことを忘れやすくなる',
      '古い友人が一番信頼できる',
      '白髪になっても友情は変わらない'
    ],
    correctAnswer: '交友の深さは付き合った年月の長さによらず、互いの心を知る深さによる',
    explanation: '白頭新の如く、傾蓋故の如し（ハクトウシンのごとくケイガイコのごとし）は、交友の深さは付き合った年月の長さによらず、互いの心を知る深さによるたとえ。',
    difficulty: 6
  },
  {
    id: '31',
    type: 'meaning',
    question: '「牛酪」の意味として正しいものはどれですか？',
    choices: ['バター', 'チーズ', '牛乳', 'ヨーグルト'],
    correctAnswer: 'バター',
    explanation: '牛酪（ぎゅうらく）は、バターを意味します。',
    difficulty: 3
  },
  {
    id: '32',
    type: 'meaning',
    question: '「双魚」の意味として正しいものはどれですか？',
    choices: ['手紙', '魚料理', '双子', '二匹の魚'],
    correctAnswer: '手紙',
    explanation: '双魚（そうぎょ）は、遠来の客が置いていった2匹の鯉の腹中に手紙があったという「古楽府」の故事から手紙のこと。双鯉。',
    difficulty: 5
  },
  {
    id: '33',
    type: 'meaning',
    question: '「鵝眼」の意味として正しいものはどれですか？',
    choices: ['銭の異称', '鳥の目', '宝石', '飾り物'],
    correctAnswer: '銭の異称',
    explanation: '鵝眼（ががん）は、「ががんせん（鵝眼銭）」の略。円形の中に四角の穴のあいている銭の形状が、鵝鳥の目がまるくて瞳の四角なさまに似ているところから銭の異称。',
    difficulty: 5
  },
  {
    id: '34',
    type: 'meaning',
    question: '「雌黄」の意味として正しいものはどれですか？',
    choices: ['詩文を改竄したり、添削したりすること', '黄色い絵の具', '薬草の一種', '女性の化粧品'],
    correctAnswer: '詩文を改竄したり、添削したりすること',
    explanation: '雌黄（しおう）は、昔中国で、文字の抹消に用いたところから詩文を改竄したり、添削したりすることを意味します。',
    difficulty: 5
  },
  {
    id: '35',
    type: 'meaning',
    question: '「影向」の意味として正しいものはどれですか？',
    choices: ['神仏が仮の姿をとって現れること', '影が向かうこと', '写真を撮ること', '鏡に映ること'],
    correctAnswer: '神仏が仮の姿をとって現れること',
    explanation: '影向（ようごう）は、神仏が仮の姿をとって現れること。神仏の来臨。',
    difficulty: 5
  },
  {
    id: '36',
    type: 'meaning',
    question: '「繍腸」の意味として正しいものはどれですか？',
    choices: ['詩文の才に富んでいること', '美しい服装', '刺繍の技術', '内臓の病気'],
    correctAnswer: '詩文の才に富んでいること',
    explanation: '繍腸（しゅうちょう）は、にしきの心の意。詩文の才に富んでいること。豊かな詩情。',
    difficulty: 5
  },
  {
    id: '37',
    type: 'meaning',
    question: '「圭復」の意味として正しいものはどれですか？',
    choices: ['人から来た手紙を繰り返して読むこと', '玉を元に戻すこと', '約束を守ること', '復讐すること'],
    correctAnswer: '人から来た手紙を繰り返して読むこと',
    explanation: '圭復（けいふく）は、容が白圭の詩を何度も繰り返して読んだという「論語」先進の故事から人から来た手紙を繰り返して読むこと。',
    difficulty: 6
  },
  {
    id: '38',
    type: 'fourCharacter',
    question: '「円融三諦」の意味として正しいものはどれですか？',
    choices: [
      '天台宗で説く三つの真理のこと',
      '三人の僧侶が修行すること',
      '円形の建物の三つの門',
      '三つの季節が調和すること'
    ],
    correctAnswer: '天台宗で説く三つの真理のこと',
    explanation: '円融三諦（えんにゅうさんたい）は、仏教のことばで、天台宗で説く三つの真理のこと。空諦、仮諦、中諦が互いに融けあって、同時に成立していること。',
    difficulty: 6
  },
  {
    id: '39',
    type: 'meaning',
    question: '「月旦評」の意味として正しいものはどれですか？',
    choices: ['人物の批評', '月の観察', '朝の挨拶', '夜の反省'],
    correctAnswer: '人物の批評',
    explanation: '月旦評（ゲッタンヒョウ）は、中国後漢代、許劭が毎月ついたちにいとこの許靖と郷里の人物の批評をしあった故事から。',
    difficulty: 5
  },
  {
    id: '40',
    type: 'fourCharacter',
    question: '「花下曬褌」の意味として正しいものはどれですか？',
    choices: [
      '風流の心の無いたとえ',
      '春の洗濯の様子',
      '花見の準備をすること',
      '庭仕事をすること'
    ],
    correctAnswer: '風流の心の無いたとえ',
    explanation: '花下曬褌（かか－さいこん）は、風流の心の無いたとえ。「曬」は日光にさらすこと。',
    difficulty: 6
  },
  {
    id: '41',
    type: 'meaning',
    question: '「桑楡」の意味として正しいものはどれですか？',
    choices: ['晩年', '植物の名前', '農作業', '絹の原料'],
    correctAnswer: '晩年',
    explanation: '桑楡（そうゆ）は、夕日が樹木の枝にかかること。夕方。夕日。一生の終わりの時期。晩年。',
    difficulty: 4
  },
  {
    id: '42',
    type: 'meaning',
    question: '「跟随」の意味として正しいものはどれですか？',
    choices: ['人のあとについていくこと', '足跡を調べること', '靴を履くこと', '歩き方を教えること'],
    correctAnswer: '人のあとについていくこと',
    explanation: '跟随（こんずい）は、「跟」はかかとの意。人のあとについていくこと。',
    difficulty: 4
  },
  {
    id: '43',
    type: 'meaning',
    question: '「魁梧」の意味として正しいものはどれですか？',
    choices: ['からだが大きくりっぱであること', '頭が良いこと', '力が強いこと', '背が高いこと'],
    correctAnswer: 'からだが大きくりっぱであること',
    explanation: '魁梧（かいご）は、「魁」はおおきい、「梧」は壮大なさまの意。からだが大きくりっぱであること。魁偉。',
    difficulty: 4
  },
  {
    id: '44',
    type: 'meaning',
    question: '「遐齢」の意味として正しいものはどれですか？',
    choices: ['長寿', '遠い年代', '高齢者', '年齢不詳'],
    correctAnswer: '長寿',
    explanation: '遐齢（かれい）は、長生きをすること。長寿。',
    difficulty: 4
  },
  {
    id: '45',
    type: 'meaning',
    question: '「謙退」の意味として正しいものはどれですか？',
    choices: ['へりくだって控え目にする', '辞職すること', '後退すること', '謝罪すること'],
    correctAnswer: 'へりくだって控え目にする',
    explanation: '謙退（けんたい）は、へりくだって控え目にする。',
    difficulty: 3
  },
  {
    id: '46',
    type: 'meaning',
    question: '「権輿」の意味として正しいものはどれですか？',
    choices: ['物事の始まり', '権力の象徴', '輿論調査', '選挙の権利'],
    correctAnswer: '物事の始まり',
    explanation: '権輿（けんよ）は、「権」は秤のおもり、「輿」は車の底の部分の意で、どちらも最初に作る部分であるところから物事の始まり。',
    difficulty: 5
  },
  {
    id: '47',
    type: 'meaning',
    question: '「堂奥」の意味として正しいものはどれですか？',
    choices: ['学問・技芸の奥義', '建物の奥の部屋', '家族の集まり', '秘密の場所'],
    correctAnswer: '学問・技芸の奥義',
    explanation: '堂奥（どうおう）は、堂内の奥まった所。学問・技芸の奥義。秘奥。',
    difficulty: 4
  },
  {
    id: '48',
    type: 'meaning',
    question: '「涓埃」の意味として正しいものはどれですか？',
    choices: ['きわめてわずかな物や事のたとえ', '水滴と塵', '清らかな水', '小さな川'],
    correctAnswer: 'きわめてわずかな物や事のたとえ',
    explanation: '涓埃（けんあい）は、しずくとちり。涓滴と塵埃。転じて、きわめてわずかな物や事のたとえにも用いる。',
    difficulty: 5
  },
  {
    id: '49',
    type: 'meaning',
    question: '「芥蔕」の意味として正しいものはどれですか？',
    choices: ['わずかな心のわだかまり', '小さな種', '草の根', '野菜の切れ端'],
    correctAnswer: 'わずかな心のわだかまり',
    explanation: '芥蔕（かいたい）は、胸のつかえ。わずかな心のわだかまり。きわめてわずかなこと。',
    difficulty: 5
  },
  {
    id: '50',
    type: 'meaning',
    question: '「羽儀」の意味として正しいものはどれですか？',
    choices: ['人の模範となること', '鳥の羽の美しさ', '飛行の技術', '儀式の道具'],
    correctAnswer: '人の模範となること',
    explanation: '羽儀（うぎ）は、人の模範となること。また、そのようなりっぱな人。',
    difficulty: 4
  },
  {
    id: '51',
    type: 'meaning',
    question: '「疾呼」の意味として正しいものはどれですか？',
    choices: ['口早に激しく呼びたてること', '病気の症状', '早く走ること', '急いで帰ること'],
    correctAnswer: '口早に激しく呼びたてること',
    explanation: '疾呼（しっこ）は、口早に激しく呼びたてること。慌ただしく呼ぶこと。',
    difficulty: 4
  },
  {
    id: '52',
    type: 'meaning',
    question: '「筑羅」の意味として正しいものはどれですか？',
    choices: ['どっちつかず', '楽器の名前', '建築物の一部', '地名'],
    correctAnswer: 'どっちつかず',
    explanation: '筑羅（ちくら）は、日本と朝鮮半島との境にある巨済島の古称「涜盧」の音変化とも、「筑」は筑紫、「羅」は新羅のことともいう。日本とも中国ともつかないこと。どっちつかず。',
    difficulty: 5
  },
  {
    id: '53',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「鶉斑」',
    choices: ['うずらふ', 'あじふ', 'じゅんはん', 'うずらもよう'],
    correctAnswer: 'うずらふ',
    explanation: '鶉斑（うずらふ）は、茶色に黒白の斑紋のある文様。または陶器で、鉄質の黒釉が局部的に酸化し、赤褐色で表れた小斑。',
    difficulty: 6
  },
  {
    id: '54',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「御厳」',
    choices: ['みいつ', 'ごげん', 'みげん', 'おんげん'],
    correctAnswer: 'みいつ',
    explanation: '御厳（みいつ）は、「厳」を敬っていう語。天皇や神などの威光。',
    difficulty: 6
  },
  {
    id: '55',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「卿相」',
    choices: ['けいしょう', 'けいそう', 'きょうしょう', 'きょうそう'],
    correctAnswer: 'けいしょう',
    explanation: '卿相（けいしょう）は、天子をたすけて政治を執る人々。太政大臣、左大臣、右大臣、内大臣および大納言、中納言、参議など。公卿。',
    difficulty: 6
  },
  {
    id: '56',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「笑柄」',
    choices: ['しょうへい', 'えたく', 'わらいえ', 'しょうがら'],
    correctAnswer: 'しょうへい',
    explanation: '笑柄（しょうへい）は、笑いの種になるもの。お笑いぐさ。',
    difficulty: 5
  },
  {
    id: '57',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「鷗盟」',
    choices: ['おうめい', 'かもめい', 'おうめん', 'めいおう'],
    correctAnswer: 'おうめい',
    explanation: '鷗盟（おうめい）は、隠居すること。または世俗から離れた風流なつきあい。カモメを友とする意から。',
    difficulty: 6
  },
  {
    id: '58',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「鄙吝」',
    choices: ['ひりん', 'いやしりん', 'ひけち', 'びりん'],
    correctAnswer: 'ひりん',
    explanation: '鄙吝（ひりん）は、いやしくてけちなこと。',
    difficulty: 5
  },
  {
    id: '59',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「干禄」',
    choices: ['かんろく', 'ほしろく', 'かんふく', 'ひろく'],
    correctAnswer: 'かんろく',
    explanation: '干禄（かんろく）は、俸禄を求めること。仕官を望むこと。または幸いを求めること。',
    difficulty: 5
  },
  {
    id: '60',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「儕輩」',
    choices: ['せいはい', 'さいはい', 'どうはい', 'そうはい'],
    correctAnswer: 'せいはい',
    explanation: '儕輩（せいはい）は、同じ仲間。同輩。朋輩。',
    difficulty: 6
  },
  {
    id: '61',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「艀」',
    choices: ['はしけ', 'はしぶね', 'いかだ', 'ふね'],
    correctAnswer: 'はしけ',
    explanation: '艀（はしけ）は、河川・港湾などで大型船と陸との間を往復して貨物や乗客を運ぶ小舟。船幅が広く、平底。',
    difficulty: 6
  },
  {
    id: '62',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「水翻」',
    choices: ['みずこぼし', 'すいはん', 'みずかえし', 'すいてん'],
    correctAnswer: 'みずこぼし',
    explanation: '水翻（みずこぼし）は、茶道で、茶碗のすすぎ湯を捨てる容器。',
    difficulty: 6
  },
  {
    id: '63',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「石蕗」',
    choices: ['つわぶき', 'いしぶき', 'せきろ', 'いしそう'],
    correctAnswer: 'つわぶき',
    explanation: '石蕗（つわぶき）は、キク科の多年草。暖地の海岸近くに自生。葉はフキに似るが、厚く、光沢がある。',
    difficulty: 5
  },
  {
    id: '64',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「石韋」',
    choices: ['ひとつば', 'いしい', 'せきい', 'いわば'],
    correctAnswer: 'ひとつば',
    explanation: '石韋（ひとつば）は、ウラボシ科の多年生シダ植物。暖地の山中に自生。長さ約二十センチメートルの革質の葉が根茎から一枚ずつ直立する。',
    difficulty: 6
  },
  {
    id: '65',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「磚子苗」',
    choices: ['いぬくぐ', 'せんしびょう', 'れんがびょう', 'いぬぐさ'],
    correctAnswer: 'いぬくぐ',
    explanation: '磚子苗（いぬくぐ）は、カヤツリグサ科の多年草。日当たりのよい草地に自生。夏から秋、黄緑色の花穂を傘状につける。',
    difficulty: 6
  },
  {
    id: '66',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「疾悪」',
    choices: ['しつお', 'しっお', 'しつあく', 'きゅうあく'],
    correctAnswer: 'しつお',
    explanation: '疾悪（しつお）は、にくむこと。憎悪。嫌悪。',
    difficulty: 5
  },
  {
    id: '67',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「鍾寵」',
    choices: ['しょうちょう', 'かねちょう', 'しゅうちょう', 'あつめちょう'],
    correctAnswer: 'しょうちょう',
    explanation: '鍾寵（しょうちょう）は、非常に大事にしてかわいがること。鍾愛。',
    difficulty: 6
  },
  {
    id: '68',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「致仕」',
    choices: ['ちし', 'ちじ', 'いたし', 'せいし'],
    correctAnswer: 'ちし',
    explanation: '致仕（ちし）は、官職を退くこと。また、退官して隠居すること。70歳の異称。',
    difficulty: 5
  },
  {
    id: '69',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「任放」',
    choices: ['にんぽう', 'まかせっぱなし', 'にんほう', 'じんぽう'],
    correctAnswer: 'にんぽう',
    explanation: '任放（にんぽう）は、礼法を捨てて思いのままにふるまうこと。また、気ままにうちすててほうっておくこと。',
    difficulty: 6
  },
  {
    id: '70',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「巫蠱」',
    choices: ['ふこ', 'みこまじない', 'ふぐ', 'しゃまんこ'],
    correctAnswer: 'ふこ',
    explanation: '巫蠱（ふこ）は、みこやまじない師。また、まじないで人をのろうこと。呪法によって人をのろうこと。',
    difficulty: 6
  },
  {
    id: '71',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「万籟」',
    choices: ['ばんらい', 'まんらい', 'ばんるい', 'まんるい'],
    correctAnswer: 'ばんらい',
    explanation: '万籟（ばんらい）は、種々のものが、風に吹かれて立てる音。また、すべての物音。衆籟。',
    difficulty: 6
  },
  {
    id: '72',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「幇間」',
    choices: ['ほうかん', 'きょうかん', 'ばんかん', 'たいこもち'],
    correctAnswer: 'ほうかん',
    explanation: '幇間（ほうかん）は、宴席などで客の機嫌をとり、酒宴の興を助けるのを職業とする男。太鼓持ち。男芸者。',
    difficulty: 6
  },
  {
    id: '73',
    type: 'meaning',
    question: '「枚」の意味として正しいものはどれですか？',
    choices: ['夜討ちのときに兵士や馬の口にくわえさせた道具', '数を数える単位', '薄い板', '武器の一種'],
    correctAnswer: '夜討ちのときに兵士や馬の口にくわえさせた道具',
    explanation: '枚（ばい）は、昔、夜討ちのときなどに声を出さないように、兵士や馬の口にくわえさせた、箸のような形をした道具。',
    difficulty: 6
  },
  {
    id: '74',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「赳赳」',
    choices: ['きゅうきゅう', 'たけたけ', 'つよつよ', 'ゆうゆう'],
    correctAnswer: 'きゅうきゅう',
    explanation: '赳赳（きゅうきゅう）は、勇ましいさま。つよいさま。',
    difficulty: 6
  },
  {
    id: '75',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「驀地」',
    choices: ['まっしぐら', 'ばくち', 'まっさきに', 'つきすすむ'],
    correctAnswer: 'まっしぐら',
    explanation: '驀地（まっしぐら）は、激しい勢いで目標に向かって突き進むさま。いっさんに。',
    difficulty: 5
  },
  {
    id: '76',
    type: 'idiom',
    question: '「甑に坐するが如し」の意味として正しいものはどれですか？',
    choices: [
      '夏の暑さのはなはだしいさま',
      '座り心地が悪い',
      '蒸し暑い部屋',
      '料理が上手'
    ],
    correctAnswer: '夏の暑さのはなはだしいさま',
    explanation: '甑（こしき）に座って下から蒸されているようである。夏の暑さのはなはだしいさまのたとえ。',
    difficulty: 6
  },
  {
    id: '77',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「緞帳芝居」',
    choices: ['どんちょうしばい', 'だんちょうしばい', 'だんじょうしばい', 'どんじょうしばい'],
    correctAnswer: 'どんちょうしばい',
    explanation: '緞帳芝居（どんちょうしばい）は、江戸時代から明治中ごろまで、条件付きで認可された格式の低い小劇場。',
    difficulty: 5
  },
  {
    id: '78',
    type: 'fourCharacter',
    question: '「橦末之伎」の意味として正しいものはどれですか？',
    choices: ['軽業のこと', '竹の技術', '武芸の一種', '音楽の技術'],
    correctAnswer: '軽業のこと',
    explanation: '橦末之伎（とうまつのぎ）は、軽業のこと。竿の先端で行う曲芸という意味から。',
    difficulty: 6
  },
  {
    id: '79',
    type: 'fourCharacter',
    question: '「磨揉遷革」の意味として正しいものはどれですか？',
    choices: [
      '教育や指導をして、よい方向に導くこと',
      '物を磨いて美しくすること',
      '革命を起こすこと',
      '技術を改善すること'
    ],
    correctAnswer: '教育や指導をして、よい方向に導くこと',
    explanation: '磨揉遷革（まじゅうせんかく）は、教育や指導をして、よい方向に導くこと。',
    difficulty: 6
  },
  {
    id: '80',
    type: 'fourCharacter',
    question: '「朽木糞牆」の意味として正しいものはどれですか？',
    choices: [
      '精神のくさった人間は教育のしようがない',
      '古いものを新しくすること',
      '建物が朽ち果てること',
      '掃除をしないでいること'
    ],
    correctAnswer: '精神のくさった人間は教育のしようがない',
    explanation: '朽木糞牆（きゅうぼくふんしょう）は、朽ちた木は彫刻できず、腐った壁は塗りかえができない。精神のくさった人間は教育のしようがないことにいう。',
    difficulty: 6
  },
  {
    id: '81',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「陶坏」',
    choices: ['すえつき', 'とうはい', 'すえつぼ', 'とうき'],
    correctAnswer: 'すえつき',
    explanation: '陶坏（すえつき）は、陶製の杯。かわらけ。',
    difficulty: 6
  },
  {
    id: '82',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「曼珠沙華」',
    choices: ['まんじゅしゃげ', 'まんしゅしゃか', 'まんじゅしゃか', 'ひがんばな'],
    correctAnswer: 'まんじゅしゃげ',
    explanation: '曼珠沙華（まんじゅしゃげ）は、仏語で天界の花。またはヒガンバナの別名。',
    difficulty: 5
  },
  {
    id: '83',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「梳毛」',
    choices: ['そもう', 'くしげ', 'そくもう', 'けずりげ'],
    correctAnswer: 'そもう',
    explanation: '梳毛（そもう）は、羊毛繊維をくしけずって短いものを取り除き、長い繊維を平行にそろえること。',
    difficulty: 6
  },
  {
    id: '84',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「纛幡」',
    choices: ['とうばん', 'どくはん', 'だくばん', 'たくばん'],
    correctAnswer: 'とうばん',
    explanation: '纛幡（とうばん）は、平安時代、軍陣で将軍の標識として立てた旗。',
    difficulty: 6
  },
  {
    id: '85',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「黄口児」',
    choices: ['こうこうじ', 'きぐちじ', 'おうこうじ', 'きいろぐちこ'],
    correctAnswer: 'こうこうじ',
    explanation: '黄口児（こうこうじ）は、年が若く、経験や知識などが足りない者。青二才。',
    difficulty: 6
  },
  {
    id: '86',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「績む」',
    choices: ['うむ', 'つむ', 'おりなす', 'あむ'],
    correctAnswer: 'うむ',
    explanation: '績む（うむ）は、麻・苧からむしなどの繊維を細く長くより合わせる。紡ぐ。',
    difficulty: 6
  },
  {
    id: '87',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「揖譲」',
    choices: ['ゆうじょう', 'いじょう', 'きゅうじょう', 'いつじょう'],
    correctAnswer: 'ゆうじょう',
    explanation: '揖譲（ゆうじょう）は、拱手して、へりくだること。古代中国の作法。または天子の位を譲ること。',
    difficulty: 6
  },
  {
    id: '88',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「優諚」',
    choices: ['ゆうじょう', 'ゆうちょう', 'ゆうでい', 'やさしいことば'],
    correctAnswer: 'ゆうじょう',
    explanation: '優諚（ゆうじょう）は、天子の、ありがたい言葉。',
    difficulty: 6
  },
  {
    id: '89',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「﨟長ける」',
    choices: ['ろうたける', 'らくたける', 'ろうまさる', 'らふたける'],
    correctAnswer: 'ろうたける',
    explanation: '﨟長ける（ろうたける）は、洗練された美しさと気品がある。経験を積んでりっぱである。',
    difficulty: 6
  },
  {
    id: '90',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「優婆夷」',
    choices: ['うばい', 'ゆうばい', 'うはい', 'やさしいおんな'],
    correctAnswer: 'うばい',
    explanation: '優婆夷（うばい）は、女性の在家仏教信者。清信女。近事女。',
    difficulty: 6
  },
  {
    id: '91',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「掩蔽」',
    choices: ['えんぺい', 'おおいかくし', 'いんぺい', 'かくしおおう'],
    correctAnswer: 'えんぺい',
    explanation: '掩蔽（えんぺい）は、おおい隠すこと。また地球と恒星または惑星との間に月が入り、恒星・惑星を隠す現象。',
    difficulty: 6
  },
  {
    id: '92',
    type: 'fourCharacter',
    question: '「以杙為楹」の意味として正しいものはどれですか？',
    choices: [
      '取るに足らない人物を重用することのたとえ',
      '適材適所で人を使うこと',
      '建築技術が優れていること',
      '小さなものを大切にすること'
    ],
    correctAnswer: '取るに足らない人物を重用することのたとえ',
    explanation: '以杙為楹（いよくいえい）は、小さな杭を家の大黒柱として使うということから、取るに足らない人物を重用することのたとえ。',
    difficulty: 6
  },
  {
    id: '93',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「寸莎」',
    choices: ['すさ', 'すんさ', 'ちいさなくさ', 'きざみわら'],
    correctAnswer: 'すさ',
    explanation: '寸莎（すさ）は、壁土に混ぜてつなぎにする、藁・麻・紙などを細かく切ったもの。壁のひび割れを防ぐ。',
    difficulty: 6
  },
  {
    id: '94',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「金剛纂」',
    choices: ['やつで', 'こんごうさん', 'きんこうさん', 'やつで'],
    correctAnswer: 'やつで',
    explanation: '金剛纂（やつで）は、ウコギ科の常緑低木。',
    difficulty: 6
  },
  {
    id: '95',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「椎輪」',
    choices: ['ついりん', 'しいりん', 'づいりん', 'すいりん'],
    correctAnswer: 'ついりん',
    explanation: '椎輪（ついりん）は、竹や木の材のままで飾りのない車。古代のそまつな車。転じて、物事のはじめ。',
    difficulty: 6
  },
  {
    id: '96',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「玉響」',
    choices: ['たまゆら', 'ぎょくきょう', 'たまひびき', 'ぎょくおう'],
    correctAnswer: 'たまゆら',
    explanation: '玉響（たまゆら）は、少しの間。ほんのしばらく。',
    difficulty: 5
  },
  {
    id: '97',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「無始」',
    choices: ['むし', 'ぶし', 'むはじまり', 'おわりなし'],
    correctAnswer: 'むし',
    explanation: '無始（むし）は、万象は因縁で成り立っていて、因をいくらさかのぼっても果てしがなく、始めがないこと。無限に遠い過去。',
    difficulty: 6
  },
  {
    id: '98',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「裘褐」',
    choices: ['きゅうかつ', 'きゅうかち', 'がいかつ', 'しつそ'],
    correctAnswer: 'きゅうかつ',
    explanation: '裘褐（きゅうかつ）は、皮衣と、粗い毛織りの衣服。質素な衣服。',
    difficulty: 6
  },
  {
    id: '99',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「旄倪」',
    choices: ['ぼうげい', 'ぼうじ', 'ろうどうしょうじ', 'たかはたとしより'],
    correctAnswer: 'ぼうげい',
    explanation: '旄倪（ぼうげい）は、老人と小児。',
    difficulty: 6
  },
  {
    id: '100',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「爛柯」',
    choices: ['らんか', 'らんえ', 'くさりえ', 'くちえ'],
    correctAnswer: 'らんか',
    explanation: '爛柯（らんか）は、囲碁の別称。囲碁に夢中になって時のたつのを忘れること。',
    difficulty: 6
  },
  {
    id: '101',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「御食」',
    choices: ['みけ', 'ごしょく', 'おんしょく', 'みしょく'],
    correctAnswer: 'みけ',
    explanation: '御食（みけ）は、神への供物。また、天皇の食事の料。',
    difficulty: 6
  },
  {
    id: '102',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「突鼻」',
    choices: ['とつび', 'つきはな', 'とっぱな', 'つくび'],
    correctAnswer: 'とつび',
    explanation: '突鼻（とつび）は、主人からとがめを受けること。きびしく責められること。',
    difficulty: 6
  },
  {
    id: '103',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「汪然」',
    choices: ['おうぜん', 'おうねん', 'みずいっぱい', 'みずにんらん'],
    correctAnswer: 'おうぜん',
    explanation: '汪然（おうぜん）は、涙が盛んに流れるさま。',
    difficulty: 6
  },
  {
    id: '104',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「値遇」',
    choices: ['ちぐ', 'あたいぐう', 'ちぐう', 'ねだんであう'],
    correctAnswer: 'ちぐ',
    explanation: '値遇（ちぐ）は、縁あってめぐりあうこと。特に、仏縁あるものにめぐりあうこと。',
    difficulty: 6
  },
  {
    id: '105',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「小鮮」',
    choices: ['しょうせん', 'こざかな', 'しょうあざ', 'こあたら'],
    correctAnswer: 'しょうせん',
    explanation: '小鮮（しょうせん）は、小さい魚。こざかな。',
    difficulty: 6
  },
  {
    id: '106',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「里閭」',
    choices: ['りりょ', 'さとりょ', 'りょり', 'さとろ'],
    correctAnswer: 'りりょ',
    explanation: '里閭（りりょ）は、村里。村落。閭里。また、村の入り口の門。',
    difficulty: 6
  },
  {
    id: '107',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「感孚」',
    choices: ['かんぷ', 'かんふ', 'かんぼ', 'かんこう'],
    correctAnswer: 'かんぷ',
    explanation: '感孚（かんぷ）は、心に深く感じること。まごころを通わすこと。',
    difficulty: 6
  },
  {
    id: '108',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「北辰」',
    choices: ['ほくしん', 'きたたつ', 'ほくたつ', 'きたしん'],
    correctAnswer: 'ほくしん',
    explanation: '北辰（ほくしん）は、北極星の異称。または皇居、天子。',
    difficulty: 6
  },
  {
    id: '109',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「黎元」',
    choices: ['れいげん', 'くろもと', 'れいもと', 'たみ'],
    correctAnswer: 'れいげん',
    explanation: '黎元（れいげん）は、人民。庶民。たみ。黎民。黎首。',
    difficulty: 6
  },
  {
    id: '110',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「一闡提」',
    choices: ['いっせんだい', 'いちせんだい', 'いっせんてい', 'ひとつせんだい'],
    correctAnswer: 'いっせんだい',
    explanation: '一闡提（いっせんだい）は、仏法を信じることなく、成仏の素質を欠く者。',
    difficulty: 6
  },
  {
    id: '111',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「沾沾」',
    choices: ['せんせん', 'てんてん', 'しめしめ', 'うるうる'],
    correctAnswer: 'せんせん',
    explanation: '沾沾（せんせん）は、自得するさま。',
    difficulty: 6
  },
  {
    id: '112',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「繙閲」',
    choices: ['はんえつ', 'ばんえつ', 'はんけん', 'ばんけん'],
    correctAnswer: 'はんえつ',
    explanation: '繙閲（はんえつ）は、書物を読み調べること。繙読。',
    difficulty: 6
  },
  {
    id: '113',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「献酬」',
    choices: ['けんしゅう', 'けんしゅ', 'こんしゅう', 'けんちゅう'],
    correctAnswer: 'けんしゅう',
    explanation: '献酬（けんしゅう）は、酒宴などで、杯をやりとりすること。杯を酌み交わすこと。',
    difficulty: 6
  },
  {
    id: '114',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「妍醜」',
    choices: ['けんしゅう', 'けんしゅ', 'びしゅう', 'うつくしいみにく'],
    correctAnswer: 'けんしゅう',
    explanation: '妍醜（けんしゅう）は、容貌の美しいことと醜いこと。美醜。',
    difficulty: 6
  },
  {
    id: '115',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「連枝」',
    choices: ['れんし', 'つらなりえだ', 'れんえだ', 'つながりえだ'],
    correctAnswer: 'れんし',
    explanation: '連枝（れんし）は、連なっている枝。また、貴人の兄弟姉妹。',
    difficulty: 6
  },
  {
    id: '116',
    type: 'fourCharacter',
    question: '「吮癰舐痔」の意味として正しいものはどれですか？',
    choices: [
      'ひどくへつらいこびること',
      '医療技術が優れていること',
      '病気の治療をすること',
      '人の世話をすること'
    ],
    correctAnswer: 'ひどくへつらいこびること',
    explanation: '吮癰舐痔（せんようしじ）は、癰の膿を吸い、痔をなめる。ひどくへつらいこびること。',
    difficulty: 6
  },
  {
    id: '117',
    type: 'fourCharacter',
    question: '「片言折獄」の意味として正しいものはどれですか？',
    choices: [
      'ただ一言でだれもが納得するような裁判の判決を下すこと',
      '簡単な言葉で説明すること',
      '短い時間で決断すること',
      '少ない言葉で相手を説得すること'
    ],
    correctAnswer: 'ただ一言でだれもが納得するような裁判の判決を下すこと',
    explanation: '片言折獄（へんげんせつごく）は、ただ一言でだれもが納得するような裁判の判決を下すこと。',
    difficulty: 6
  },
  {
    id: '118',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「淋滲」',
    choices: ['つつげ', 'りんしん', 'なみだしみ', 'したたりしみ'],
    correctAnswer: 'つつげ',
    explanation: '淋滲（つつげ）は、鳥のはじめて生えた羽毛。雛のうぶ毛。',
    difficulty: 6
  },
  {
    id: '119',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「剪秋羅」',
    choices: ['せんのう', 'せんしゅうら', 'きりあきら', 'はさみあきら'],
    correctAnswer: 'せんのう',
    explanation: '剪秋羅（せんのう）は、ナデシコ科の多年草。',
    difficulty: 6
  },
  {
    id: '120',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「地錦」',
    choices: ['つた', 'ちにしき', 'じきん', 'ちきん'],
    correctAnswer: 'つた',
    explanation: '地錦（つた）は、ブドウ科のつる性落葉植物。',
    difficulty: 6
  },
  {
    id: '121',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「金襖子」',
    choices: ['かじかがえる', 'きんおうし', 'かなぶすま', 'かじか'],
    correctAnswer: 'かじかがえる',
    explanation: '金襖子（かじかがえる）は、アオガエル科のカエル。渓流の岩間にすむ。',
    difficulty: 6
  },
  {
    id: '122',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「冠冕」',
    choices: ['かんべん', 'かんめん', 'かんみつ', 'こうべん'],
    correctAnswer: 'かんべん',
    explanation: '冠冕（かんべん）は、冕板をつけたかんむり。また、いちばんすぐれているもの。首位。',
    difficulty: 6
  },
  {
    id: '123',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「末班」',
    choices: ['まっぱん', 'ばっぱん', 'すえはん', 'まつはん'],
    correctAnswer: 'まっぱん',
    explanation: '末班（まっぱん）は、すえの班次。低い位。末位。',
    difficulty: 6
  },
  {
    id: '124',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「相見」',
    choices: ['しょうけん', 'あいみ', 'そうけん', 'あいけん'],
    correctAnswer: 'しょうけん',
    explanation: '相見（しょうけん）は、会うこと。対面すること。',
    difficulty: 6
  },
  {
    id: '125',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「滋潤」',
    choices: ['じじゅん', 'しじゅん', 'じるい', 'しげうるお'],
    correctAnswer: 'じじゅん',
    explanation: '滋潤（じじゅん）は、うるおうこと。または、うるおすこと。つややか。',
    difficulty: 6
  },
  {
    id: '126',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「枯竭」',
    choices: ['こけつ', 'かれつき', 'こがい', 'かれかわ'],
    correctAnswer: 'こけつ',
    explanation: '枯竭（こけつ）は、乾いてひからびること。水分がなくなり乾燥すること。',
    difficulty: 6
  },
  {
    id: '127',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「大辟」',
    choices: ['たいへき', 'だいへき', 'おおひら', 'たいび'],
    correctAnswer: 'たいへき',
    explanation: '大辟（たいへき）は、重い刑罰。',
    difficulty: 6
  },
  {
    id: '128',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「軽科」',
    choices: ['けいか', 'きょうか', 'かるか', 'けいしな'],
    correctAnswer: 'けいか',
    explanation: '軽科（けいか）は、軽い罪。軽い罪科。軽罰。',
    difficulty: 6
  },
  {
    id: '129',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「有隣」',
    choices: ['ゆうりん', 'あるとなり', 'ゆうりょう', 'ありとなり'],
    correctAnswer: 'ゆうりん',
    explanation: '有隣（ゆうりん）は、徳のある人の周囲には同類のものが自然に集まること。',
    difficulty: 6
  },
  {
    id: '130',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「不腆」',
    choices: ['ふてん', 'ふたん', 'ふてい', 'あつくない'],
    correctAnswer: 'ふてん',
    explanation: '不腆（ふてん）は、自分に関すること、また自分が贈る物をへりくだっていう語。粗品。',
    difficulty: 6
  },
  {
    id: '131',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「仇野」',
    choices: ['あだしの', 'きゅうや', 'あだの', 'かたきの'],
    correctAnswer: 'あだしの',
    explanation: '仇野（あだしの）は、京都市右京区嵯峨にあった葬送の地。転じて、一般に墓地、墓所。',
    difficulty: 6
  },
  {
    id: '132',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「三昧場」',
    choices: ['さんまいば', 'さんみば', 'みっかいば', 'さんしば'],
    correctAnswer: 'さんまいば',
    explanation: '三昧場（さんまいば）は、僧が中にこもって死者の冥福を祈るため、墓の近くに設ける堂。転じて、墓所・葬場。',
    difficulty: 6
  },
  {
    id: '133',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「芟夷」',
    choices: ['さんい', 'せんい', 'しゃんい', 'しょうい'],
    correctAnswer: 'さんい',
    explanation: '芟夷（さんい）は、草を刈り除くこと。または乱賊などを平定すること。悪習を除去すること。',
    difficulty: 6
  },
  {
    id: '134',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「誅鋤」',
    choices: ['ちゅうじょ', 'ちゅうそ', 'せいじょ', 'しゅじょ'],
    correctAnswer: 'ちゅうじょ',
    explanation: '誅鋤（ちゅうじょ）は、鋤で掘りおこして雑草を根絶やしにすること。または悪人などを殺して絶滅すること。',
    difficulty: 6
  },
  {
    id: '135',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「蕭牆」',
    choices: ['しょうしょう', 'しょうじょう', 'せうしゃう', 'きょうじょう'],
    correctAnswer: 'しょうしょう',
    explanation: '蕭牆（しょうしょう）は、君臣の会見する所に設けた囲い。転じて、内輪。一族。また、国内。',
    difficulty: 6
  },
  {
    id: '136',
    type: 'idiom',
    question: '「虎鬚を編む」の意味として正しいものはどれですか？',
    choices: [
      '非常に危険なことをするたとえ',
      '虎の毛を織り物にすること',
      '勇敢な行為をすること',
      '丁寧な手仕事をすること'
    ],
    correctAnswer: '非常に危険なことをするたとえ',
    explanation: '虎鬚を編む（こしゅをあむ）は、非常に危険なことをするたとえ。',
    difficulty: 6
  },
  {
    id: '137',
    type: 'meaning',
    question: '「渓壑の欲」の意味として正しいものはどれですか？',
    choices: ['限りない欲望のたとえ', '山の美しさ', '自然への憧れ', '清らかな心'],
    correctAnswer: '限りない欲望のたとえ',
    explanation: '渓壑の欲（けいがくのよく）は、限りない欲望のたとえ。強欲のたとえ。',
    difficulty: 6
  },
  {
    id: '138',
    type: 'fourCharacter',
    question: '「完璧帰趙」の意味として正しいものはどれですか？',
    choices: [
      '預かった大切なものを傷一つつけずに返すこと',
      '完璧な状態で故郷に帰ること',
      '宝石を作ること',
      '国に忠義を尽くすこと'
    ],
    correctAnswer: '預かった大切なものを傷一つつけずに返すこと',
    explanation: '完璧帰趙（かんぺききちょう）は、預かった大切なものを傷一つつけずに返すこと。',
    difficulty: 6
  },
  {
    id: '139',
    type: 'idiom',
    question: '「蓼食う虫も好き好き」の意味として正しいものはどれですか？',
    choices: [
      '人の好みは、その人ごとにさまざまであること',
      '辛いものを好む人がいること',
      '虫の食べ物について',
      '植物の性質について'
    ],
    correctAnswer: '人の好みは、その人ごとにさまざまであること',
    explanation: '蓼食う虫も好き好き（たでくうむしもすきずき）は、人の好みは、その人ごとにさまざまであることのたとえ。',
    difficulty: 5
  },
  {
    id: '140',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「宗社」',
    choices: ['そうしゃ', 'しゅうしゃ', 'むねやしろ', 'そうじゃ'],
    correctAnswer: 'そうしゃ',
    explanation: '宗社（そうしゃ）は、宗廟と社稷。転じて、国家。',
    difficulty: 6
  },
  {
    id: '141',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「先塋」',
    choices: ['せんえい', 'せんけい', 'さきつか', 'せんよう'],
    correctAnswer: 'せんえい',
    explanation: '先塋（せんえい）は、先祖の墓。',
    difficulty: 6
  },
  {
    id: '142',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「山彙」',
    choices: ['さんい', 'やまみ', 'さんき', 'やまむら'],
    correctAnswer: 'さんい',
    explanation: '山彙（さんい）は、山系や山脈をなすことなく、孤立している山の集まり。山群。',
    difficulty: 6
  },
  {
    id: '143',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「勒する」',
    choices: ['ろくする', 'ろくする', 'ろくす', 'れいする'],
    correctAnswer: 'ろくする',
    explanation: '勒する（ろくする）は、ととのえる。統御する。彫る。刻む。また、書きとどめる。',
    difficulty: 6
  },
  {
    id: '144',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「殷阜」',
    choices: ['いんぷ', 'いんふ', 'はんさか', 'いんひ'],
    correctAnswer: 'いんぷ',
    explanation: '殷阜（いんぷ）は、繁昌する。',
    difficulty: 6
  },
  {
    id: '145',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「葱花輦」',
    choices: ['そうかれん', 'そうはなみこし', 'ねぎばなれん', 'そうかりん'],
    correctAnswer: 'そうかれん',
    explanation: '葱花輦（そうかれん）は、屋根の上に金色の葱の花の形の飾りをつけた輿。天皇の略儀の行幸に用いた。',
    difficulty: 6
  },
  {
    id: '146',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「楞厳」',
    choices: ['りょうごん', 'りょうげん', 'ろうげん', 'ろうごん'],
    correctAnswer: 'りょうごん',
    explanation: '楞厳（りょうごん）は、「楞厳経」の略。',
    difficulty: 6
  },
  {
    id: '147',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「扞格」',
    choices: ['かんかく', 'がんかく', 'はんかく', 'たんかく'],
    correctAnswer: 'かんかく',
    explanation: '扞格（かんかく）は、意見などが食い違うこと。互いに相手を受け入れないこと。',
    difficulty: 6
  },
  {
    id: '148',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「繁縟」',
    choices: ['はんじょく', 'はんにょく', 'ばんじょく', 'はんしょく'],
    correctAnswer: 'はんじょく',
    explanation: '繁縟（はんじょく）は、種々様々のいろどり。または「繁文縟礼」の略。',
    difficulty: 6
  },
  {
    id: '149',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「左道」',
    choices: ['さとう', 'さどう', 'ひだりみち', 'ひだりどう'],
    correctAnswer: 'さとう',
    explanation: '左道（さとう）は、正しくない道。邪道。または不都合であること。粗末なこと。',
    difficulty: 6
  },
  {
    id: '150',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「雇聘」',
    choices: ['こへい', 'こけい', 'やといひと', 'やとうけい'],
    correctAnswer: 'こへい',
    explanation: '雇聘（こへい）は、礼儀を尽くして迎え、雇うこと。',
    difficulty: 6
  },
  {
    id: '151',
    type: 'fourCharacter',
    question: '「耆婆扁鵲」の意味として正しいものはどれですか？',
    choices: ['世にもまれな名医', '古代の賢者', '音楽の名人', '戦の英雄'],
    correctAnswer: '世にもまれな名医',
    explanation: '耆婆扁鵲（ぎばへんじゃく）は、扁鵲は古代中国の名医であることから、世にもまれな名医。',
    difficulty: 6
  },
  {
    id: '152',
    type: 'fourCharacter',
    question: '「亦歩亦趨」の意味として正しいものはどれですか？',
    choices: [
      '弟子が師匠から学ぶこと、または何も考えずに人に従うこと',
      '歩いたり走ったりすること',
      '一緒に旅をすること',
      '競争すること'
    ],
    correctAnswer: '弟子が師匠から学ぶこと、または何も考えずに人に従うこと',
    explanation: '亦歩亦趨（えきほえきすう）は、弟子が師匠がすることから学ぶこと。または、何も考えずに、ただ人の言う事に従うこと。',
    difficulty: 6
  },
  {
    id: '153',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「桄榔」',
    choices: ['くろつぐ', 'こうろう', 'かんろう', 'こうりょう'],
    correctAnswer: 'くろつぐ',
    explanation: '桄榔（くろつぐ）は、ヤシ科の常緑低木。東南アジア原産。九州南部に野生。',
    difficulty: 6
  },
  {
    id: '154',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「小舌」',
    choices: ['ひこ', 'こした', 'しょうぜつ', 'こぜつ'],
    correctAnswer: 'ひこ',
    explanation: '小舌（ひこ）は、口腔の奥、咽喉の上に垂れている肉。のどびこ。のどちんこ。',
    difficulty: 6
  },
  {
    id: '155',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「蘿蔔」',
    choices: ['すずしろ', 'らふく', 'だいこん', 'らぼく'],
    correctAnswer: 'すずしろ',
    explanation: '蘿蔔（すずしろ）は、ダイコンの別名。春の七草の一つ。',
    difficulty: 6
  },
  {
    id: '156',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「草石蚕」',
    choices: ['ちょろぎ', 'くさいしこ', 'そうせきさん', 'くさいしみ'],
    correctAnswer: 'ちょろぎ',
    explanation: '草石蚕（ちょろぎ）は、シソ科の多年草。高さ30～60センチ。秋、淡紅色の唇形の花を穂状につける。',
    difficulty: 6
  },
  {
    id: '157',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「雲霄」',
    choices: ['うんしょう', 'うんそう', 'くもそら', 'うんしゃう'],
    correctAnswer: 'うんしょう',
    explanation: '雲霄（うんしょう）は、雲のある空。空。または宮中。高い地位のたとえ。',
    difficulty: 6
  },
  {
    id: '158',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「天赦」',
    choices: ['てんしゃ', 'てんしゃく', 'あまゆるし', 'てんせき'],
    correctAnswer: 'てんしゃ',
    explanation: '天赦（てんしゃ）は、「天赦日」の略。',
    difficulty: 6
  },
  {
    id: '159',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「狼藉」',
    choices: ['ろうぜき', 'ろうせき', 'おおかみしき', 'ろうじゃく'],
    correctAnswer: 'ろうぜき',
    explanation: '狼藉（ろうぜき）は、無法な荒々しい振る舞い。乱暴な行い。または物が乱雑に取り散らかっているさま。',
    difficulty: 5
  },
  {
    id: '160',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「暮歯」',
    choices: ['ぼし', 'くれば', 'ぼち', 'ばくし'],
    correctAnswer: 'ぼし',
    explanation: '暮歯（ぼし）は、老年。晩年。',
    difficulty: 6
  },
  {
    id: '161',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「大漸」',
    choices: ['たいぜん', 'だいぜん', 'おおぜん', 'たいしん'],
    correctAnswer: 'たいぜん',
    explanation: '大漸（たいぜん）は、病気が次第に重くなること。特に、帝王の病気が大いに進むこと。',
    difficulty: 6
  },
  {
    id: '162',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「閨秀」',
    choices: ['けいしゅう', 'けいしゅ', 'きしゅう', 'けいそう'],
    correctAnswer: 'けいしゅう',
    explanation: '閨秀（けいしゅう）は、学問・芸術にすぐれた女性。才能豊かな婦人。',
    difficulty: 6
  },
  {
    id: '163',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「秕糠」',
    choices: ['ひこう', 'しいなぬか', 'ひかう', 'ひくこう'],
    correctAnswer: 'ひこう',
    explanation: '秕糠（ひこう）は、しいなと、ぬか。転じて、役に立たないもののたとえ。',
    difficulty: 6
  },
  {
    id: '164',
    type: 'idiom',
    question: '「蛟龍雲雨を得」の意味として正しいものはどれですか？',
    choices: [
      '雌伏する英雄や豪傑が時運を得て、たちまち実力を発揮すること',
      '龍が雨を降らせること',
      '自然現象について',
      '神話の説明'
    ],
    correctAnswer: '雌伏する英雄や豪傑が時運を得て、たちまち実力を発揮すること',
    explanation: '蛟龍雲雨を得（こうりょううんうをう）は、雌伏する英雄や豪傑が時運を得て、たちまち実力を発揮することのたとえ。',
    difficulty: 6
  },
  {
    id: '165',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「綿蛮」',
    choices: ['めんばん', 'めんまん', 'わたまん', 'めんべん'],
    correctAnswer: 'めんばん',
    explanation: '綿蛮（めんばん）は、小鳥のさえずるさま。',
    difficulty: 6
  },
  {
    id: '166',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「淅瀝」',
    choices: ['せきれき', 'せつりき', 'しゃくれき', 'せきりゃく'],
    correctAnswer: 'せきれき',
    explanation: '淅瀝（せきれき）は、哀れで寂しいさま。また、風雨や葉の落ちる音のもの寂しいさま。',
    difficulty: 6
  },
  {
    id: '167',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「赤脚」',
    choices: ['せっきゃく', 'しゃっきゃく', 'あかあし', 'せきかく'],
    correctAnswer: 'せっきゃく',
    explanation: '赤脚（せっきゃく）は、足に何もまとっていないこと。肌がむき出しになっている足。',
    difficulty: 6
  },
  {
    id: '168',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「道う」',
    choices: ['いう', 'どう', 'みちう', 'とう'],
    correctAnswer: 'いう',
    explanation: '道う（いう）は、話す。言葉を述べる。説く。',
    difficulty: 6
  },
  {
    id: '169',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「瓔珞」',
    choices: ['ようらく', 'えいらく', 'ようろく', 'えいろく'],
    correctAnswer: 'ようらく',
    explanation: '瓔珞（ようらく）は、珠玉を連ねた首飾りや腕輪。仏教では仏像を荘厳する飾り具。',
    difficulty: 6
  },
  {
    id: '170',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「髱」',
    choices: ['たぼ', 'ひん', 'はつ', 'ほつ'],
    correctAnswer: 'たぼ',
    explanation: '髱（たぼ）は、日本髪で、襟足にそって背中の方に張り出した部分。',
    difficulty: 6
  },
  {
    id: '171',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「莫連」',
    choices: ['ばくれん', 'まくれん', 'ばくりん', 'はくれん'],
    correctAnswer: 'ばくれん',
    explanation: '莫連（ばくれん）は、すれていてずるがしこいこと。また、そのような女性。あばずれ。',
    difficulty: 6
  },
  {
    id: '172',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「薯蕷」',
    choices: ['しょよ', 'じょよ', 'いもづる', 'いものかずら'],
    correctAnswer: 'しょよ',
    explanation: '薯蕷（しょよ）は、ナガイモまたはヤマノイモの別名。',
    difficulty: 6
  },
  {
    id: '173',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「代赭」',
    choices: ['たいしゃ', 'だいしゃ', 'かわりあか', 'しろあか'],
    correctAnswer: 'たいしゃ',
    explanation: '代赭（たいしゃ）は、赤鉄鉱を原料とする黄褐色または赤褐色の顔料。',
    difficulty: 6
  },
  {
    id: '174',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「狆潜」',
    choices: ['ちんくぐり', 'いぬくぐり', 'ちんもぐり', 'いぬもぐり'],
    correctAnswer: 'ちんくぐり',
    explanation: '狆潜（ちんくぐり）は、床の間の横の壁の下があいているところ。犬潜り。',
    difficulty: 6
  },
  {
    id: '175',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「回瀾」',
    choices: ['かいらん', 'かいらい', 'まわりなみ', 'かいらん'],
    correctAnswer: 'かいらん',
    explanation: '回瀾（かいらん）は、くずれかかった大波。さかまく荒波。',
    difficulty: 6
  },
  {
    id: '176',
    type: 'idiom',
    question: '「回瀾を既倒に反す」の意味として正しいものはどれですか？',
    choices: [
      '勢力のおとろえたのを挽回する',
      '波を押し返すこと',
      '建物を建て直すこと',
      '計画を立て直すこと'
    ],
    correctAnswer: '勢力のおとろえたのを挽回する',
    explanation: '回瀾を既倒に反す（かいらんをきとうにかえす）は、勢力のおとろえたのを挽回する。',
    difficulty: 6
  },
  {
    id: '177',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「朶雲」',
    choices: ['だうん', 'たうん', 'きうん', 'とうん'],
    correctAnswer: 'だうん',
    explanation: '朶雲（だうん）は、他人を敬って、その手紙をいう語。',
    difficulty: 6
  },
  {
    id: '178',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「斎非時」',
    choices: ['ときひじ', 'さいひじ', 'いわいひじ', 'とうきひじ'],
    correctAnswer: 'ときひじ',
    explanation: '斎非時（ときひじ）は、僧家で食事のこと。また、法事などで僧に供する食事のこと。',
    difficulty: 6
  },
  {
    id: '179',
    type: 'fourCharacter',
    question: '「偃鼠飲河」の意味として正しいものはどれですか？',
    choices: [
      '人の欲望は、その人の分に応じたもので満足するべき',
      'ねずみが川の水を飲むこと',
      '小動物の習性について',
      '自然の摂理について'
    ],
    correctAnswer: '人の欲望は、その人の分に応じたもので満足するべき',
    explanation: '偃鼠飲河（えんそいんが）は、人の欲望は、その人の分に応じたもので満足するべきであるということのたとえ。',
    difficulty: 6
  },
  {
    id: '180',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「玫瑰」',
    choices: ['まいかい', 'ばいかい', 'はまなす', 'まいがい'],
    correctAnswer: 'まいかい',
    explanation: '玫瑰（まいかい）は、バラ科の落葉低木。中国原産。またはハマナスの別名。',
    difficulty: 6
  },
  {
    id: '181',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「満俺」',
    choices: ['マンガン', 'まんが', 'まんおれ', 'みつお'],
    correctAnswer: 'マンガン',
    explanation: '満俺（マンガン）は、銀白色で赤みを帯び、鉄よりも硬く、炭素を含むともろい金属元素。',
    difficulty: 5
  },
  {
    id: '182',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「金漆」',
    choices: ['こしあぶら', 'きんしつ', 'きんうるし', 'がねうるし'],
    correctAnswer: 'こしあぶら',
    explanation: '金漆（こしあぶら）は、ウコギ科の落葉高木。山地に自生。',
    difficulty: 6
  },
  {
    id: '183',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「御薪」',
    choices: ['みかまぎ', 'おんしん', 'ごしん', 'みまき'],
    correctAnswer: 'みかまぎ',
    explanation: '御薪（みかまぎ）は、律令時代、毎年正月15日に、百官が宮中に献上した薪。',
    difficulty: 6
  },
  {
    id: '184',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「黄瓜菜」',
    choices: ['にがな', 'きゅうりな', 'おうかさい', 'きうりな'],
    correctAnswer: 'にがな',
    explanation: '黄瓜菜（にがな）は、キク科の多年草。',
    difficulty: 6
  },
  {
    id: '185',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「江浦草」',
    choices: ['つくも', 'えうらぐさ', 'こうほそう', 'えほそう'],
    correctAnswer: 'つくも',
    explanation: '江浦草（つくも）は、フトイの別称。「九十九」とも書く。',
    difficulty: 6
  },
  {
    id: '186',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「鼓子花」',
    choices: ['ひるがお', 'こしか', 'つづみばな', 'こしはな'],
    correctAnswer: 'ひるがお',
    explanation: '鼓子花（ひるがお）は、ヒルガオ科のつる性多年草。旋花・昼顔とも書く。',
    difficulty: 6
  },
  {
    id: '187',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「雀色時」',
    choices: ['すずめいろどき', 'じゃくしょくじ', 'すずめしょくじ', 'がくしょくじ'],
    correctAnswer: 'すずめいろどき',
    explanation: '雀色時（すずめいろどき）は、空が雀色に薄暗くなった時分。夕暮れ時。夕方。',
    difficulty: 6
  },
  {
    id: '188',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「爽昧」',
    choices: ['そうまい', 'そうみ', 'さわやかあじ', 'あきらかくら'],
    correctAnswer: 'そうまい',
    explanation: '爽昧（そうまい）は、夜明け。昧爽。',
    difficulty: 6
  },
  {
    id: '189',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「胥吏」',
    choices: ['しょり', 'しょうり', 'せいり', 'きょり'],
    correctAnswer: 'しょり',
    explanation: '胥吏（しょり）は、下級の役人。小役人。小吏。',
    difficulty: 6
  },
  {
    id: '190',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「達官」',
    choices: ['たっかん', 'たつかん', 'だっかん', 'たかん'],
    correctAnswer: 'たっかん',
    explanation: '達官（たっかん）は、重い官職。高い位。高官。',
    difficulty: 6
  },
  {
    id: '191',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「筆誅」',
    choices: ['ひっちゅう', 'ひつちゅう', 'ふでちゅう', 'ひっしゅ'],
    correctAnswer: 'ひっちゅう',
    explanation: '筆誅（ひっちゅう）は、他人の罪悪や欠点を書きたてて責めること。',
    difficulty: 6
  },
  {
    id: '192',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「頌辞」',
    choices: ['しょうじ', 'しょうし', 'ほうじ', 'たたえことば'],
    correctAnswer: 'しょうじ',
    explanation: '頌辞（しょうじ）は、功績を褒めたたえる言葉。頌詞。',
    difficulty: 6
  },
  {
    id: '193',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「弊廬」',
    choices: ['へいろ', 'へいりょ', 'やぶれいお', 'やぶれや'],
    correctAnswer: 'へいろ',
    explanation: '弊廬（へいろ）は、荒れたいおり。自分の住まいをへりくだってもいう。',
    difficulty: 6
  },
  {
    id: '194',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「尊家」',
    choices: ['そんか', 'そんけ', 'たっとき', 'みこと'],
    correctAnswer: 'そんか',
    explanation: '尊家（そんか）は、「尊宅」に同じ。',
    difficulty: 6
  },
  {
    id: '195',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「勦説」',
    choices: ['そうせつ', 'そうぜつ', 'しょうせつ', 'きょうせつ'],
    correctAnswer: 'そうせつ',
    explanation: '勦説（そうせつ）は、他人の説をぬすみ取って自分の説とすること。剽窃。',
    difficulty: 6
  },
  {
    id: '196',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「版図」',
    choices: ['はんと', 'ばんと', 'はんず', 'ばんず'],
    correctAnswer: 'はんと',
    explanation: '版図（はんと）は、一国の領域。領土。また一般に、勢力範囲。',
    difficulty: 6
  },
  {
    id: '197',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「疆土」',
    choices: ['きょうど', 'きょうと', 'さかいど', 'きゃうど'],
    correctAnswer: 'きょうど',
    explanation: '疆土（きょうど）は、領土。領地。',
    difficulty: 6
  },
  {
    id: '198',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「調馬」',
    choices: ['ちょうば', 'ちょうま', 'しらべうま', 'てうば'],
    correctAnswer: 'ちょうば',
    explanation: '調馬（ちょうば）は、馬を乗りならすこと。',
    difficulty: 6
  },
  {
    id: '199',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「磬控」',
    choices: ['けいこう', 'けいく', 'けいきょう', 'せいこう'],
    correctAnswer: 'けいこう',
    explanation: '磬控（けいこう）は、馬を速く走らせたり、とどめたりすること。馬を自由に乗りこなすこと。',
    difficulty: 6
  },
  {
    id: '200',
    type: 'idiom',
    question: '「兜を猪頸に着る」の意味として正しいものはどれですか？',
    choices: [
      '敵を恐れない、勇敢な様子',
      '兜の着け方について',
      '戦いの準備をすること',
      '武具の手入れをすること'
    ],
    correctAnswer: '敵を恐れない、勇敢な様子',
    explanation: '兜を猪頸に着る（かぶとをいくびにきる）は、兜を少し上向きにしてかぶる。敵を恐れない、勇敢な様子をいう。',
    difficulty: 6
  },
  {
    id: '201',
    type: 'idiom',
    question: '「落落として晨星の相望むが如し」の意味として正しいものはどれですか？',
    choices: [
      '年をとって同年配の友人がしだいに少なくなること',
      '星が美しく輝くこと',
      '朝早く起きること',
      '友人と再会すること'
    ],
    correctAnswer: '年をとって同年配の友人がしだいに少なくなること',
    explanation: '落落として晨星の相望むが如し（らくらくとしてしんせいのあいのぞむがごとし）は、明け方の空に星が次々に消えてまばらになるように、年をとって同年配の友人がしだいに少なくなることをいう。',
    difficulty: 6
  },
  {
    id: '202',
    type: 'idiom',
    question: '「筐の水」の意味として正しいものはどれですか？',
    choices: [
      '物事の当てにならないこと',
      '清らかな水のこと',
      '器に水を汲むこと',
      '水が大切であること'
    ],
    correctAnswer: '物事の当てにならないこと',
    explanation: '筐の水（かたみのみず）は、筐にくんだ水は漏れやすいところから、物事の当てにならないことのたとえ。',
    difficulty: 6
  },
  {
    id: '203',
    type: 'idiom',
    question: '「阿字の一刀」の意味として正しいものはどれですか？',
    choices: [
      '真言密教の阿字観の功力を刀にたとえた言葉',
      '刀の切れ味のこと',
      '武士の心得',
      '剣術の技法'
    ],
    correctAnswer: '真言密教の阿字観の功力を刀にたとえた言葉',
    explanation: '阿字の一刀（あじのいっとう）は、宇宙の万物は本来、不生不滅であると悟り、煩悩を断ずるために修する真言密教の阿字観の功力を、刀にたとえた言葉。',
    difficulty: 6
  },
  {
    id: '204',
    type: 'reading',
    question: '次の漢字の読み方を選択してください：「奎運」',
    choices: ['けいうん', 'きうん', 'かいうん', 'けうん'],
    correctAnswer: 'けいうん',
    explanation: '奎運（けいうん）は、「奎」は文教をつかさどるといわれる星の名。学問の気運。学問や文芸が発達する勢い。文運。',
    difficulty: 6
  },
];
