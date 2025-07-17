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
];
