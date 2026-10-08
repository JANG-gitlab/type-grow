// Objets : dessins faits main (en code) pour les mots d'objets, et leurs mots en plusieurs langues
(() => {
const G = Garden.prototype;

// id : { fl : dessin, stem : tige, c : [couleur principale, couleur d'accent], n : ses noms (priment sur le lexique), w : mots }  ou  { to : catégorie existante, w : mots }
G.OBJ = {
  fraise: { fl: 'strawberry', stem: '#4FAE4F', c: ['#E8283A', '#FFE066'], n: 'fraise fraises strawberry strawberries いちご イチゴ 苺 草莓 فراولة', w: '' },
  poire: { fl: 'pear', stem: '#7A5230', c: ['#C9D94A', '#F2F7B0'], n: 'poire poires pear pears なし 梨 洋梨 梨子 كمثرى اجاص', w: '' },
  peche: { fl: 'peach', stem: '#4FAE4F', c: ['#FF9F80', '#FF6B5A'], n: 'peche peches peach peaches もも 桃 桃子 خوخ دراق', w: '' },
  ananas: { fl: 'pineapple', stem: '#3FAE5A', c: ['#F2B233', '#B8860B'], n: 'ananas pineapple pineapples パイナップル 菠萝 凤梨 اناناس', w: '' },
  pasteque: { fl: 'watermelon', stem: '#3FAE5A', c: ['#FF4D5E', '#1A1A1A'], n: 'pasteque pasteques watermelon watermelons すいか スイカ 西瓜 بطيخ', w: '' },
  kiwi: { fl: 'kiwi', stem: '#7A5230', c: ['#7CC04A', '#F4F1D0'], n: 'kiwi kiwis キウイ 猕猴桃 奇异果 كيوي', w: '' },
  prune: { fl: 'plum', stem: '#7A5230', c: ['#7B3FA0', '#C9A8E8'], n: 'prune prunes plum plums すもも 李子 李 برقوق', w: '' },
  myrtille: { fl: 'blueberry', stem: '#4FAE4F', c: ['#3B4FB8', '#9FB4FF'], n: 'myrtille myrtilles blueberry blueberries ブルーベリー 蓝莓 عنبية', w: '' },
  framboise: { fl: 'raspberry', stem: '#4FAE4F', c: ['#E0306A', '#FF9DB8'], n: 'framboise framboises raspberry raspberries ラズベリー 树莓 覆盆子', w: '' },
  mangue: { fl: 'mango', stem: '#4FAE4F', c: ['#FFB627', '#FF6B3D'], n: 'mangue mangues mango mangoes マンゴー 芒果 مانجو مانجا', w: '' },
  abricot: { fl: 'apricot', stem: '#4FAE4F', c: ['#FFA040', '#FFD08A'], n: 'abricot abricots apricot apricots あんず アンズ 杏 杏子 مشمش', w: '' },
  grenade: { fl: 'pomegranate', stem: '#7A5230', c: ['#C8243A', '#FF9DA8'], n: 'grenade grenades pomegranate pomegranates ざくろ 石榴 柘榴 رمان', w: '' },
  melon: { fl: 'melon', stem: '#4FAE4F', c: ['#FFA45B', '#9BCB6A'], n: 'melon melons cantaloup cantaloupe メロン 甜瓜 哈密瓜 شمام', w: '' },
  avocat: { fl: 'avocado', stem: '#4FAE4F', c: ['#3F7A2E', '#C8E07A'], n: 'avocat avocats avocado avocados アボカド 牛油果 鳄梨 افوكادو', w: '' },
  livre: { fl: 'book', stem: '#8A6236', c: ['#3257FF', '#7B8CFF'], n: 'livre livres cahier bouquin roman book books notebook novel', w: 'book livre كتاب ぶっく 书 书籍 単行本 図書 巻 教科書 書 書物 書籍 書誌 本 著 著作 著書 books cahier calepin notebook のーと 備忘録 帳面 手帖 手帳 本子 笔记本 簿子 通帳 bibliotheque librairie library مكتبة らいぶらり らいぶらりー 图书馆 書房 bookmark favori signet 书签 栞 bookmarks address adresse reference あどれす りふぁれんす れふぁれんす 参照 番地' },
  lettre: { fl: 'letter', stem: '#8A93A3', c: ['#F2E6D0', '#C9B48A'], n: 'lettre courrier enveloppe letter envelope mail', w: 'courrier mail بريد めいる めーる 邮件 郵便 mailbox ぽすと めーるぼっくす 信箱 邮箱 郵便受け courriel email mel enregistrement record registre تسجيل سجل 記録 message signal رسالة めっせーじ 信息 短信 讯息 音信 messages' },
  papier: { fl: 'paper', stem: '#8A93A3', c: ['#7B8CFF', '#C9D2FF'], n: 'papier feuille page document paper sheet', w: 'fichier file ملف でーたふぁいる ふぁいる 文件 files article مقال مقالة موضوع 文章 記事 論文 論考 note notes ملاحظة ملحوظة めも 備忘録 覚 覚え 覚え書き 覚書 actualite intelligence news tidings word اخبار خبر نبا にゅーす にゅーず 便り 報 報道 情報 情报 报导 新報 新闻 沙汰 消息 知らせ 音信 音沙汰 quittance receipt recepisse reception recu استقبال استلام تسلم 収受 受け入れ 受け取り 受入れ 受取 受取り 受容 受領 領収 account bill compte facture facturer invoice حساب فاتورة いんぼいす 勘定 愛想 書き出し 書付 書出し 送り状 etude rapport report study تقرير دراسة りぽーと れぽーと 报告 紀要 clipboard 剪贴板 checklist checkup medical 人間どっく 検診 attestation certificat certificate certification confirmation credential credentials feuille temoignage valeur お墨付き 保証書 免状 免許 証書 証票 证书 鑑札 autorisation debit licence license permettre permis permit らいせんす 公認 执照 特许 認可 许可 许可证 book livre reserver scenario script しなりお すくりぷと 原作 台本 本 脚本 calibre gabarit guide mode modele patron reglette template てんぷれーと 指針 鋳型 billet ticket تذكرة ちけっと 切符 券 机票 票 车票' },
  crayon: { fl: 'pencil', stem: '#8A6236', c: ['#FFC21A', '#FF9DB0'], n: 'crayon stylo pencil pen', w: 'crayon pencil ぺんしる 鉛筆 铅笔' },
  pinceau: { fl: 'brush', stem: '#8A6236', c: ['#E0527A', '#4DA8FF'], n: 'pinceau peinture brush paintbrush', w: 'broussailles brush brushwood coppice copse fourre maquis taillis thicket 棘 茂み 茂り 薮 藪 雑木林 paint peinture pigment دهان طلاء ぺいんと ぺんき 塗料 油漆 涂料 涂漆 絵の具 絵具 顔料 颜料 palette pallet' },
  ciseaux: { fl: 'scissors', stem: '#8A93A3', c: ['#FF4D6D', '#4DA8FF'], n: 'ciseaux scissors', w: 'ciseaux scissors はさみ 鋏 cut trancher حصة قطعة 分け前' },
  parapluie: { fl: 'umbrella', stem: '#6D8FB3', c: ['#E0527A', '#FFB3C6'], n: 'parapluie ombrelle umbrella', w: 'egide ombrelle parapluie umbrella あんぶれら 伞 傘 蛇の目 蝙蝠 雨伞 雨傘' },
  ampoule: { fl: 'bulb', stem: '#9AA5B1', c: ['#FFE066', '#FFFFFF'], n: 'ampoule lampe bulb lamp lightbulb', w: 'ampoule bulb bulbe 球根 lamp lampe سراج مصباح らんぷ 明 明かり 明り 灯 灯り 灯火 燈 燈火 燭 電灯' },
  cloche: { fl: 'bell', stem: '#B8860B', c: ['#FFC21A', '#B8860B'], n: 'cloche clochette bell', w: 'bell cloche sonnette べる 鈴 鐘 钟 notification presentment' },
  cadeau: { fl: 'gift', stem: '#C9674A', c: ['#E0262B', '#FFD23F'], n: 'cadeau cadeaux paquet gift present', w: 'cadeau donation gift present هبة هدية ぎふと 礼物 貰い物 賜物 贈り物 贈物 赠品 bundle colis package packet paquet parcel حزمة ربطة رزمة ぱっく 包 包み 包裹 小包 打包 束 束ね packages boite box caisse صندوق ぼっくす 函 匣 盒子 筐 箱 箱子 cardboard carton ぼーる ぼーる紙 厚紙 硬纸板' },
  ballon: { fl: 'balloon', stem: '#9AA5B1', c: ['#FF4D6D', '#FFFFFF'], n: 'ballon baudruche balloon', w: 'ballon balloon ばるーん 气球 気球 風船' },
  bougie: { fl: 'candle', stem: '#B8860B', c: ['#FFF1D6', '#F2D3A0'], n: 'bougie chandelle candle', w: 'bougie candle chandelle cierge taper きゃんどる 烛 蜡 蜡烛 蝋燭 menorah' },
  fusee: { fl: 'rocket', stem: '#7B8CFF', c: ['#F2F2F2', '#E0262B'], n: 'fusee rocket', w: 'fusee projectile rocket roquette صاروخ みさいる ろけっと 火箭' },
  ovni: { fl: 'ufo', stem: '#6BCB77', c: ['#9AA5B1', '#7CFFB2'], n: 'ovni soucoupe alien extraterrestre ufo', w: 'ovni ufo ゆーふぉー alien etranger etrangere foreigner outlander اجنبي اعجمي غريب 余所者 唐人 外人 外国人 外地人 夷 異人 老外' },
  couronne: { fl: 'crown', stem: '#B8860B', c: ['#FFC21A', '#FF4D6D'], n: 'couronne crown roi reine king queen', w: 'clef couronne couronnement crown faite fond milieu sommet 王冠 dignitaire dignitary personnage vip 大物' },
  trophee: { fl: 'trophy', stem: '#B8860B', c: ['#FFC21A', '#8A5A2B'], n: 'trophee coupe medaille trophy medal', w: 'trophee trophy attribution award awarding 判定 裁定 decoration insigne medaille medal medallion palm palmier paume ribbon مدالية وسام めだる りぼん 勲章 奖章 月桂冠 纪念章 褒章 褒賞 記章 armee military جيش عسكر みりたりー 兵隊 軍 軍勢 軍隊 ambo chaire dais estrade podium pulpit rostrum soapbox stump tribune 教壇 演台 演壇 論壇 讲台 雛壇 高座 tournament tourney tournoi مباراة مسابقة とーなめんと 勝ち抜き 比赛 竞赛 锦标赛 couronne laurel laurier ろーれる' },
  ancre: { fl: 'anchor', stem: '#4FA3D9', c: ['#5B8BD9', '#FFFFFF'], n: 'ancre anchor', w: 'anchor ancre ancrer مرساة あんかー 碇 錨 锚' },
  lunettes: { fl: 'glasses', stem: '#7F8A99', c: ['#E0527A', '#7CC6FF'], n: 'lunettes glasses sunglasses', w: 'eyeglass lentille monocle shades store sunglasses さんぐらす stereo すてれお binoculars jumelle おぺらぐらす 双眼鏡 望远镜' },
  chapeau: { fl: 'hat', stem: '#7F8A99', c: ['#6B4FA0', '#E0262B'], n: 'chapeau hat', w: 'chef cuisinier しぇふ' },
  vetement: { fl: 'shirt', stem: '#7F8A99', c: ['#4DA8FF', '#FFFFFF'], n: 'vetement tshirt chemise shirt', w: 'chemise maillot shirt قميص しゃつ わいしゃつ 衬衣 衬衫 blouson jacket veste veston جاكيت سترة ういんどぶれーかー じゃけっと じゃんばー じゃんぱー ぶるぞん 上衣 夹克 cravate necktie tie たい ねくたい 领带 chaussette sock そっくす 袜子 靴下 apparel clothes dress vetement vetements ثوب ثياب رداء كسوة لباس ملابس あぱれる うぇあ うえあ お召 お召し物 こすちゅーむ どれす べべ 服 服装 服饰 洋服 着物 着衣 衣 衣料 衣服 衣装 衣裳 衣類 被服 装い 装束 hanger' },
  chaussure: { fl: 'shoe', stem: '#7F8A99', c: ['#FF5A1F', '#FFFFFF'], n: 'chaussure chaussures basket baskets shoe shoes sneaker', w: 'chaussure shoe soulier حذاء 靴 鞋 鞋子 flip somersault somerset 宙返り 空翻 筋斗' },
  fauteuil: { fl: 'chair', stem: '#8A6236', c: ['#3FA45B', '#A8E6A0'], n: 'fauteuil canape chaise chair sofa armchair', w: 'armchair fauteuil 扶手椅 canape couch divan lounge sofa かうち そふぁ そふぁー 沙发 長椅子 chair chaise كرسي いす ちぇあ 椅子 腰かけ 腰掛 腰掛け' },
  lit: { fl: 'bed', stem: '#8A6236', c: ['#4DA8FF', '#FFD6A5'], n: 'lit hamac bed hammock', w: 'bed lit سرير べっど 寝台 床 coussin oreiller pillow 枕 枕头 crise emergency exigence exigency pinch sos urgence えまーじぇんしー ぴんち 危急 危機 変事 急場 急変 有事 紧急情况 緊急 非常 非常時' },
  porte: { fl: 'door', stem: '#8A6236', c: ['#C9674A', '#8A3A1F'], n: 'porte door', w: 'door huis porte どあ 入り口 入口 戸 戸口 扉 枢 玄関 門 門戸 開 開き 開き戸 门' },
  bouteille: { fl: 'bottle', stem: '#4FA3D9', c: ['#3FAE5A', '#FFF1D6'], n: 'bouteille bottle', w: 'bottle bouteille زجاجة قارورة قنينة びん ぼとる 壜 瓶 瓶子 lait milk حليب لبن おっぱい みるく 乳 乳汁 奶 牛乳 牛奶 babe baby beaute bebe cheri enfant infant nourrisson رضيع طفل مولود ねね ねんね べいびー べびー やや 乳児 乳飲み子 娃娃 婴儿 婴幼儿 嬰児 孩儿 孩児 宝宝 幼儿 幼児 稚児 赤ちゃん 赤ん坊 赤子 aroma arome embaumer fragrance odeur parfum perfume prononce scent ぱふゅーむ ふれぐらんす 清香 芬芳 芳香 薫り 香り 香味 香料 香气 香気' },
  verre: { fl: 'glass', stem: '#4FA3D9', c: ['#FFB020', '#FF4D6D'], n: 'verre boisson jus glass drink juice', w: 'glass verre زجاج がらす はり びーどろ 玻璃 琉璃 瑠璃 硝子 beer biere بيرة جعة びあ びや びーる 啤酒 麦酒 milkshake shake みるくせーき' },
  casque: { fl: 'headphones', stem: '#7F8A99', c: ['#5A5F6E', '#FF4D6D'], n: 'casque ecouteurs headphones', w: 'earphone earpiece ecouteur headphone headphones oreillette phone telephone telephoner سماعة へっどほん れしーばー 受話器 耳机 headset appareil device dispositif mecanisme systeme جهاز つーる 器具 機器 装置 道具' },
  cadenas: { fl: 'lock', stem: '#7F8A99', c: ['#FFC21A', '#B8860B'], n: 'cadenas serrure lock padlock', w: 'cadenas lock serrure قفل ろっく 錠 錠前 锁 mdp mot parole password watchword word ぱすわーど 口令 合い言葉 合言葉 密码 暗号 符牒 crypte vault voute secret 机密 秘 秘密 隠し事' },
  bouclier: { fl: 'shield', stem: '#7F8A99', c: ['#3257FF', '#FFC21A'], n: 'bouclier shield', w: 'bouclier ecu shield حجاب درع しーるど 遮蔽 防御 防衛 firewall' },
  epee: { fl: 'sword', stem: '#7F8A99', c: ['#FFC21A', '#5B3A22'], n: 'epee sword', w: 'acier blade brand epee steel sword حسام سيف مهند نصل そーど どす 刀 刀剣 剑 剣 大刀 太刀 神剣 swords feuille 叶片 葉 trident' },
  marteau: { fl: 'hammer', stem: '#8A6236', c: ['#7F8A99', '#E8EDF2'], n: 'marteau hammer outil tool', w: 'cock coq hammer marteau はんまー 撃鉄 instrument outil tool اداة 工具 tools gavel 槌 axe hache فاس 斧 斧头 斧子 choice choix pick selection اختيار انتقاء 選抜 選択 chisel ciseau のみ 凿子 鑿' },
  pelle: { fl: 'shovel', stem: '#8A6236', c: ['#9AA5B1', '#E8EDF2'], n: 'pelle shovel', w: 'beche pelle shovel しゃべる しょべる すこっぷ gache trowel truelle garden jardin بستان がーでん 園 園地 園生 庭 庭園 种植园 花园 苑' },
  drapeau: { fl: 'flag', stem: '#7F8A99', c: ['#E0262B', '#FFFFFF'], n: 'drapeau flag', w: 'etendard flag pavillon علم のぼり ふらぐ ふらっぐ 幟 旗 旗子 旗帜 crown fanion pennant ぺなんと 優勝旗 栄冠 王冠' },
  tente: { fl: 'tent', stem: '#5BAE4A', c: ['#FF8A1F', '#FFD23F'], n: 'tente camping tent', w: 'tent tente خيمة きゃんぷ てんと 天幕 帐篷 幕屋 camper مخيم きゃんぱー caravan caravane train きゃらばん' },
  train: { fl: 'train', stem: '#8A93A3', c: ['#E0262B', '#FFD23F'], n: 'train locomotive', w: 'train قطار 列車 列车 汽車 火车 電車 streetcar tram tramway trolley trolleybus ترام とろりー 市電 有轨电车 电车 都電' },
  bus: { fl: 'bus', stem: '#8A93A3', c: ['#FFC21A', '#BFE9FF'], n: 'bus autobus', w: 'autobus autocar bus coach jitney omnibus اوتوبيس باص حافلة おむにばす だぶるでっかー ばす 乗り合い 乗合 公共汽车 公车 大客车 巴士 长途汽车' },
  camion: { fl: 'truck', stem: '#8A93A3', c: ['#3257FF', '#E8EDF2'], n: 'camion truck', w: 'camion truck شاحنة とらっく 卡车 货车 ambulance 救护车 tracteur tractor تراكتور جرار とらくた とらくたー bulldozer dozer ぶるどーざー 推土机 backhoe pelleteuse forklift ふぉーくりふと 叉车 铲车' },
  crane: { fl: 'skull', stem: '#4A4A58', c: ['#F2EBDD', '#1A1A1A'], n: 'crane squelette skull', w: 'crane skull 头盖骨 头骨 脑壳 野ざらし 鉢 頭蓋 頭蓋骨 頭骨 颅骨 髑髏' },
  fantome: { fl: 'ghost', stem: '#9FB0C4', c: ['#F4F4FA', '#1A1A1A'], n: 'fantome ghost', w: 'esprit fantome ghost menace ombre shade specter spectre spook wraith おばけ お化け がいすと ごーすと 亡者 亡霊 化け物 化物 妖怪 妖魔 幻影 幽霊 幽鬼 怪物 悪霊 死霊 物の怪 生霊 霊 魔物' },
  robot: { fl: 'robot', stem: '#7F8A99', c: ['#9AA5B1', '#7CFFB2'], n: 'robot', w: 'automate automaton golem robot おーとまとん ごーれむ ろぼっと 机器人 自动机 bot' },
  globe: { fl: 'globe', stem: '#4FA3D9', c: ['#3B82F6', '#4FC067'], n: 'globe monde world', w: 'earth globe terre world الارض العالم الكون ぐろーぶ 世界 地球 cosmos creation existence macrocosm monde univers universe الخلق الدنيا الوجود こすも こすもす ゆにばーす 万物 天地 太空 存在 宇宙 森羅万象' },
  planete: { fl: 'planet', stem: '#7B8CFF', c: ['#FF9F6B', '#FFE3B8'], n: 'planete saturne planet saturn', w: 'planet planete كوكب 惑星 行星 遊星 mars 火星 orbit orbite فلك مدار 軌道 轨道 galaxie galaxy cosmos creation existence macrocosm monde univers universe world الخلق الدنيا العالم الكون الوجود こすも こすもす ゆにばーす 万物 世界 天地 太空 存在 宇宙 森羅万象' },
  repere: { fl: 'pin', stem: '#8A93A3', c: ['#E0262B', '#FFFFFF'], n: 'carte map gps', w: 'lieu localisation location مكان موقع ろけーしょん 位置 地点 場 場所 所 epingle pin ぴん gps 全球定位系统 actuel courant current تيار 电流 carte map plan خريطة まっぷ 地図 地图 絵図 chemin itineraire itinerary liaison path route trajet مسار こーす ぱす らいん るーと ろーど 小径 小道 径 旅程 旅路 経路 线 航线 行程 行路 足跡 路 路径 路線 路线 蹊 軌道 轨道 途 途径 通り道 通路 進路 道 道のり 道程 道筋 道路 道順 針路 順路 direction directions way اتجاه جهة سبيل طريق وجهة 方 方向 方角 navigation pilotage piloting 操縦' },
  boussole: { fl: 'compass', stem: '#8A93A3', c: ['#B8860B', '#FFC21A'], n: 'boussole compass', w: 'boussole compass こんぱす 指南针 磁石 羅針盤 chemin direction trajet way اتجاه جهة سبيل طريق وجهة 方 方向 方角 道のり 道筋 道順' },
  aimant: { fl: 'magnet', stem: '#8A93A3', c: ['#E0262B', '#FFFFFF'], n: 'aimant magnet', w: 'aimant magnet まぐねっと 磁体 磁石' },
  pilule: { fl: 'pill', stem: '#4FA3D9', c: ['#E0262B', '#FFFFFF'], n: 'pilule medicament pill', w: 'pill pilule pills vaccin vaccination vaccine わくちん ordonnance prescription 規程 medecine medicament medicine remede bandage pansement patch 包帯 绑带 绷带 infirmier infirmiere nurse ممرض なーす 保姆 护士 看护 stethoscope سماعة checkup medical 人間どっく 検診 hopital hospital hosto infirmary infirmerie ほすぴたる 医务室 医院 病院' },
  oeuf: { fl: 'egg', stem: '#C9A227', c: ['#F6E7CF', '#C9966A'], n: 'oeuf egg', w: 'egg oeuf بيضة 卵 玉子 eggs بيض お玉 卵子 玉 蛋 蛋类 鶏卵 鸡蛋' },
  banane: { fl: 'banana', stem: '#5BAE4A', c: ['#FFD52E', '#C9A800'], n: 'banane banana', w: 'banana banane bananier ばなな' },
  raisin: { fl: 'grape', stem: '#5BAE4A', c: ['#7B3FA0', '#D9B8FF'], n: 'raisin grape grapes', w: 'grape grappe raisin raisins عنب ぐれーぷ ぶどう 葡萄' },
  citrouille: { fl: 'pumpkin', stem: '#5B7A2B', c: ['#FF8A1F', '#FFE066'], n: 'citrouille potiron halloween pumpkin', w: 'citrouille potiron pumpkin' },
  burger: { fl: 'burger', stem: '#C9674A', c: ['#E0A050', '#FFD23F'], n: 'burger hamburger', w: 'burger ばーがー andouille saucisse saucisson sausage نقانق そーせーじ 腊肠 香肠 meat viande لحم みーと 獣肉 肉 肉類 肉食 食肉' },
  biscuit: { fl: 'cookie', stem: '#C9966A', c: ['#D9A15B', '#4A2A18'], n: 'biscuit cookie', w: 'biscuit cookie cooky galette くっきー びすけ びすけっと 小点心 饼干 cacao chocolat chocolate cocoa ここあ しょこら ちょこ ちょこれーと' },
  bonbon: { fl: 'candy', stem: '#E0527A', c: ['#FF4D9E', '#FFD6EC'], n: 'bonbon sucette candy', w: 'bonbon candy friandise sucrerie حلوي あめ きゃんでぃ きゃんでぃー きゃんでー 飴 lollipop lolly popsicle sucette あいすきゃんでー' },
  de: { fl: 'dice', stem: '#7F8A99', c: ['#FFFFFF', '#1A1A1A'], n: 'de des dice', w: 'dice die نرد さいころ だいす 色子 賽 采 骰子 roulette poker salamander salamandre tisonnier aller spell tour tourner turn voyage voyagiste 当番 番 順番 cheat chess' },
  puzzle: { fl: 'puzzle', stem: '#7F8A99', c: ['#4FC067', '#FFFFFF'], n: 'puzzle', w: 'puzzle puzzler teaser ぱずる 難問 lego れご bloc block blocks brique قالب ぶろっく 塊 硬块' },
  telescope: { fl: 'telescope', stem: '#7B8CFF', c: ['#3257FF', '#FFC21A'], n: 'telescope', w: 'ampleur cadre lunette marge possibilite scope telescope 望遠鏡 microscope مجهر 显微镜 顕微鏡' },
  plume: { fl: 'feather', stem: '#9FB0C4', c: ['#4DA8FF', '#D6ECFF'], n: 'plume feather', w: 'feather plumage plume ふぇざー 羽 羽根 羽毛' },
  echelle: { fl: 'ladder', stem: '#8A6236', c: ['#A8693A', '#D9A15B'], n: 'echelle ladder', w: 'echelle ladder はしご らだー 梯 梯子 阶梯 escalier stairs steps 段々 階 階段 escalator ascenseur elevator lift えれべーた えれべーたー りふと 升降机 电梯' },
  seau: { fl: 'bucket', stem: '#4FA3D9', c: ['#4DA8FF', '#D6ECFF'], n: 'seau bucket', w: 'bac baquet bucket pail seau ばけっと ばけつ 吊桶 桶 水桶 basket panier سلة ばすけっと 篮子 籠 debris ferraille ordure rubbish scrap trash がらくた くず すくらっぷ とらっしゅ ぼろ 垃圾 塵芥 屑 废物 廃物' },
  bonhomme: { fl: 'snowman', stem: '#7FB8E6', c: ['#FFFFFF', '#E0262B'], n: 'bonhommedeneige snowman', w: 'snowman 雪だるま sled sledge sleigh traineau' },
  arcenciel: { fl: 'rainbow', stem: '#7B8CFF', n: 'arcenciel rainbow', w: 'rainbow れいんぼー 彩虹 虹' },
  masque: { fl: 'mask', stem: '#8E7CFF', c: ['#FFC21A', '#4DA8FF'], n: 'masque mask theatre', w: 'mask masque قناع ますく 仮面 假面具 覆面 面 面具 面罩 masks house theater theatre مسرح しあたー てあとる 劇場 能楽堂' },
  sac: { fl: 'bag', stem: '#8A6236', c: ['#C9674A', '#F2D3A0'], n: 'sac sacados valise bag backpack', w: 'backpack knapsack rucksack ざっく りゅっく りゅっくさっく 背包 背囊 briefcase mallette portefeuille serviette 公事包 公文包 皮包 bagage baggage colis luggage 手提箱 旅行包 行李 course courses shopping تسوق しょっぴんぐ 血拼 買い出し 買い物 買物 购物 paper papier ورق ぺーぱー 懐紙 用紙 紙 纸' },
  cible: { fl: 'target', stem: '#B3262D', c: ['#E0262B', '#FFC21A'], n: 'cible target', w: 'mark target هدف たーげっと 図星 标的 標的 正鵠 的 目标 靶子 黒星 archery あーちぇりー 射箭 箭术' },
  haltere: { fl: 'dumbbell', stem: '#7F8A99', c: ['#3257FF', '#FF4D6D'], n: 'haltere musculation dumbbell', w: 'dumbbell haltere だんべる 哑铃 barbell ばーべる 杠铃 poids weight وزن うぇーと うえいと 斤量 目方 荷重 重み 重力 重量 treadmill' },
  tele: { fl: 'tv', stem: '#7F8A99', c: ['#8A5A2B', '#7CC6FF'], n: 'tele television tv film movie', w: 'film flick movie pic picture فيلم しねま ぴくちゃー ふぃるむ むーびー 写真 影片 映画 活動 电影 image video 動画 映像 画像 絵 radio radiotelevision wireless らじお remote telecommande りもこん' },
  voiture: { to: 'voiture', w: 'auto automobile car machine motorcar voiture سيارة مركبة 乗用車 机动车 汽车 自動車 車 车 gas gaz غاز がす 气体 気体 瓦斯 direction guidance orientation steering ارشاد تسيير توجيه おりえんてーしょん がいだんす がいど 先導 導 導き 引き回し 手引 手引き 操舵 案内 率先 舵取り 誘導 道案内 parking stationnement ぱーきんぐ 停车场 traffic trafic 交通 chemin road route voie طريق うぇい らいん るーと ろーど 公路 小路 小道 径 経路 行路 街路 街道 路 路径 路线 途 通り 道 道路 马路' },
  avion: { to: 'avion', w: 'aeroplane airplane avion plane طائرة 機 航空機 銀翼 飛行機 飞机 banane chopper helicopter helicoptere حوامة へり へりこぷたー 直升机 直升飞机 drone 雄蜂 chute parachute しゅーたー しゅーと ぱらしゅーと 落下傘 zeppelin つぇっぺりん air هواء えあー 大气 空气 空気 aerial aerien' },
  bateau: { to: 'bateau', w: 'canot cotre sailboat voilier 帆船 bateau navire ship vaisseau سفينة مركب しっぷ 舟 船 船舶 bac ferry ferryboat عبارة معدية ふぇりー 乗り合い 乗合 渡 渡し 渡し舟 渡船 kayak かやっく 皮艇 speedboat vedette sub submarine غواصة さぶまりん' },
  velo: { to: 'velo', w: 'bike moto motocyclette motorcycle velo موتور おーとばい ばいく もーたーさいくる 単車 摩托车 motorbike cyclomoteur mobylette moped velomoteur scooter segway monocycle unicycle 一輪車 skate skateboard' },
  transport: { to: 'transport', w: 'roue wheel دولاب عجلة ほいーる 環 車 車輪 輪 轮 轮子' },
  clef: { to: 'clef', w: 'cle clef key touche مفتاح きい きー 鍵 钥匙' },
  argent: { to: 'argent', w: 'coin piece こいん 硬币 硬貨 coins cash espece monnaie نقد きゃっしゅ 実弾 现款 現金 硬通货 金 金子 金銀 金銭 銭 钱袋 credit recognition reconnaissance 承認 是認 赞同 currency devise عملة 貨幣 货币 通貨 billfold pocketbook portefeuille sacoche wallet محفظة 札入れ 財布 dealing dealings operation transaction تعامل تعاملات とらんざくしょん 买卖 交易 交渉 出来高 取り引き 取引 商 商い 商売 売り買い 売買 生意 bout pointe tip راس طرف 先 先端 尖端 尖顶 最先端 impot tax taxation taxe رسم ضريبة たっくす 寄与 徴税 租税 税 税金 課税 賦課 treasure tresor お宝 宝 宝物 財宝 财富 重宝' },
  temps: { to: 'temps', w: 'clock horloge pendule ساعة くろっく 时钟 時計 钟 abattement accablement alarm alarme consternation dismay prostration sideration stupefaction stupeur うろたえ 恐怖 恐慌 狼狽 警戒 hourglass sablier 沙漏 chronometre stopwatch すとっぷうぉっち calendar calendrier تقويم رزنامة روزنامة 历 历法 hours' },
  maison: { to: 'maison', w: 'domicile foyer home maison place بيت مكان 住まい 住処 家 棲家 batiment building edifice immeuble بناية مبني びる びるでぃんぐ 堂宇 大厦 家屋 建物 建筑 建筑物 建築 房屋 普請 buildings smart smarting smartness 刺痛 剧痛 ecole school مدرسة すくーる 学園 学校 学院 mosque جامع مسجد もすく 清真寺 tour tower برج たわー 台 塔 塔楼 楼 楼台 楼閣 楼阁 櫓 prison حبس سجن 刑務所 拘留所 牢 牢屋 牢獄 獄 班房 监牢 监狱 監獄 鉄格子 hotel فندق نزل ほてる 宾馆 宿 宿舎 御宿 旅館 旅馆 泊まり 酒店 饭店 eolienne windmill 風車 cloture escrime fence fencing سور سياج さく ふぇんす 囲い 围墙 垣 垣根 埒 塀 大垣 屏 柵 栅栏 栏 篱笆 藩篱' },
  telephone: { to: 'telephone', w: 'phone tel telephone تلفون هاتف てれふぉん てれほん ふぉん ほん 电话 电话机 電話 電話機 speakerphone' },
  ordi: { to: 'ordi', w: 'devices 設備 browser navigateur depot terminal terminus たーみなる 停留所 clavier keyboard きーぼーど 鍵盤 键盘 mouse souris فار まうす 家鼠 小鼠 老鼠 耗子 鼠 imprimante imprimeur pressman printer طباع ぷりんた ぷりんたー' },
  photo: { to: 'photo', w: 'camera かめら きゃめら 照相机 相机 exposure photo photograph photographie pic picture ايقونة تصويرة صورة ぴくちゃー ふぉと ぶろまいど ぷろまいど 写真 影像 映 照片 画像 相片 polaroid ぽらろいど aperture ouverture 光圈 孔径 finder viewfinder ふぁいんだー 取景器' },
  tech: { to: 'tech', w: 'scene setting settings 場面 背景 engine moteur محرك えんじん 发动机 引擎 马达 automation automatisation mechanisation mechanization cpu mainframe processeur processor ぷろせっさ ぷろせっさー 中央处理器 主机' },
  musique: { to: 'musique', w: 'music musique موسيقي みゅーじっく 楽 音乐 音楽 note ملاحظة ملحوظة めも 備忘録 覚 覚え 覚え書き 覚書 playlist vinyl vinyle びにる disc disk disque plat platine platter record تسجيل قرص でぃすく れこーど 円盤 音盤 micro microphone mike まいく まいくろほん 扩音器 话筒 麦克风 metronome めとろのーむ 节拍器 piano pianoforte بيانو ぴあの 钢琴' },
  joie: { to: 'joie', w: 'confetti 紙吹雪' },
  sport: { to: 'sport', w: 'bal ball balle ballon couille كرة ぼーる 玉 球 鞠 drama drame jeu jouer play مسرحية どらま 剧本 劇 戏剧 戯曲 演劇 脚本 芝居 golf ごるふ 高尔夫球 rugby らがー らぐびー らぐびーふっとぼーる bowling ぼーりんぐ ping football soccer さっかー ふっとぼーる 足球 蹴球 athletics sport رياضة すぽーつ 体育 竞技 运动 運動 cricket criquet grillon こおろぎ 蟋蟀 鈴虫 exercice exercise exercising workout تدريب تمرين えくささいず 体育锻炼 练习 训练 锻炼' },
  arbre: { to: 'arbre', w: 'arbre tree شجرة つりー 乔木 成木 木 树 樹 樹木 高木 trees bois wood خشب うっど 木头 木料 木材 材 材木 白木 log logs 丸太 丸木 原木 圆木 brindille rameau sprig twig 小枝 枝 acorn gland 橡子' },
  plante: { to: 'plante', w: 'fabrique plant usine works مصنع منشاة ぷらんと 工厂 工場 seedling semis feuillage feuille foliage leaf ورقة 叶 叶子 木の葉 葉 葉っぱ clover trefle trefles trefoil くろーばー' },
  fleur: { to: 'fleur', w: 'fleur flower زهرة 花' },
  cactus: { to: 'cactus', w: 'cactees cactus صبار かくたす さぼてん' },
  champignon: { to: 'champignon', w: 'champignon mushroom' },
  cereale: { to: 'cereale', w: 'ble epeautre froment mais wheat قمح こむぎ 小麦 麦 grain 粒 粒子 细粒 颗粒' },
  pomme: { to: 'pomme', w: 'apple pomme تفاح りんご 林檎 苹果' },
  cerise: { to: 'cerise', w: 'cerise cerisier cherry prunus' },
  citron: { to: 'citron', w: 'chiotte citron citronnier lemon れもん 柠檬 檸檬' },
  legume: { to: 'legume', w: 'carotte carrot にんじん 人参 红萝卜 胡萝卜 pepper poivre poivrier こしょう ぶらっくぺっぱー ぺっぱー 胡椒 黑胡椒 salad salade سلطة さらだ 沙拉 色拉' },
  pain: { to: 'pain', w: 'bread pain خبز ぱん ぶれっど 面包 食ぱん baguette ばげっと' },
  pizza: { to: 'pizza', w: 'pizza ぴざ ぴっつぁ' },
  fromage: { to: 'fromage', w: 'cheese fromage جبن ちーず ふろまーじゅ 乳酪 奶酪 干酪 芝士' },
  nourriture: { to: 'nourriture', w: 'bar barreau beurre cake gateau dumpling dumplings quenelle ravioli' },
  glace: { to: 'glace', w: 'glace ice ثلج جليد あいす 冰 冰块 氷' },
  tasse: { to: 'tasse', w: 'cup tasse طاسة فنجان كاس كوب かっぷ こっぷ 杯 杯子 mug cafe coffee java قهوة かふぇ かふぇー こーひー 咖啡 珈琲 teapot theiere てぃーぽっと' },
  bol: { to: 'bol', w: 'bowl ぼうる ぼーる 丼 椀 碗 鉢 potage soup soupe حساء おつけ すーぷ つゆ ぽたーじゅ 吸い物 汁 汁物 汤 液 煮汁' },
  tournesol: { to: 'tournesol', w: 'soleil sun شمس お天道様 お日様 それいゆ 天道 太阳 太陽 日 日輪 aube aurora aurore dawn dawning daybreak matin matinee morning sunrise 夜明 夜明け 天亮 平明 开端 拂晓 日の出 日出 早晨 明け 明け方 暁 曙 有明 破晓 黎明 crepuscule sundown sunset temporisation 傍晚 夕 夕刻 夕方 夕暮れ 夕陽 日の入り 日暮 日暮れ 日没 日落 暮れ 薄暮 黄昏' },
  lune: { to: 'lune', w: 'lune mois moon むーん 月 月代 月読 月輪' },
  etoile: { to: 'etoile', w: 'etoile star نجم えとわーる すたあ すたー 星 stars etincelle leger light lumiere spark sparkle twinkle 光 煌めき 生気 輝き sparkles comet comete こめっと 彗星 meteor meteore meteoroid 流れ星 流星' },
  nuage: { to: 'nuage', w: 'cloud nuage سحابة 雲 brouillard brume mist ضباب みすと もや 薄雾 霞 霧 靄 haze 晴嵐 煙霧' },
  orage: { to: 'orage', w: 'orage storm tempete زوبعة すとーむ 嵐 暴風 暴风 暴风雨 风暴 cyclone tornade tornado twister とるねーど 旋風 竜巻 bolt thunderbolt 稲光 稲妻 落雷 迅雷 雷 雷光 雷公 雷电 雷電 電光 霹雳 霹靂' },
  neige: { to: 'neige', w: 'flake flocon snowflake' },
  feu: { to: 'feu', w: 'feu fire flame flaming flamme incendie propagateur لهب نار ふぁいあ 火 火焰 火舌 炎 焔 焚烧 燃烧 campfire きゃんぷふぁいやー briquet igniter lighter المشعل matchstick 火柴' },
  eau: { to: 'eau', w: 'droplet goutte gouttelette droplets deluge flood inondation inonder inundation 出水 大水 水灾 氾濫 泛滥 洪水 洪灾 laver wash baignoire bain bath 水槽 fontaine fountain 吹き上げ 噴水 pool rassembler بركة حوض ぷーる beach plage شاطئ びーち 海滩 砂浜' },
  montagne: { to: 'montagne', w: 'mont montagne mount mountain جبل お山 まうんてん 大山 山 山岳 山脉 岳 嶽 御山 牟礼 高山 vent volcan volcano 噴火口 火口 berg iceberg 氷山' },
  os: { to: 'os', w: 'bone عظم 骨 骨头 骨架 骨骼' },
  cerveau: { to: 'cerveau', w: 'brain cerveau cervelle encephale ぶれいん ぶれーん 大脑 大脳 头脑 脑 脳 脳髄 頭脳' },
  oreille: { to: 'oreille', w: 'ear epi oreille اذن 耳 耳朵' },
  oeil: { to: 'oeil', w: 'eye oculus oeil optic あい 目 目玉 眼 眼球 眼睛' },
  dent: { to: 'dent', w: 'alveolaire alveolar dental dentale' },
  main: { to: 'main', w: 'fingerprint 指紋 hand main manus mitt patte paw はんど 手' },
  coeur: { to: 'coeur', w: 'beat heartbeat pouls pulsation pulse rythme どきどき ぱるす びーと ぷるす 心拍 心跳 心音 脈 脈動 脈拍 脉动 脉搏 鼓動' },
  cheveux: { to: 'cheveux', w: 'bacchante moustache mustache ひげ 口髭 髭 鬚' },
  chat: { to: 'chat', w: 'cat chat قطة هرة きゃっと にゃんにゃん ねこ 猫' },
  chien: { to: 'chien', w: 'chien dog كلب いぬ どっぐ 犬 狗 飼い犬' },
  cheval: { to: 'cheval', w: 'cheval horse جواد حصان فرس うま 牡馬 馬 马' },
  cochon: { to: 'cochon', w: 'cochon hog pig porc ぶた 猪 豚' },
  cerf: { to: 'cerf', w: 'cerf cervides chevreuil deer ايل ظبي غزال しか 牡鹿 鹿' },
  dragon: { to: 'dragon', w: 'dragon どらごん 火龙 竜 龍 龙' },
  papillon: { to: 'papillon', w: 'butterfly papillon فراشة ちょう ばたふらい 胡蝶 蝴蝶 蝶 蝶々' },
  insecte: { to: 'insecte', w: 'bug insecte 小虫 虫 araignee spider くも すぱいだー 蜘蛛' },
  oiseau: { to: 'oiseau', w: 'canari canary fink sneak sneaker snitch すにーかー' },
  sauvage: { to: 'sauvage', w: 'patte paw مخلب 爪 爪子 bat roussette こうもり 蝙蝠' },
  marin: { to: 'marin', w: 'fish poisson سمكة とと ふぃっしゅ 魚 鱗 鱼 鱼类' }
};

const INK = '#1A1A1A', WHITE = '#FFFFFF', METAL = '#B8BEC6', WOOD = '#A8693A';
// éclosion commune : rien tant que le motif n'a pas commencé à pousser
const go = (g, cx, cy, R, rot, a, k = 1, r = 0.3) => { const s = g.sp(a); return s <= 0.001 ? null : g.kit(cx, cy, R, rot * r, s * k); };
const pts = (K, p) => p.map(q => K.T(q[0], q[1]));
const arc = (K, x, y, rx, ry, t0, t1, n = 16) => { const p = []; for (let i = 0; i <= n; i++) { const t = t0 + (t1 - t0) * i / n; p.push(K.T(x + Math.cos(t) * rx, y + Math.sin(t) * ry)); } return p; };

Object.assign(G, {
  f_book(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.95, -0.48], [0, -0.32], [0.95, -0.48], [0.95, 0.58], [0, 0.72], [-0.95, 0.58]]), M);
    for (const sd of [-1, 1]) {
      B.fill(K.poly([[sd * 0.85, -0.56], [sd * 0.03, -0.42], [sd * 0.03, 0.58], [sd * 0.85, 0.46]]), WHITE);
      for (let i = 0; i < 2; i++) B.stroke([K.T(sd * 0.7, -0.22 + i * 0.32), K.T(sd * 0.18, -0.12 + i * 0.32)], L, K.lw * 1.4);
    }
  },
  f_letter(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.9, -0.55], [0.9, -0.55], [0.9, 0.58], [-0.9, 0.58]]), M);
    B.fill(K.poly([[-0.9, -0.55], [0.9, -0.55], [0, 0.12]]), L);
    B.fill(K.ring(0, 0.06, 0.12, 0.12, 10), '#E0262B');
  },
  f_paper(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.6, -0.88], [0.32, -0.88], [0.62, -0.58], [0.62, 0.88], [-0.6, 0.88]]), WHITE);
    B.fill(K.poly([[0.32, -0.88], [0.32, -0.58], [0.62, -0.58]]), L);
    for (let i = 0; i < 3; i++) B.stroke([K.T(-0.4, -0.4 + i * 0.36), K.T(i === 2 ? 0.05 : 0.4, -0.4 + i * 0.36)], M, K.lw * 1.6);
  },
  f_pencil(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 + 0.6, s * 1.05), M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.2, -0.95], [0.2, -0.95], [0.2, -0.75], [-0.2, -0.75]]), L);
    B.fill(K.poly([[-0.2, -0.75], [0.2, -0.75], [0.2, -0.6], [-0.2, -0.6]]), METAL);
    B.fill(K.poly([[-0.2, -0.6], [0.2, -0.6], [0.2, 0.5], [-0.2, 0.5]]), M);
    B.fill(K.poly([[-0.2, 0.5], [0.2, 0.5], [0, 0.98]]), '#F2D3A0');
  },
  f_brush(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 - 0.5, s * 1.05), M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(0, -0.95), K.T(0, 0.05)], WOOD, K.lw * 3.4);
    B.fill(K.poly([[-0.14, 0.02], [0.14, 0.02], [0.16, 0.3], [-0.16, 0.3]]), METAL);
    B.fill(pts(K, [[-0.16, 0.3], [0.16, 0.3], [0.2, 0.6], [0, 1.0], [0, 1.0], [-0.2, 0.6]]), M);
    B.fill(K.ell(0.42, 0.62, 0.15, 0.19, 0, 10), L);
  },
  f_scissors(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const o = Math.sin(this._now / 260 + e.ph1) * 0.08;
    B.stroke([K.T(-0.22, 0.32), K.T(0.32 + o, -0.92)], '#D3D8DF', K.lw * 3.4);
    B.stroke([K.T(0.22, 0.32), K.T(-0.32 - o, -0.92)], '#C2C8D0', K.lw * 3.4);
    for (const sd of [-1, 1]) { B.stroke(K.ring(sd * 0.34, 0.6, 0.22, 0.24, 14).concat([K.T(sd * 0.34 + 0.22, 0.6)]), sd < 0 ? M : L, K.lw * 2.6); B.stroke([K.T(sd * 0.2, 0.42), K.T(sd * 0.06, 0.15)], sd < 0 ? M : L, K.lw * 2.6); }
    B.fill(K.ring(0, -0.08, 0.07, 0.07, 8), INK);
  },
  f_umbrella(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 900 + e.ph1) * 0.3, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const top = arc(K, 0, -0.05, 0.95, 0.78, Math.PI, Math.PI * 2, 16), bot = [];
    for (let i = 5; i >= 0; i--) { const x = -0.95 + i * 0.38; bot.push(K.T(x, -0.05), K.T(x, -0.05)); if (i) bot.push(K.T(x - 0.19, -0.18)); }
    B.fill(top.concat(bot), M);
    for (const x of [-0.38, 0.38]) B.stroke([K.T(0, -0.8), K.T(x * 0.7, -0.4), K.T(x, -0.07)], L, K.lw);
    B.stroke([K.T(0, -0.8), K.T(0, -0.98)], INK, K.lw * 1.4);
    B.stroke([K.T(0, -0.1), K.T(0, 0.72), K.T(0.02, 0.92), K.T(0.18, 0.95), K.T(0.26, 0.8)], INK, K.lw * 1.6);
  },
  f_bulb(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, -0.28, 0.82 + Math.sin(this._now / 500 + e.ph1) * 0.06, 0.82, 20), this.rgba(M, 0.22));
    B.fill(pts(K, [[0, -0.88], [0.55, -0.62], [0.58, -0.22], [0.3, 0.12], [0.24, 0.32], [-0.24, 0.32], [-0.3, 0.12], [-0.58, -0.22], [-0.55, -0.62]]), M);
    B.stroke([K.T(-0.14, 0.28), K.T(-0.14, -0.2), K.T(-0.07, -0.3), K.T(0, -0.2), K.T(0.07, -0.3), K.T(0.14, -0.2), K.T(0.14, 0.28)], L, K.lw * 1.1);
    B.fill(K.poly([[-0.25, 0.32], [0.25, 0.32], [0.22, 0.66], [-0.22, 0.66]]), METAL);
  },
  f_bell(B, cx, cy, R, rot, e, a) {
    const sw = Math.sin(this._now / 300 + e.ph1) * 0.25, K = go(this, cx, cy, R, rot + sw / 0.3, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke(K.ring(0, -0.84, 0.11, 0.11, 10).concat([K.T(0.11, -0.84)]), INK, K.lw * 1.4);
    B.fill(K.ring(sw * -0.3, 0.6, 0.14, 0.14, 10), INK);
    B.fill(pts(K, [[-0.16, -0.74], [0.16, -0.74], [0.46, -0.48], [0.52, 0.18], [0.84, 0.48], [0.84, 0.48], [-0.84, 0.48], [-0.84, 0.48], [-0.52, 0.18], [-0.46, -0.48]]), M);
    B.stroke([K.T(-0.82, 0.46), K.T(0.82, 0.46)], L, K.lw * 2);
  },
  f_gift(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.72, -0.24], [0.72, -0.24], [0.72, 0.82], [-0.72, 0.82]]), M);
    B.fill(K.poly([[-0.84, -0.5], [0.84, -0.5], [0.84, -0.2], [-0.84, -0.2]]), this.mix(M, WHITE, 0.2));
    B.fill(K.poly([[-0.12, -0.5], [0.12, -0.5], [0.12, 0.82], [-0.12, 0.82]]), L);
    for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.27, -0.68, 0.26, 0.15, sd * 0.45, 12), L);
  },
  f_balloon(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 1100 + e.ph1) * 0.35, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(0, 0.48), K.T(0.12, 0.75), K.T(-0.08, 0.98), K.T(0.08, 1.2)], INK, K.lw);
    B.fill(pts(K, [[0, -1.0], [0.48, -0.86], [0.66, -0.4], [0.5, 0.12], [0.08, 0.44], [-0.08, 0.44], [-0.5, 0.12], [-0.66, -0.4], [-0.48, -0.86]]), M);
    B.fill(K.poly([[-0.1, 0.52], [0.1, 0.52], [0, 0.4]]), M);
    B.fill(K.ell(-0.28, -0.55, 0.09, 0.2, 0.4, 10), this.rgba(L, 0.8));
  },
  f_candle(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const f = 1 + Math.sin(this._now / 90 + e.ph1) * 0.08 + Math.sin(this._now / 37) * 0.04;
    B.fill(K.ring(0, -0.58, 0.42 * f, 0.5 * f, 16), this.rgba('#FFC21A', 0.18));
    B.fill(K.poly([[-0.26, -0.18], [0.26, -0.18], [0.26, 0.9], [-0.26, 0.9]]), M);
    B.fill(pts(K, [[-0.26, -0.2], [0.26, -0.2], [0.26, 0.05], [0.14, 0.12], [0.08, 0.3], [0.02, 0.12], [-0.26, 0.02]]), L);
    B.stroke([K.T(0, -0.2), K.T(0, -0.34)], INK, K.lw * 1.2);
    B.fill(pts(K, [[0, -0.36 - 0.6 * f], [0, -0.36 - 0.6 * f], [0.17, -0.6], [0.12, -0.38], [0, -0.32], [-0.12, -0.38], [-0.17, -0.6]]), '#FF8A1F');
    B.fill(pts(K, [[0, -0.42 - 0.34 * f], [0, -0.42 - 0.34 * f], [0.08, -0.52], [0, -0.38], [-0.08, -0.52]]), '#FFE680');
  },
  f_rocket(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 + 0.5 + Math.sin(this._now / 120) * 0.015, s), M = this.cc.red, L = this.cc.line;
    const f = 0.8 + Math.sin(this._now / 60 + e.ph1) * 0.2;
    B.fill(pts(K, [[-0.18, 0.38], [0.18, 0.38], [0.1, 0.38 + 0.55 * f], [0, 0.42 + 0.6 * f], [0, 0.42 + 0.6 * f], [-0.1, 0.38 + 0.55 * f]]), '#FF8A1F');
    B.fill(pts(K, [[-0.08, 0.38], [0.08, 0.38], [0, 0.4 + 0.32 * f], [0, 0.4 + 0.32 * f]]), '#FFE680');
    for (const sd of [-1, 1]) B.fill(K.poly([[sd * 0.28, -0.02], [sd * 0.62, 0.52], [sd * 0.62, 0.52], [sd * 0.28, 0.4]]), L);
    B.fill(pts(K, [[0, -1.0], [0, -1.0], [0.28, -0.6], [0.33, 0.1], [0.28, 0.42], [-0.28, 0.42], [-0.33, 0.1], [-0.28, -0.6]]), M);
    B.fill(K.ring(0, -0.28, 0.15, 0.15, 12), '#7CC6FF');
  },
  f_ufo(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 700 + e.ph1) * 0.25, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.3, 0.18], [0.3, 0.18], [0.62, 1.0], [-0.62, 1.0]]), this.rgba(L, 0.25 + Math.sin(this._now / 300) * 0.08));
    B.fill(K.ell(0, -0.18, 0.36, 0.34, 0, 16), this.rgba('#BFE9FF', 0.9));
    B.fill(K.ell(0, 0.05, 0.95, 0.26, 0, 22), M);
    for (let i = 0; i < 3; i++) B.fill(K.ring(-0.45 + i * 0.45, 0.08, 0.07, 0.07, 6), Math.floor(this._now / 250 + i) % 2 ? L : WHITE);
  },
  f_crown(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.8, 0.5], [-0.88, -0.42], [-0.42, -0.02], [0, -0.62], [0.42, -0.02], [0.88, -0.42], [0.8, 0.5]]), M);
    for (const [x, y] of [[-0.88, -0.48], [0, -0.68], [0.88, -0.48]]) B.fill(K.ring(x, y, 0.1, 0.1, 8), L);
    B.fill(K.ring(0, 0.25, 0.11, 0.11, 8), '#E0262B');
  },
  f_trophy(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const sd of [-1, 1]) B.stroke([K.T(sd * 0.55, -0.62), K.T(sd * 0.9, -0.6), K.T(sd * 0.84, -0.22), K.T(sd * 0.42, -0.08)], M, K.lw * 2.4);
    B.fill(pts(K, [[-0.62, -0.78], [-0.62, -0.78], [0.62, -0.78], [0.62, -0.78], [0.52, -0.22], [0.2, 0.12], [-0.2, 0.12], [-0.52, -0.22]]), M);
    B.fill(K.poly([[-0.09, 0.1], [0.09, 0.1], [0.12, 0.5], [-0.12, 0.5]]), M);
    B.fill(K.poly([[-0.45, 0.5], [0.45, 0.5], [0.45, 0.8], [-0.45, 0.8]]), L);
  },
  f_anchor(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 1000 + e.ph1) * 0.2, a); if (!K) return; const M = this.cc.red;
    B.stroke(K.ring(0, -0.76, 0.16, 0.16, 12).concat([K.T(0.16, -0.76)]), M, K.lw * 2.6);
    B.stroke([K.T(0, -0.6), K.T(0, 0.82)], M, K.lw * 3.2);
    B.stroke([K.T(-0.36, -0.36), K.T(0.36, -0.36)], M, K.lw * 3);
    B.stroke([K.T(-0.74, 0.22), K.T(-0.6, 0.68), K.T(0, 0.88), K.T(0.6, 0.68), K.T(0.74, 0.22)], M, K.lw * 3);
    for (const sd of [-1, 1]) B.fill(K.poly([[sd * 0.74, 0.08], [sd * 0.9, 0.34], [sd * 0.6, 0.3]]), M);
  },
  f_glasses(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const sd of [-1, 1]) {
      B.fill(K.ell(sd * 0.46, 0.02, 0.34, 0.3, 0, 16), this.rgba(L, 0.85));
      B.stroke(K.ell(sd * 0.46, 0.02, 0.34, 0.3, 0, 16).concat([K.T(sd * 0.46 + 0.34, 0.02)]), M, K.lw * 2.4);
      B.stroke([K.T(sd * 0.8, -0.06), K.T(sd * 0.96, -0.3)], M, K.lw * 2);
    }
    B.stroke([K.T(-0.13, -0.04), K.T(0, -0.12), K.T(0.13, -0.04)], M, K.lw * 2);
  },
  f_hat(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ell(0, 0.42, 0.95, 0.2, 0, 20), M);
    B.fill(pts(K, [[-0.52, 0.42], [-0.52, 0.42], [-0.46, -0.62], [-0.46, -0.62], [0.46, -0.62], [0.46, -0.62], [0.52, 0.42], [0.52, 0.42]]), M);
    B.fill(K.poly([[-0.5, 0.08], [0.5, 0.08], [0.51, 0.3], [-0.51, 0.3]]), L);
  },
  f_shirt(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 800 + e.ph1) * 0.2, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.3, -0.76], [0.3, -0.76], [0.92, -0.4], [0.72, -0.04], [0.5, -0.18], [0.5, 0.82], [-0.5, 0.82], [-0.5, -0.18], [-0.72, -0.04], [-0.92, -0.4]]), M);
    B.fill(K.poly([[-0.5, 0.12], [0.5, 0.12], [0.5, 0.32], [-0.5, 0.32]]), L);
    B.stroke([K.T(-0.3, -0.76), K.T(0, -0.5), K.T(0.3, -0.76)], L, K.lw * 2.2);
  },
  f_shoe(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[-0.86, 0.4], [-0.86, -0.26], [-0.6, -0.3], [-0.3, -0.28], [-0.2, -0.6], [0.16, -0.6], [0.22, -0.2], [0.75, 0.0], [0.94, 0.32], [0.94, 0.4]]), M);
    B.fill(K.poly([[-0.9, 0.34], [0.96, 0.34], [0.96, 0.56], [-0.9, 0.56]]), WHITE);
    for (let i = 0; i < 2; i++) B.stroke([K.T(-0.06 + i * 0.16, -0.42 + i * 0.12), K.T(0.12 + i * 0.12, -0.36 + i * 0.12)], L, K.lw * 1.6);
  },
  f_chair(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const x of [-0.6, 0.6]) B.stroke([K.T(x, 0.55), K.T(x, 0.82)], INK, K.lw * 1.8);
    B.fill(pts(K, [[-0.58, 0.2], [-0.62, -0.62], [-0.4, -0.78], [0.4, -0.78], [0.62, -0.62], [0.58, 0.2]]), M);
    B.fill(K.poly([[-0.6, 0.12], [0.6, 0.12], [0.6, 0.48], [-0.6, 0.48]]), L);
    for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.72, 0.18, 0.18, 0.38, 0, 14), M);
  },
  f_bed(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.92, -0.62], [-0.74, -0.62], [-0.74, 0.62], [-0.92, 0.62]]), WOOD);
    B.fill(K.poly([[0.78, -0.12], [0.92, -0.12], [0.92, 0.62], [0.78, 0.62]]), WOOD);
    B.fill(K.poly([[-0.74, 0.0], [0.8, 0.0], [0.8, 0.4], [-0.74, 0.4]]), WHITE);
    B.fill(K.ell(-0.5, -0.1, 0.22, 0.13, 0, 12), L);
    B.fill(pts(K, [[-0.28, -0.08], [0.82, -0.12], [0.84, 0.42], [-0.3, 0.42]]), M);
  },
  f_door(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[-0.55, 0.95], [-0.55, 0.95], [-0.55, -0.6], [-0.4, -0.86], [0, -0.96], [0.4, -0.86], [0.55, -0.6], [0.55, 0.95], [0.55, 0.95]]), M);
    for (const [y0, y1] of [[-0.55, 0.0]]) B.stroke(K.poly([[-0.36, y0], [0.36, y0], [0.36, y1], [-0.36, y1], [-0.36, y0]]), L, K.lw * 1.2);
    B.fill(K.ring(0.38, 0.08, 0.07, 0.07, 8), '#FFC21A');
  },
  f_bottle(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[-0.13, -0.86], [0.13, -0.86], [0.14, -0.48], [0.38, -0.22], [0.38, 0.88], [0.38, 0.88], [-0.38, 0.88], [-0.38, 0.88], [-0.38, -0.22], [-0.14, -0.48]]), M);
    B.fill(K.poly([[-0.16, -1.0], [0.16, -1.0], [0.16, -0.84], [-0.16, -0.84]]), INK);
    B.fill(K.poly([[-0.38, 0.06], [0.38, 0.06], [0.38, 0.48], [-0.38, 0.48]]), L);
  },
  f_glass(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.52, -0.72], [0.52, -0.72], [0.4, 0.78], [-0.4, 0.78]]), this.rgba('#FFFFFF', 0.28));
    B.fill(K.poly([[-0.47, -0.32], [0.47, -0.32], [0.4, 0.78], [-0.4, 0.78]]), M);
    B.stroke([K.T(0.25, -0.98), K.T(0.12, -0.2)], L, K.lw * 2.4);
    for (const [x, y, r] of [[-0.18, 0.1, 0.06], [0.12, 0.42, 0.05]]) B.fill(K.ring(x, y + Math.sin(this._now / 400 + x * 9) * 0.04, r, r, 6), this.rgba(WHITE, 0.7));
  },
  f_headphones(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke(arc(K, 0, 0, 0.72, 0.82, Math.PI * 1.02, Math.PI * 1.98, 18), M, K.lw * 3);
    for (const sd of [-1, 1]) { B.fill(K.ell(sd * 0.7, 0.18, 0.22, 0.36, 0, 14), M); B.fill(K.ell(sd * 0.54, 0.18, 0.08, 0.3, 0, 10), L); }
    const b = Math.sin(this._now / 150) > 0.3 ? 1 : 0;
    if (b) for (const sd of [-1, 1]) B.stroke([K.T(sd * 1.0, -0.05), K.T(sd * 1.08, 0.18), K.T(sd * 1.0, 0.4)], L, K.lw);
  },
  f_lock(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red;
    B.stroke([K.T(-0.36, -0.05), K.T(-0.36, -0.52), K.T(-0.2, -0.82), K.T(0.2, -0.82), K.T(0.36, -0.52), K.T(0.36, -0.05)], METAL, K.lw * 3.4);
    B.fill(K.poly([[-0.6, -0.1], [0.6, -0.1], [0.6, 0.82], [-0.6, 0.82]]), M);
    B.fill(K.ring(0, 0.26, 0.12, 0.12, 10), INK); B.fill(K.poly([[-0.06, 0.3], [0.06, 0.3], [0.08, 0.56], [-0.08, 0.56]]), INK);
  },
  f_shield(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const sh = k => pts(K, [[-0.75 * k, -0.78 * k], [-0.75 * k, -0.78 * k], [0, -0.9 * k], [0.75 * k, -0.78 * k], [0.75 * k, -0.78 * k], [0.72 * k, 0.05 * k], [0.36 * k, 0.6 * k], [0, 0.92 * k], [0, 0.92 * k], [-0.36 * k, 0.6 * k], [-0.72 * k, 0.05 * k]]);
    B.fill(sh(1), M); B.fill(sh(0.72), L);
    B.fill(K.poly([[-0.13, -0.6], [0.13, -0.6], [0.13, 0.6], [-0.13, 0.6]]), M);
  },
  f_sword(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 + 0.5, s * 1.08), M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.1, 0.24], [-0.1, -0.72], [0, -0.98], [0.1, -0.72], [0.1, 0.24]]), '#DDE2E8');
    B.fill(K.poly([[-0.44, 0.22], [0.44, 0.22], [0.44, 0.36], [-0.44, 0.36]]), M);
    B.fill(K.poly([[-0.07, 0.36], [0.07, 0.36], [0.07, 0.78], [-0.07, 0.78]]), L);
    B.fill(K.ring(0, 0.84, 0.1, 0.1, 10), M);
  },
  f_hammer(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 - 0.4 + Math.max(0, Math.sin(this._now / 220 + e.ph1)) * 0.25, s), M = this.cc.red;
    B.fill(K.poly([[-0.08, -0.4], [0.08, -0.4], [0.09, 0.95], [-0.09, 0.95]]), WOOD);
    B.fill(K.poly([[-0.62, -0.76], [0.38, -0.76], [0.38, -0.36], [-0.62, -0.36]]), M);
    B.fill(K.poly([[0.38, -0.74], [0.78, -0.92], [0.66, -0.58], [0.38, -0.44]]), M);
  },
  f_shovel(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 + 0.35, s * 1.05), M = this.cc.red;
    B.stroke([K.T(0, -0.92), K.T(0, 0.18)], WOOD, K.lw * 3);
    B.stroke([K.T(-0.2, -0.95), K.T(0.2, -0.95)], WOOD, K.lw * 3);
    B.fill(pts(K, [[-0.36, 0.1], [-0.36, 0.1], [0.36, 0.1], [0.36, 0.1], [0.36, 0.55], [0, 0.98], [0, 0.98], [-0.36, 0.55]]), M);
  },
  // le drapeau du pays de la langue du navigateur, en quelques aplats
  f_flag(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const t = this._now / 300 + e.ph1;
    B.stroke([K.T(-0.72, -0.95), K.T(-0.72, 0.95)], INK, K.lw * 1.8);
    // tissu : u de la hampe au bout, v de haut en bas ; il ondule davantage loin de la hampe
    const F = (u, v) => K.T(-0.7 + u * 1.55, -0.88 + v * 0.74 + Math.sin(t - u * 4) * 0.1 * u);
    const poly = q => { const out = []; for (let k = 0; k < q.length; k++) { const [u0, v0] = q[k], [u1, v1] = q[(k + 1) % q.length], n = Math.max(1, Math.ceil(Math.abs(u1 - u0) * 6)); out.push(F(u0, v0)); if (n === 1) out.push(F(u0, v0)); for (let m = 1; m < n; m++) out.push(F(u0 + (u1 - u0) * m / n, v0 + (v1 - v0) * m / n)); } return out; };
    const box = (u0, v0, u1, v1, c) => B.fill(poly([[u0, v0], [u1, v0], [u1, v1], [u0, v1]]), c);
    const AR = 0.74 / 1.55, ring = (u, v, r, c) => { const q = []; for (let k = 0; k < 14; k++) { const th = k / 14 * Math.PI * 2; q.push(F(u + Math.cos(th) * r * AR, v + Math.sin(th) * r)); } B.fill(q, c); };
    const star = (u, v, r, c) => { const q = []; for (let k = 0; k < 10; k++) { const th = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.42 : r; q.push([u + Math.cos(th) * rr * AR, v + Math.sin(th) * rr]); } B.fill(poly(q), c); };
    const band = (u0, v0, u1, v1, w, c) => { const dx = (v1 - v0), dy = -(u1 - u0) * AR, l = Math.hypot(dx, dy) || 1, ox = dx / l * w * AR, oy = dy / l * w; B.fill(poly([[u0 - ox, v0 - oy], [u1 - ox, v1 - oy], [u1 + ox, v1 + oy], [u0 + ox, v0 + oy]]), c); };
    const cres = (u, v, r, c) => { const q = []; for (let k = 0; k <= 12; k++) { const th = Math.PI * (0.3 + 1.4 * k / 12); q.push(F(u + Math.cos(th) * r * AR, v + Math.sin(th) * r)); } for (let k = 12; k >= 0; k--) { const th = Math.PI * (0.38 + 1.24 * k / 12); q.push(F(u + (0.32 + Math.cos(th) * 0.78) * r * AR, v + Math.sin(th) * r * 0.78)); } B.fill(q, c); };
    const fl = this.FLAGS[this.flagCode()] || ['h', [this.cc.red, this.cc.line]];
    const [dir, cols, wts] = fl, W = wts || cols.map(() => 1), tot = W.reduce((x, y) => x + y, 0); let acc = 0;
    cols.forEach((c, k) => { const a0 = acc / tot, a1 = (acc += W[k]) / tot; if (dir === 'v') box(a0, 0, a1, 1, c); else box(0, a0, 1, a1, c); });
    if (fl[3]) fl[3]({ box, ring, star, band, cres, shape: (q, c) => B.fill(poly(q), c) });
  },
  // pays : la région de la langue (fr-CA → Canada), sinon le pays le plus courant pour la langue
  flagCode() {
    if (this._flag) return this._flag;
    const L = ((navigator.languages && navigator.languages[0]) || navigator.language || 'fr').split('-'), rg = (L[1] || '').toUpperCase();
    const BY = { fr: 'FR', en: 'US', es: 'ES', de: 'DE', it: 'IT', pt: 'PT', nl: 'NL', ja: 'JP', zh: 'CN', ko: 'KR', ru: 'RU', pl: 'PL', uk: 'UA', sv: 'SE', nb: 'NO', no: 'NO', nn: 'NO', da: 'DK', fi: 'FI', tr: 'TR', el: 'GR', ar: 'EG', hi: 'IN' };
    return (this._flag = this.FLAGS[rg] ? rg : BY[L[0].toLowerCase()] || '');
  },
  FLAGS: (() => {
    const R = '#E8283A', W = '#FFFFFF', Bl = '#1F3FA0', Y = '#FFCE1F', Gr = '#1E8A4C', K = '#1A1A1A';
    const nordic = (bg, c1, c2) => ['h', [bg], 0, d => { d.box(0.28, 0, 0.44, 1, c1); d.box(0, 0.38, 1, 0.62, c1); if (c2) { d.box(0.32, 0, 0.4, 1, c2); d.box(0, 0.44, 1, 0.56, c2); } }];
    return {
      FR: ['v', ['#2350A8', W, R]], IT: ['v', ['#1E8A4C', W, R]], BE: ['v', [K, Y, R]], IE: ['v', ['#1E9A5A', W, '#FF883E']],
      DE: ['h', [K, '#DD1C1C', Y]], NL: ['h', ['#C42B32', W, '#2350A8']], AT: ['h', [R, W, R]], RU: ['h', [W, '#2350A8', R]],
      PL: ['h', [W, R]], UA: ['h', ['#2A6BD1', Y]], ES: ['h', ['#C4242B', Y, '#C4242B'], [1, 2, 1]],
      PT: ['v', ['#1E7A3C', R], [2, 3], d => d.ring(0.4, 0.5, 0.2, Y)],
      JP: ['h', [W], 0, d => d.ring(0.5, 0.5, 0.3, R)], CN: ['h', [R], 0, d => d.star(0.2, 0.3, 0.2, Y)],
      KR: ['h', [W], 0, d => { d.ring(0.5, 0.5, 0.26, R); d.ring(0.53, 0.6, 0.15, '#2350A8'); }],
      US: ['h', [R, W, R, W, R, W, R], 0, d => { d.box(0, 0, 0.42, 4 / 7, Bl); for (const [u, v] of [[0.1, 0.15], [0.25, 0.3], [0.1, 0.45], [0.32, 0.12]]) d.ring(u, v, 0.04, W); }],
      GB: ['h', [Bl], 0, d => { d.band(0, 0, 1, 1, 0.12, W); d.band(0, 1, 1, 0, 0.12, W); d.box(0.41, 0, 0.59, 1, W); d.box(0, 0.36, 1, 0.64, W); d.box(0.45, 0, 0.55, 1, R); d.box(0, 0.42, 1, 0.58, R); }],
      CA: ['v', [R, W, R], [1, 2, 1], d => d.star(0.5, 0.52, 0.3, R)], CH: ['h', [R], 0, d => { d.box(0.44, 0.2, 0.56, 0.8, W); d.box(0.32, 0.4, 0.68, 0.6, W); }],
      SE: nordic('#2A6BD1', Y), NO: nordic(R, W, '#2350A8'), DK: nordic(R, W), FI: nordic(W, '#2350A8'),
      BR: ['h', [Gr], 0, d => { d.shape([[0.08, 0.5], [0.5, 0.1], [0.92, 0.5], [0.5, 0.9]], Y); d.ring(0.5, 0.5, 0.2, Bl); }],
      IN: ['h', ['#FF9933', W, '#138808'], 0, d => d.ring(0.5, 0.5, 0.1, '#1F3FA0')], MX: ['v', ['#0A6B47', W, '#C8102E'], 0, d => d.ring(0.5, 0.5, 0.1, '#8A5A2B')],
      AR: ['h', ['#74ACDF', W, '#74ACDF'], 0, d => d.ring(0.5, 0.5, 0.1, Y)], EG: ['h', ['#CE1126', W, K], 0, d => d.ring(0.5, 0.5, 0.09, '#C09300')],
      MA: ['h', ['#C1272D'], 0, d => d.star(0.5, 0.5, 0.26, '#006233')], DZ: ['v', ['#006233', W], 0, d => { d.cres(0.5, 0.5, 0.26, R); d.star(0.6, 0.5, 0.1, R); }],
      TN: ['h', [R], 0, d => { d.ring(0.5, 0.5, 0.32, W); d.cres(0.47, 0.5, 0.22, R); d.star(0.56, 0.5, 0.1, R); }],
      TR: ['h', [R], 0, d => { d.cres(0.4, 0.5, 0.3, W); d.star(0.6, 0.5, 0.12, W); }],
      SA: ['h', ['#006C35'], 0, d => d.box(0.25, 0.68, 0.75, 0.74, W)], GR: ['h', ['#0D5EAF', W, '#0D5EAF', W, '#0D5EAF'], 0, d => { d.box(0, 0, 0.4, 0.6, '#0D5EAF'); d.box(0.16, 0, 0.24, 0.6, W); d.box(0, 0.24, 0.4, 0.36, W); }]
    };
  })(),
  f_tent(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[0, -0.82], [0.96, 0.7], [-0.96, 0.7]]), M);
    B.fill(K.poly([[0, -0.2], [0.32, 0.7], [-0.32, 0.7]]), INK);
    B.fill(K.poly([[0, -0.2], [0.32, 0.7], [0.14, 0.7]]), L);
    B.stroke([K.T(0, -0.82), K.T(0, -1.0)], INK, K.lw * 1.2);
    B.fill(K.poly([[0, -1.0], [0.22, -0.94], [0, -0.88]]), L);
  },
  wheels(B, K, xs, y, r) { for (const x of xs) { B.fill(K.ring(x, y, r, r, 12), INK); B.fill(K.ring(x, y, r * 0.42, r * 0.42, 8), METAL); } },
  f_train(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line, t = (this._now / 900 + e.ph1) % 1;
    for (let i = 0; i < 3; i++) { const u = (t + i / 3) % 1; B.fill(K.ring(-0.5 - u * 0.4, -0.95 - u * 0.5, 0.1 + u * 0.15, 0.1 + u * 0.15, 10), this.rgba(WHITE, 0.7 * (1 - u))); }
    B.fill(K.poly([[-0.62, -0.88], [-0.38, -0.88], [-0.38, -0.5], [-0.62, -0.5]]), INK);
    B.fill(K.poly([[-0.85, -0.52], [0.25, -0.52], [0.25, 0.42], [-0.85, 0.42]]), M);
    B.fill(K.poly([[0.25, -0.82], [0.9, -0.82], [0.9, 0.42], [0.25, 0.42]]), this.mix(M, INK, 0.15));
    B.fill(K.poly([[0.4, -0.66], [0.75, -0.66], [0.75, -0.28], [0.4, -0.28]]), L);
    this.wheels(B, K, [-0.58, -0.08, 0.6], 0.5, 0.18);
  },
  f_bus(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[-0.95, 0.42], [-0.95, 0.42], [-0.95, -0.5], [-0.85, -0.6], [0.8, -0.6], [0.95, -0.4], [0.95, 0.42], [0.95, 0.42]]), M);
    for (let i = 0; i < 3; i++) B.fill(K.poly([[-0.8 + i * 0.46, -0.46], [-0.46 + i * 0.46, -0.46], [-0.46 + i * 0.46, -0.1], [-0.8 + i * 0.46, -0.1]]), L);
    B.fill(K.poly([[0.62, -0.46], [0.86, -0.46], [0.86, 0.3], [0.62, 0.3]]), L);
    this.wheels(B, K, [-0.55, 0.5], 0.44, 0.17);
  },
  f_truck(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.95, -0.62], [0.3, -0.62], [0.3, 0.38], [-0.95, 0.38]]), L);
    B.fill(pts(K, [[0.34, 0.38], [0.34, 0.38], [0.34, -0.32], [0.34, -0.32], [0.72, -0.32], [0.95, 0.0], [0.95, 0.38], [0.95, 0.38]]), M);
    B.fill(K.poly([[0.44, -0.22], [0.7, -0.22], [0.86, 0.0], [0.44, 0.0]]), '#BFE9FF');
    this.wheels(B, K, [-0.6, -0.2, 0.62], 0.44, 0.17);
  },
  f_skull(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line, j = Math.max(0, Math.sin(this._now / 200 + e.ph1)) * 0.06;
    B.fill(K.poly([[-0.34, 0.22 + j], [0.34, 0.22 + j], [0.3, 0.66 + j], [-0.3, 0.66 + j]]), M);
    for (let i = -1; i <= 1; i++) B.stroke([K.T(i * 0.15, 0.3 + j), K.T(i * 0.12, 0.6 + j)], L, K.lw);
    B.fill(K.ell(0, -0.2, 0.66, 0.6, 0, 22), M);
    for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.26, -0.14, 0.17, 0.2, sd * 0.2, 12), L);
    B.fill(K.poly([[0, 0.06], [0.08, 0.2], [-0.08, 0.2]]), L);
  },
  f_ghost(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 600 + e.ph1) * 0.4, a); if (!K) return; const M = this.cc.red, L = this.cc.line, w = Math.sin(this._now / 200 + e.ph1) * 0.08;
    const p = arc(K, 0, -0.15, 0.6, 0.75, Math.PI, Math.PI * 2, 14);
    p.push(...pts(K, [[0.6, 0.7], [0.4 + w, 0.9], [0.2, 0.66], [w, 0.9], [-0.2, 0.66], [-0.4 + w, 0.9], [-0.6, 0.7]]));
    B.fill(p, M);
    for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.22, -0.22, 0.09, 0.14, 0, 10), L);
    B.fill(K.ell(0, 0.12, 0.1, 0.14, 0, 10), L);
  },
  f_robot(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(0, -0.62), K.T(0, -0.86)], INK, K.lw * 1.4);
    B.fill(K.ring(0, -0.9, 0.08, 0.08, 8), Math.floor(this._now / 400 + e.ph1) % 2 ? '#FF4D6D' : L);
    B.fill(K.poly([[-0.25, 0.22], [0.25, 0.22], [0.25, 0.34], [-0.25, 0.34]]), INK);
    B.fill(K.poly([[-0.48, 0.32], [0.48, 0.32], [0.48, 0.9], [-0.48, 0.9]]), this.mix(M, INK, 0.15));
    B.fill(K.poly([[-0.58, -0.62], [0.58, -0.62], [0.58, 0.22], [-0.58, 0.22]]), M);
    for (const sd of [-1, 1]) B.fill(K.ring(sd * 0.24, -0.26, 0.12, 0.12, 12), L);
    B.stroke([K.T(-0.25, 0.04), K.T(0.25, 0.04)], INK, K.lw * 1.4);
  },
  f_globe(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0, 0.85, 0.85, 24), M);
    const o = ((this._now / 6000 + e.ph1) % 1) * 1.2 - 0.6;
    for (const [x, y, rx, ry, an] of [[-0.3, -0.32, 0.3, 0.2, 0.5], [0.25, 0.25, 0.22, 0.34, -0.3], [0.5, -0.45, 0.14, 0.1, 0], [-0.45, 0.4, 0.16, 0.12, 0.3]]) {
      const xx = ((x + o + 1.6) % 1.6) - 0.8, k = Math.sqrt(Math.max(0, 1 - (xx * xx + y * y) / 0.72));
      if (k > 0.15) B.fill(K.ell(xx, y, rx * k, ry, an, 12), L);
    }
  },
  f_planet(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const ring = (t0, t1) => { const p = []; for (let i = 0; i <= 14; i++) { const t = t0 + (t1 - t0) * i / 14, x = Math.cos(t) * 1.0, y = Math.sin(t) * 0.24; p.push(K.T(x * 0.96 - y * 0.28, x * 0.28 + y * 0.96)); } return p; };
    B.stroke(ring(Math.PI, Math.PI * 2), L, K.lw * 2.2);
    B.fill(K.ring(0, 0, 0.55, 0.55, 22), M);
    B.stroke([K.T(-0.5, -0.2), K.T(0, -0.14), K.T(0.5, -0.2)], this.mix(M, WHITE, 0.3), K.lw * 1.6);
    B.stroke(ring(0, Math.PI), L, K.lw * 2.2);
  },
  f_pin(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const b = Math.abs(Math.sin(this._now / 350 + e.ph1)) * 0.15, K = this.kit(cx, cy - b * R * s, R, rot * 0.15, s), M = this.cc.red, L = this.cc.line;
    B.fill(this.kit(cx, cy, R, 0, s).ell(0, 0.92, 0.26 - b * 0.4, 0.07, 0, 12), this.rgba(INK, 0.35));
    B.fill(pts(K, [[0, 0.86], [0, 0.86], [-0.36, 0.2], [-0.52, -0.32], [-0.36, -0.72], [0, -0.86], [0.36, -0.72], [0.52, -0.32], [0.36, 0.2]]), M);
    B.fill(K.ring(0, -0.32, 0.2, 0.2, 12), L);
  },
  f_compass(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0, 0.86, 0.86, 24), M); B.fill(K.ring(0, 0, 0.7, 0.7, 22), WHITE);
    const N = this.kit(cx, cy, R, rot * 0.3 + Math.sin(this._now / 700 + e.ph1) * 0.5, this.sp(a));
    B.fill(N.poly([[0, -0.6], [0.12, 0], [-0.12, 0]]), '#E0262B');
    B.fill(N.poly([[0, 0.6], [0.12, 0], [-0.12, 0]]), INK);
    B.fill(K.ring(0, 0, 0.07, 0.07, 8), L);
  },
  f_magnet(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red;
    B.stroke([K.T(-0.42, -0.82), K.T(-0.42, 0.12), K.T(0, 0.62), K.T(0.42, 0.12), K.T(0.42, -0.82)], M, K.lw * 6);
    for (const sd of [-1, 1]) B.stroke([K.T(sd * 0.42, -0.84), K.T(sd * 0.42, -0.56)], '#E8EDF2', K.lw * 6.2);
    if (Math.sin(this._now / 180 + e.ph1) > 0) for (const sd of [-1, 1]) { B.stroke([K.T(sd * 0.25, -0.98), K.T(sd * 0.18, -1.12)], INK, K.lw); B.stroke([K.T(sd * 0.6, -0.98), K.T(sd * 0.7, -1.1)], INK, K.lw); }
  },
  f_pill(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3 - 0.7, s), M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(-0.5, 0, 0.34, 0.34, 14), M); B.fill(K.poly([[-0.5, -0.34], [0, -0.34], [0, 0.34], [-0.5, 0.34]]), M);
    B.fill(K.ring(0.5, 0, 0.34, 0.34, 14), L); B.fill(K.poly([[0, -0.34], [0.5, -0.34], [0.5, 0.34], [0, 0.34]]), L);
    B.stroke([K.T(-0.6, -0.18), K.T(-0.2, -0.2)], this.rgba(WHITE, 0.6), K.lw * 1.6);
  },
  f_egg(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line, p = [];
    for (let i = 0; i < 22; i++) { const t = i / 22 * Math.PI * 2, sn = Math.sin(t); p.push(K.T(Math.cos(t) * (0.56 + 0.1 * sn), 0.05 + sn * 0.76)); }
    B.fill(p, M);
    for (const [x, y] of [[-0.2, -0.25], [0.22, 0.1], [-0.05, 0.42]]) B.fill(K.ring(x, y, 0.06, 0.06, 6), L);
  },
  f_banana(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const out = arc(K, 0, -0.35, 0.88, 0.95, 0.12 * Math.PI, 0.88 * Math.PI, 14), inn = arc(K, 0, -0.38, 0.72, 0.6, 0.88 * Math.PI, 0.12 * Math.PI, 14);
    B.fill([out[0], ...out, out[out.length - 1], inn[0], ...inn, inn[inn.length - 1]], M);
    B.stroke(arc(K, 0, -0.36, 0.8, 0.78, 0.2 * Math.PI, 0.8 * Math.PI, 12), L, K.lw);
    for (const sd of [-1, 1]) B.stroke([K.T(sd * 0.82, -0.04), K.T(sd * 0.9, -0.14)], '#5B3A22', K.lw * 2);
  },
  f_grape(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(0, -0.62), K.T(0.05, -0.92)], '#5B3A22', K.lw * 2);
    B.fill(K.ell(0.3, -0.82, 0.24, 0.12, -0.4, 10), '#4FAE4F');
    for (const [x, y] of [[-0.42, -0.42], [-0.14, -0.46], [0.14, -0.46], [0.42, -0.42], [-0.28, -0.14], [0, -0.16], [0.28, -0.14], [-0.14, 0.14], [0.14, 0.14], [0, 0.42]]) {
      B.fill(K.ring(x, y, 0.17, 0.17, 12), M);
    }
  },
  f_pumpkin(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.06, -0.52], [0.06, -0.52], [0.12, -0.82], [0.02, -0.84]]), '#5B7A2B');
    for (const [x, rx] of [[-0.42, 0.38], [0.42, 0.38], [0, 0.44]]) B.fill(K.ell(x, 0.08, rx, 0.62, 0, 18), x ? this.mix(M, INK, 0.12) : M);
    const gl = 0.75 + Math.sin(this._now / 160 + e.ph1) * 0.25;
    for (const sd of [-1, 1]) B.fill(K.poly([[sd * 0.32, -0.12], [sd * 0.12, 0.08], [sd * 0.44, 0.08]]), this.rgba(L, gl));
    B.fill(K.poly([[-0.42, 0.28], [-0.25, 0.4], [-0.12, 0.3], [0, 0.42], [0.12, 0.3], [0.25, 0.4], [0.42, 0.28], [0.3, 0.52], [-0.3, 0.52]]), this.rgba(L, gl));
  },
  f_burger(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[-0.78, 0.38], [0.78, 0.38], [0.74, 0.58], [-0.74, 0.58]]), M);
    B.fill(pts(K, [[-0.84, 0.12], [0.84, 0.12], [0.84, 0.36], [-0.84, 0.36]]), '#6B3A22');
    B.fill(K.poly([[-0.8, 0.06], [0.8, 0.06], [0.4, 0.28], [0.2, 0.12], [-0.1, 0.3], [-0.3, 0.12]]), L);
    const lt = []; for (let i = 0; i <= 10; i++) lt.push(K.T(-0.86 + i * 0.172, -0.04 + (i % 2) * 0.1)); B.stroke(lt, '#4FAE4F', K.lw * 2.2);
    B.fill(arc(K, 0, -0.08, 0.82, 0.62, Math.PI, Math.PI * 2, 16).concat([K.T(0.82, -0.08), K.T(-0.82, -0.08)]), M);
    for (const [x, y, an] of [[-0.3, -0.4, 0.4], [0.25, -0.45, -0.3]]) B.fill(K.ell(x, y, 0.06, 0.03, an, 6), WHITE);
  },
  f_cookie(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0, 0.82, 0.8, 22), M);
    for (const [x, y, r] of [[-0.35, -0.25, 0.12], [0.25, 0.12, 0.13], [-0.25, 0.35, 0.11], [0.1, -0.35, 0.1]]) B.fill(K.ell(x, y, r, r * 0.8, x * 3, 8), L);
    B.fill(K.ring(0.72, -0.56, 0.24, 0.24, 14), this.pal().bg);
  },
  f_candy(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 500 + e.ph1) * 0.3, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const sd of [-1, 1]) B.fill(K.poly([[sd * 0.36, 0], [sd * 0.88, -0.36], [sd * 0.78, 0], [sd * 0.88, 0.36]]), L);
    B.fill(K.ell(0, 0, 0.44, 0.34, 0, 18), M);
    B.stroke([K.T(-0.2, -0.22), K.T(0.05, 0.0), K.T(-0.1, 0.22)], this.rgba(WHITE, 0.7), K.lw * 1.6);
    B.stroke([K.T(0.1, -0.26), K.T(0.26, 0.0), K.T(0.12, 0.24)], this.rgba(WHITE, 0.7), K.lw * 1.6);
  },
  f_dice(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 900 + e.ph1) * 0.3, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.62, -0.38], [-0.3, -0.7], [0.72, -0.7], [0.4, -0.38]]), this.mix(M, WHITE, 0.35));
    B.fill(K.poly([[0.4, -0.38], [0.72, -0.7], [0.72, 0.32], [0.4, 0.64]]), this.mix(M, INK, 0.25));
    B.fill(K.poly([[-0.62, -0.38], [0.4, -0.38], [0.4, 0.64], [-0.62, 0.64]]), M);
    for (const [x, y] of [[-0.38, -0.14], [0.16, -0.14], [-0.11, 0.13], [-0.38, 0.4], [0.16, 0.4]]) B.fill(K.ring(x, y, 0.08, 0.08, 8), L);
    B.fill(K.ell(0.21, -0.54, 0.09, 0.05, 0, 8), L);
  },
  f_puzzle(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.6, -0.6], [0.6, -0.6], [0.6, 0.6], [-0.6, 0.6]]), M);
    B.fill(K.ring(0, -0.68, 0.2, 0.2, 14), M); B.fill(K.ring(0.68, 0, 0.2, 0.2, 14), M);
    B.fill(K.ring(-0.6, 0, 0.18, 0.18, 14), this.pal().bg); B.fill(K.ring(0, 0.6, 0.18, 0.18, 14), this.pal().bg);
    B.stroke([K.T(-0.42, -0.42), K.T(-0.2, -0.42)], L, K.lw * 1.6);
  },
  f_telescope(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2 - 0.55, s), F = this.kit(cx, cy, R, rot * 0.2, s), M = this.cc.red, L = this.cc.line;
    for (const x of [-0.45, 0.1, 0.45]) B.stroke([F.T(0, 0.15), F.T(x, 0.95)], INK, F.lw * 1.4);
    B.fill(K.poly([[-0.85, -0.13], [-0.6, -0.13], [-0.6, 0.13], [-0.85, 0.13]]), INK);
    B.fill(K.poly([[-0.6, -0.18], [0.45, -0.18], [0.45, 0.18], [-0.6, 0.18]]), M);
    B.fill(K.poly([[0.45, -0.27], [0.88, -0.27], [0.88, 0.27], [0.45, 0.27]]), L);
    B.fill(K.ell(0.88, 0, 0.06, 0.24, 0, 8), '#BFE9FF');
  },
  f_feather(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot + Math.sin(this._now / 700 + e.ph1) * 0.6, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[0.02, 0.5], [-0.32, 0.12], [-0.34, -0.42], [0.1, -0.92], [0.1, -0.92], [0.4, -0.5], [0.36, 0.08]]), M);
    for (let i = 0; i < 2; i++) { const y = -0.4 + i * 0.4; B.stroke([K.T(0.07 + i * -0.02, y), K.T(-0.22, y + 0.12)], L, K.lw); B.stroke([K.T(0.08 + i * -0.02, y), K.T(0.3, y + 0.08)], L, K.lw); }
    B.stroke([K.T(0.12, -0.8), K.T(0.05, 0.0), K.T(-0.04, 0.95)], this.mix(M, INK, 0.4), K.lw * 1.4);
  },
  f_ladder(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 1.05, 0.15); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (let i = 0; i < 5; i++) B.stroke([K.T(-0.36, -0.7 + i * 0.36), K.T(0.36, -0.7 + i * 0.36)], L, K.lw * 2);
    for (const x of [-0.38, 0.38]) B.stroke([K.T(x, -0.95), K.T(x, 0.95)], M, K.lw * 2.6);
  },
  f_bucket(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(-0.6, -0.38), K.T(-0.4, -0.92), K.T(0.4, -0.92), K.T(0.6, -0.38)], INK, K.lw * 1.4);
    B.fill(K.poly([[-0.62, -0.38], [0.62, -0.38], [0.46, 0.78], [-0.46, 0.78]]), M);
    B.fill(K.ell(0, -0.38, 0.62, 0.12, 0, 16), L);
    B.stroke([K.T(-0.58, -0.05), K.T(0.58, -0.05)], this.mix(M, INK, 0.2), K.lw * 1.4);
  },
  f_snowman(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0.5, 0.44, 0.42, 18), M); B.fill(K.ring(0, -0.08, 0.32, 0.3, 16), M); B.fill(K.ring(0, -0.55, 0.23, 0.22, 14), M);
    B.stroke([K.T(-0.28, -0.32), K.T(0, -0.26), K.T(0.28, -0.32)], L, K.lw * 2.6); B.stroke([K.T(0.16, -0.3), K.T(0.24, -0.06)], L, K.lw * 2.4);
    for (const sd of [-1, 1]) B.fill(K.ring(sd * 0.08, -0.6, 0.03, 0.03, 6), INK);
    B.fill(K.poly([[0, -0.54], [0.26, -0.5], [0, -0.48]]), '#FF8A1F');
    for (const y of [0.0, 0.42]) B.fill(K.ring(0, y, 0.045, 0.045, 6), INK);
    B.fill(K.poly([[-0.28, -0.74], [0.28, -0.74], [0.28, -0.7], [-0.28, -0.7]]), INK); B.fill(K.poly([[-0.17, -0.98], [0.17, -0.98], [0.17, -0.72], [-0.17, -0.72]]), INK);
    for (const sd of [-1, 1]) B.stroke([K.T(sd * 0.3, -0.1), K.T(sd * 0.62, -0.3), K.T(sd * 0.7, -0.42)], WOOD, K.lw * 1.2);
  },
  f_rainbow(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return;
    ['#FF4D4D', '#FF9F1C', '#FFD23F', '#4FC067', '#4DA8FF', '#8E7CFF'].forEach((c, i) => B.stroke(arc(K, 0, 0.35, 0.92 - i * 0.1, 0.92 - i * 0.1, Math.PI, Math.PI * 2, 18), c, K.lw * 2));
    for (const sd of [-1, 1]) { B.fill(K.ring(sd * 0.72, 0.4, 0.2, 0.16, 12), WHITE); B.fill(K.ring(sd * 0.5, 0.44, 0.16, 0.13, 10), WHITE); B.fill(K.ring(sd * 0.92, 0.44, 0.14, 0.11, 10), WHITE); }
  },
  f_mask(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const M = this.cc.red, L = this.cc.line;
    const face = (K, col, happy) => {
      B.fill(pts(K, [[0, -0.62], [0.44, -0.5], [0.5, -0.05], [0.3, 0.42], [0, 0.6], [-0.3, 0.42], [-0.5, -0.05], [-0.44, -0.5]]), col);
      for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.2, -0.16, 0.12, 0.07, sd * (happy ? -0.3 : 0.3), 8), INK);
      B.stroke(happy ? [K.T(-0.2, 0.18), K.T(0, 0.32), K.T(0.2, 0.18)] : [K.T(-0.18, 0.32), K.T(0, 0.2), K.T(0.18, 0.32)], INK, K.lw * 1.8);
    };
    const r = rot * 0.3, dx = Math.cos(r) * 0.32 * R * s, dy = Math.sin(r) * 0.32 * R * s;
    face(this.kit(cx + dx, cy + dy - 0.12 * R * s, R, r + 0.35, s), L, false);
    face(this.kit(cx - dx, cy - dy + 0.1 * R * s, R, r - 0.25, s), M, true);
  },
  f_bag(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(-0.3, -0.3), K.T(-0.28, -0.78), K.T(0.28, -0.78), K.T(0.3, -0.3)], INK, K.lw * 2);
    B.fill(pts(K, [[-0.55, -0.4], [0.55, -0.4], [0.62, 0.3], [0.66, 0.84], [0.66, 0.84], [-0.66, 0.84], [-0.66, 0.84], [-0.62, 0.3]]), M);
    B.fill(K.poly([[-0.36, 0.2], [0.36, 0.2], [0.36, 0.6], [-0.36, 0.6]]), L);
    B.stroke([K.T(-0.36, 0.32), K.T(0.36, 0.32)], this.mix(L, INK, 0.25), K.lw);
  },
  f_target(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    [0.86, 0.66, 0.46, 0.26, 0.1].forEach((r, i) => B.fill(K.ring(0, 0, r, r, 22), i % 2 ? WHITE : M));
    const q = Math.min(1, Math.max(0, (a - 300) / 250)), d = (1 - q) * 0.8;
    if (a > 300) { B.stroke([K.T(0.05 + d, -0.05 - d), K.T(0.72 + d, -0.72 - d)], INK, K.lw * 1.4); B.fill(K.poly([[0.62 + d, -0.78 - d], [0.86 + d, -0.86 - d], [0.78 + d, -0.62 - d], [0.7 + d, -0.7 - d]]), L); }
  },
  f_dumbbell(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy + Math.sin(this._now / 400 + e.ph1) * R * 0.1, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(-0.7, 0), K.T(0.7, 0)], METAL, K.lw * 2.4);
    for (const sd of [-1, 1]) { B.fill(K.poly([[sd * 0.38, -0.44], [sd * 0.62, -0.44], [sd * 0.62, 0.44], [sd * 0.38, 0.44]]), M); B.fill(K.poly([[sd * 0.62, -0.3], [sd * 0.8, -0.3], [sd * 0.8, 0.3], [sd * 0.62, 0.3]]), L); }
  },
  f_tv(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const sd of [-1, 1]) B.stroke([K.T(0, -0.52), K.T(sd * 0.32, -0.95)], INK, K.lw * 1.2);
    for (const sd of [-1, 1]) B.stroke([K.T(sd * 0.55, 0.55), K.T(sd * 0.65, 0.78)], INK, K.lw * 1.8);
    B.fill(K.poly([[-0.88, -0.55], [0.88, -0.55], [0.88, 0.58], [-0.88, 0.58]]), M);
    B.fill(K.poly([[-0.74, -0.42], [0.42, -0.42], [0.42, 0.44], [-0.74, 0.44]]), L);
    const y = -0.42 + ((this._now / 1400 + e.ph1) % 1) * 0.86; B.stroke([K.T(-0.74, y), K.T(0.42, y)], this.rgba(WHITE, 0.5), K.lw);
    B.fill(K.ring(0.65, -0.1, 0.1, 0.1, 8), INK);
  },
  // ---------- fruits, dans l'esprit des roses : une forme pleine, un trait clair par-dessus, une feuille ----------
  leafy(B, K, x, y, an, k = 1) { B.fill(K.ell(x, y, 0.26 * k, 0.11 * k, an, 10), '#4FAE4F'); },
  // trait clair qui se dessine après l'éclosion, comme la spirale des roses
  shine(B, K, a, p, col) { const fr = this.eo((a - 420) / 500); if (fr > 0) this.strokeRange(B, pts(K, p), 0, fr, col, K.lw * 1.3); },
  f_strawberry(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(pts(K, [[0, 0.92], [0.42, 0.42], [0.62, -0.15], [0.42, -0.52], [0, -0.48], [-0.42, -0.52], [-0.62, -0.15], [-0.42, 0.42]]), M);
    for (const [x, y] of [[-0.25, -0.15], [0.2, -0.22], [0, 0.15], [-0.18, 0.45], [0.26, 0.3]]) B.fill(K.ell(x, y, 0.045, 0.07, 0, 6), L);
    for (const an of [-0.5, 0, 0.5]) B.fill(K.ell(Math.sin(an) * 0.3, -0.58 + Math.abs(an) * 0.1, 0.24, 0.09, an, 8), '#4FAE4F');
  },
  f_pear(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(0, -0.68), K.T(0.06, -0.95)], '#7A5230', K.lw * 2);
    this.leafy(B, K, 0.28, -0.86, -0.4);
    B.fill(pts(K, [[0, -0.74], [0.22, -0.6], [0.3, -0.2], [0.6, 0.25], [0.56, 0.68], [0, 0.88], [-0.56, 0.68], [-0.6, 0.25], [-0.3, -0.2], [-0.22, -0.6]]), M);
    this.shine(B, K, a, [[-0.38, 0.55], [-0.45, 0.25], [-0.22, -0.1]], L);
  },
  f_peach(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0.1, 0.76, 0.72, 20), M);
    this.leafy(B, K, 0.3, -0.66, -0.5);
    this.shine(B, K, a, [[0.02, -0.55], [-0.2, 0.05], [-0.02, 0.72]], L);
  },
  f_pineapple(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const an of [-0.6, -0.25, 0, 0.25, 0.6]) B.fill(K.poly([[Math.sin(an) * 0.12 - 0.08, -0.32], [Math.sin(an) * 0.75, -0.62 - Math.cos(an) * 0.42], [Math.sin(an) * 0.12 + 0.08, -0.32]]), '#3FAE5A');
    B.fill(K.ell(0, 0.28, 0.5, 0.66, 0, 20), M);
    for (const d of [-0.3, 0.1]) { B.stroke([K.T(-0.42, d), K.T(0.3, d + 0.55)], L, K.lw * 1.2); B.stroke([K.T(0.42, d), K.T(-0.3, d + 0.55)], L, K.lw * 1.2); }
  },
  f_watermelon(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(arc(K, 0, -0.3, 0.95, 0.95, 0, Math.PI, 18), '#3FAE5A');
    B.fill(arc(K, 0, -0.3, 0.78, 0.78, 0, Math.PI, 18), M);
    for (const [x, y] of [[-0.35, 0.0], [0, 0.2], [0.35, 0.0], [-0.12, -0.12], [0.18, -0.15]]) B.fill(K.ell(x, y, 0.04, 0.07, x, 6), L);
  },
  f_kiwi(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0, 0.82, 0.76, 20), '#8A6236');
    B.fill(K.ring(0, 0, 0.7, 0.64, 20), M);
    B.fill(K.ell(0, 0, 0.24, 0.18, 0, 12), L);
    for (let i = 0; i < 8; i++) { const t = i / 8 * Math.PI * 2; B.fill(K.ell(Math.cos(t) * 0.36, Math.sin(t) * 0.32, 0.03, 0.06, t + 1.57, 6), INK); }
  },
  f_plum(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.stroke([K.T(0, -0.58), K.T(-0.08, -0.88)], '#7A5230', K.lw * 2);
    B.fill(K.ell(0, 0.1, 0.64, 0.72, 0.15, 20), M);
    this.shine(B, K, a, [[-0.3, -0.35], [-0.42, 0.0], [-0.3, 0.35]], L);
  },
  f_blueberry(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const [x, y, r] of [[-0.36, 0.25, 0.4], [0.36, 0.3, 0.38], [0, -0.25, 0.42]]) {
      B.fill(K.ring(x, y, r, r, 16), M);
      B.stroke([K.T(x - 0.09, y - r * 0.55), K.T(x, y - r * 0.4), K.T(x + 0.09, y - r * 0.55)], L, K.lw * 1.2);
    }
  },
  f_raspberry(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    for (const [x, y] of [[-0.36, -0.3], [0, -0.38], [0.36, -0.3], [-0.42, 0.05], [0, 0.0], [0.42, 0.05], [-0.25, 0.38], [0.25, 0.38], [0, 0.66]]) B.fill(K.ring(x, y, 0.24, 0.24, 12), M);
    for (const [x, y] of [[-0.1, -0.48], [0.3, -0.1], [-0.3, 0.25]]) B.fill(K.ring(x, y, 0.05, 0.05, 6), L);
    for (const an of [-0.6, 0, 0.6]) B.fill(K.ell(Math.sin(an) * 0.25, -0.62, 0.2, 0.07, an, 8), '#4FAE4F');
  },
  f_mango(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    this.leafy(B, K, 0.42, -0.66, -0.7, 1.2);
    B.fill(pts(K, [[0.15, -0.66], [0.62, -0.4], [0.72, 0.12], [0.4, 0.62], [-0.1, 0.74], [-0.6, 0.42], [-0.68, -0.05], [-0.35, -0.5]]), M);
    B.fill(K.ell(0.3, -0.2, 0.3, 0.24, 0.4, 12), L);
  },
  f_apricot(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a, 0.85); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.ring(0, 0.05, 0.72, 0.7, 20), M);
    B.fill(K.ell(-0.25, -0.15, 0.28, 0.22, 0.3, 12), L);
    this.shine(B, K, a, [[0.08, -0.6], [0.22, 0.0], [0.05, 0.68]], this.mix(M, INK, 0.2));
  },
  f_pomegranate(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    B.fill(K.poly([[-0.24, -0.55], [-0.28, -0.85], [-0.1, -0.68], [0, -0.9], [0.1, -0.68], [0.28, -0.85], [0.24, -0.55]]), this.mix(M, INK, 0.2));
    B.fill(K.ring(0, 0.1, 0.74, 0.7, 20), M);
    this.shine(B, K, a, [[-0.45, -0.15], [-0.3, -0.4], [0, -0.48]], L);
  },
  f_melon(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line, t0 = 0.15 * Math.PI, t1 = 0.85 * Math.PI;
    const band = (ax, ay, bx, by) => { const o = arc(K, 0, -0.45, ax, ay, t0, t1, 16), n = arc(K, 0, -0.45, bx, by, t1, t0, 16); return [o[0], ...o, o[o.length - 1], n[0], ...n, n[n.length - 1]]; };
    B.fill(band(0.95, 1.05, 0.82, 0.9), L);
    B.fill(band(0.82, 0.9, 0.3, 0.32), M);
  },
  f_avocado(B, cx, cy, R, rot, e, a) {
    const K = go(this, cx, cy, R, rot, a); if (!K) return; const M = this.cc.red, L = this.cc.line;
    const shape = k => pts(K, [[0, -0.85 * k], [0.32 * k, -0.6 * k], [0.62 * k, 0.2 * k], [0.5 * k, 0.7 * k], [0, 0.88 * k], [-0.5 * k, 0.7 * k], [-0.62 * k, 0.2 * k], [-0.32 * k, -0.6 * k]].map(q => [q[0], q[1] + 0.05]));
    B.fill(shape(1), this.mix(M, INK, 0.35)); B.fill(shape(0.82), L);
    B.fill(K.ring(0, 0.28, 0.3, 0.3, 14), '#8A5A2B');
  }
});
})();
