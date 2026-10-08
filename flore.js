// Flore : une centaine de fleurs, arbres et plantes, chacun avec sa fleur (ou son fruit), sa feuille et sa tige
(() => {
const G = Garden.prototype;

// ---------- espèces ----------
// w : noms (fr, en, ja, zh, ar mélangés)  f : fleur  k : tige, feuille, fruits
const SP = {
  // fleurs
  rose: { w: 'rose roses rosier 薔薇 ばら バラ 玫瑰 蔷薇 وردة', k: { fl: ['rose', 'rose', 'rose', 'rosebud'], stem: '#3257FF', lt: 'rose', th: 1, rp: [0.55, 0.3] } },
  tulipe: { w: 'tulipe tulip チューリップ 郁金香 توليب', f: { t: 'cup', c: '#E8344E', c2: '#B81E3A', a: '#FF9DB0', h: 0.95, wd: 0.32, n: 3, sp: 0.42, ps: 'round', z: 1.35 }, k: { stem: '#4C9A4C', lt: 'tulip' } },
  marguerite: { w: 'marguerite paquerette daisy デイジー 雛菊 ひなぎく 雏菊 أقحوان', f: { t: 'radial', n: 16, len: 0.62, wd: 0.075, ps: 'round', c: '#FFFFFF', cr: 0.2, cc: '#FFC21A', ct: 'dots' }, k: { stem: '#5AAE55' } },
  tournesol: { w: 'tournesol sunflower ひまわり ヒマワリ 向日葵 عباد', f: { t: 'radial', n: 18, len: 0.5, wd: 0.11, ps: 'point', c: '#FFC21A', c2: '#F2A007', L: 2, lr: 0.12, cr: 0.42, cc: '#5A2E12', ct: 'seeds', z: 1.25 }, k: { stem: '#4FAE4F', sw: 1.3, lt: 'heart', leaf: 1.2 } },
  coquelicot: { w: 'coquelicot pavot poppy ポピー ケシ 罂粟 虞美人 خشخاش', f: { t: 'poppy', c: '#E8251B', c2: '#B5150F', cc: '#1A1A1A' }, k: { stem: '#6BAA4F', lt: 'cut' } },
  lavande: { w: 'lavande lavender ラベンダー 薰衣草 خزامى', f: { t: 'spike', n: 14, fl: 'bud', c: '#8E6CD9', c2: '#B49BEF', len: 1.5, wd: 0.16 }, k: { stem: '#7FA889', lt: 'grass', lc: '#8FB39A', leaf: 1.4, dens: 1.3 } },
  lys: { w: 'lys lis lily lilies ユリ 百合 ゆり 百合花 زنبق', f: { t: 'lily', c: '#FFFFFF', a: '#E85A8A', cc: '#C2410C', z: 1.15 }, k: { stem: '#4C9A4C', lt: 'lance' } },
  orchidee: { w: 'orchidee orchid ラン 蘭 兰花 兰 أوركيد سحلبية', f: { t: 'orchid', c: '#E6A3E8', c2: '#B03FA8', a: '#FFE066' }, k: { stem: '#5E8F4A', lt: 'strap' } },
  hibiscus: { w: 'hibiscus ハイビスカス 扶桑 木槿 扶桑花 كركديه', f: { t: 'hibiscus', c: '#FF2D55', c2: '#A3002A', a: '#FFD23F' }, k: { stem: '#3E8E41', lt: 'serrated', lc: '#3E8E41' } },
  pivoine: { w: 'pivoine peony 牡丹 ぼたん 芍薬 芍药 فاوانيا', f: { t: 'radial', n: 7, len: 0.55, wd: 0.32, ps: 'frill', c: '#F7A1C4', c2: '#F48FB8', L: 4, lr: 0.2, tilt: 0.3, cr: 0.1, cc: '#F06292', z: 1.3 }, k: { stem: '#4C9A4C', lt: 'cut' } },
  iris: { w: 'iris アイリス アヤメ 菖蒲 鸢尾 سوسن', f: { t: 'iris', c: '#5B4BD6', c2: '#8C7CF0', a: '#FFD23F' }, k: { stem: '#4C9A4C', lt: 'strap' } },
  jonquille: { w: 'jonquille narcisse daffodil narcissus 水仙 すいせん نرجس', f: { t: 'daffodil', c: '#FFE14D', c2: '#FF9F1C' }, k: { stem: '#5AAE55', lt: 'strap' } },
  jacinthe: { w: 'jacinthe hyacinth ヒヤシンス 风信子 ياقوتية', f: { t: 'spike', n: 12, fl: 'star', c: '#6C7BFF', c2: '#AEB6FF', len: 1.1, wd: 0.28 }, k: { stem: '#5AAE55', lt: 'strap' } },
  muguet: { w: 'muguet lilyofthevalley スズラン 鈴蘭 铃兰 ', f: { t: 'bell', n: 6, sh: 'bell', c: '#FFFFFF', a: '#DDE8D0' }, k: { stem: '#4C9A4C', lt: 'broad' } },
  lilas: { w: 'lilas lilac ライラック 丁香 ليلك', f: { t: 'ball', m: 46, fl: '4p', c: '#B58CE0', c2: '#D9BFF5', r: 0.75, cone: 1 }, k: { stem: '#5E8F4A', lt: 'heart' } },
  magnolia: { w: 'magnolia モクレン 木蓮 マグノリア 木兰 玉兰 ماغنوليا', f: { t: 'cup', c: '#F7E1EA', c2: '#C94F7C', a: '#FFFFFF', h: 1.0, wd: 0.36, n: 3, sp: 0.55, ps: 'round', base: 1 }, k: { stem: '#6B4A2A', lt: 'oval', lc: '#4C8A3F', sw: 1.3 } },
  camelia: { w: 'camelia camellia ツバキ 椿 山茶花 山茶 كاميليا', f: { t: 'radial', n: 6, len: 0.55, wd: 0.3, ps: 'round', c: '#D6224E', c2: '#E83E66', L: 3, lr: 0.25, tilt: 0.2, cr: 0.12, cc: '#FFD23F', ct: 'anthers' }, k: { stem: '#3E6E3A', lt: 'oval', lc: '#2F5E2F' } },
  chrysantheme: { w: 'chrysantheme chrysanthemum 菊 きく キク 菊花 كريسانثيمم', f: { t: 'radial', n: 22, len: 0.6, wd: 0.05, ps: 'thin', c: '#F2C14E', c2: '#E8A92A', L: 3, lr: 0.22, tilt: 0.2, cr: 0.1, cc: '#C98A1A' }, k: { stem: '#4C8A3F', lt: 'cut' } },
  dahlia: { w: 'dahlia ダリア 大丽花 داليا', f: { t: 'radial', n: 12, len: 0.55, wd: 0.13, ps: 'point', c: '#E5355F', c2: '#F06A8A', L: 4, lr: 0.2, cr: 0.08, cc: '#FFD23F', z: 1.2 }, k: { stem: '#4C8A3F', lt: 'pinnate' } },
  hortensia: { w: 'hortensia hydrangea アジサイ 紫陽花 绣球花 绣球 كوبية', f: { t: 'ball', m: 40, fl: '4p', c: '#7AA2F7', c2: '#B59CF2', r: 0.85 }, k: { stem: '#4C8A3F', lt: 'serrated', leaf: 1.2 } },
  glycine: { w: 'glycine wisteria フジ 藤 紫藤 وستارية', f: { t: 'raceme', n: 16, c: '#A98BE8', c2: '#D2C2F7' }, k: { stem: '#7A5A35', lt: 'pinnate', lc: '#6BAA4F', droop: 1.6 } },
  geranium: { w: 'geranium pelargonium ゼラニウム 天竺葵 غرنوقي', f: { t: 'ball', m: 18, fl: '5p', c: '#F2384A', c2: '#FF6B78', r: 0.6 }, k: { stem: '#5E8F4A', lt: 'round' } },
  petunia: { w: 'petunia ペチュニア 矮牵牛 بتونيا', f: { t: 'funnel', c: '#B32D8F', c2: '#5E1150', a: '#FFFFFF' }, k: { stem: '#5E8F4A', lt: 'oval' } },
  bleuet: { w: 'bleuet cornflower ヤグルマギク 矢车菊 قنطريون', f: { t: 'radial', n: 9, len: 0.5, wd: 0.11, ps: 'frill', c: '#3F6FE8', c2: '#6A8FF0', L: 2, lr: 0.3, cr: 0.12, cc: '#2A3A8C' }, k: { stem: '#7FA889', lt: 'lance', lc: '#7FA889' } },
  pensee: { w: 'pensee pansy パンジー 三色堇 بنفسج', f: { t: 'pansy', c: '#6A3FB5', c2: '#FFD23F', a: '#1A1030' }, k: { stem: '#5E8F4A', lt: 'oval' } },
  violette: { w: 'violette violet スミレ 菫 紫罗兰 بنفسجة', f: { t: 'pansy', c: '#7B4FD6', c2: '#9B74E8', a: '#2A1050', z: 0.7 }, k: { stem: '#5E8F4A', lt: 'heart' } },
  myosotis: { w: 'myosotis forgetmenot ワスレナグサ 勿忘我 أذن الفأر', f: { t: 'ball', m: 9, fl: '5p', c: '#6FA8FF', c2: '#FFE066', r: 0.55, loose: 1 }, k: { stem: '#5E8F4A', lt: 'oval' } },
  lotus: { w: 'lotus 蓮 はす ハス 莲花 荷花 莲 لوتس', f: { t: 'cup', c: '#F48FB1', c2: '#E86A9A', a: '#FFFFFF', h: 1.0, wd: 0.26, n: 5, sp: 0.36, ps: 'point', layers: 2 }, k: { stem: '#3E8E41', lt: 'pad' } },
  nenuphar: { w: 'nenuphar waterlily 睡蓮 すいれん 睡莲 نيلوفر', f: { t: 'radial', n: 10, len: 0.55, wd: 0.13, ps: 'point', c: '#FFFFFF', c2: '#FFC2D6', L: 2, lr: 0.3, tilt: 0.55, cr: 0.12, cc: '#FFD23F' }, k: { stem: '#3E8E41', lt: 'pad', leaf: 1.4 } },
  sakura: { w: 'sakura cerisier さくら 桜 サクラ 樱花 樱 ساكورا', f: { t: 'radial', n: 5, len: 0.52, wd: 0.3, ps: 'notch', c: '#FFC9DA', c2: '#FFB0C8', cr: 0.12, cc: '#E85A8A', ct: 'stamens', a: '#C2185B' }, k: { stem: '#5B3A2A', lt: 'serrated', leaf: 0.4, rp: [0.75, 0.2], sw: 1.2 } },
  jasmin: { w: 'jasmin jasmine ジャスミン 茉莉花 茉莉 ياسمين', f: { t: 'radial', n: 5, len: 0.55, wd: 0.17, ps: 'point', c: '#FFFFFF', cr: 0.08, cc: '#FFF3B0', tw: 0.4, z: 0.75, many: 3 }, k: { stem: '#4C8A3F', lt: 'pinnate' } },
  gardenia: { w: 'gardenia クチナシ 栀子花 栀子 غردينيا', f: { t: 'radial', n: 6, len: 0.58, wd: 0.3, ps: 'round', c: '#FFFDF5', c2: '#F4EFD8', L: 3, lr: 0.28, tw: 0.35, cr: 0.06, cc: '#F2E6A8' }, k: { stem: '#2F5E2F', lt: 'oval', lc: '#2F6B2F' } },
  freesia: { w: 'freesia フリージア 小苍兰 فريزيا', f: { t: 'spike', n: 5, fl: 'trumpet', c: '#FFD23F', c2: '#FFB800', len: 1.0, wd: 0.3, side: 1 }, k: { stem: '#5E8F4A', lt: 'strap' } },
  anemone: { w: 'anemone アネモネ 银莲花 شقائق', f: { t: 'radial', n: 6, len: 0.58, wd: 0.3, ps: 'round', c: '#D9254A', cr: 0.2, cc: '#1A1A2E', ct: 'anthers', a: '#2A2A4E' }, k: { stem: '#5E8F4A', lt: 'cut' } },
  renoncule: { w: 'renoncule ranunculus buttercup ラナンキュラス 毛茛 حوذان', f: { t: 'radial', n: 8, len: 0.5, wd: 0.25, ps: 'round', c: '#FF8C5A', c2: '#FFA77A', L: 5, lr: 0.17, tilt: 0.25, cr: 0.05, cc: '#7A9A3A' }, k: { stem: '#5E8F4A', lt: 'cut' } },
  gerbera: { w: 'gerbera ガーベラ 非洲菊 جربيرا', f: { t: 'radial', n: 22, len: 0.55, wd: 0.07, ps: 'round', c: '#FF5A36', c2: '#FF8A65', L: 2, lr: 0.2, cr: 0.2, cc: '#3A2A1A', ct: 'dots' }, k: { stem: '#5E8F4A', lt: 'cut' } },
  oeillet: { w: 'oeillet carnation カーネーション 康乃馨 قرنفل', f: { t: 'radial', n: 9, len: 0.5, wd: 0.22, ps: 'frill', c: '#FF5C8A', c2: '#FF85A7', L: 4, lr: 0.2, tilt: 0.35, cr: 0.03, cc: '#E0306A' }, k: { stem: '#7FA889', lt: 'grass', lc: '#7FA889' } },
  glaieul: { w: 'glaieul gladiolus グラジオラス 剑兰 唐菖蒲 دلبوث', f: { t: 'spike', n: 7, fl: 'trumpet', c: '#FF4D6D', c2: '#FF8FA3', len: 1.6, wd: 0.32 }, k: { stem: '#4C9A4C', lt: 'strap' } },
  edelweiss: { w: 'edelweiss エーデルワイス 雪绒花 إديلفايس', f: { t: 'radial', n: 9, len: 0.55, wd: 0.14, ps: 'point', c: '#F2F2EC', c2: '#DCDCD0', L: 2, lr: 0.3, cr: 0.2, cc: '#E8E0B0', ct: 'anthers', a: '#C9B970' }, k: { stem: '#B8C4B0', lt: 'lance', lc: '#B8C4B0' } },
  perceneige: { w: 'perceneige snowdrop スノードロップ 雪花莲 ', f: { t: 'bell', n: 1, sh: 'snow', c: '#FFFFFF', a: '#7FC97F' }, k: { stem: '#5AAE55', lt: 'strap' } },
  crocus: { w: 'crocus クロッカス 番红花 藏红花 زعفران', f: { t: 'cup', c: '#9B6CE0', c2: '#7A4CC0', a: '#FF8A1F', h: 0.9, wd: 0.22, n: 3, sp: 0.3, ps: 'round', pistil: 1 }, k: { stem: '#5AAE55', lt: 'grass' } },
  primevere: { w: 'primevere primrose サクラソウ 报春花 ربيع', f: { t: 'radial', n: 5, len: 0.48, wd: 0.3, ps: 'notch', c: '#FFE45C', cr: 0.14, cc: '#FF9F1C', many: 3 }, k: { stem: '#5AAE55', lt: 'serrated', lc: '#5AAE55' } },
  bougainvillier: { w: 'bougainvillier bougainvillea ブーゲンビリア 三角梅 叶子花 جهنمية', f: { t: 'bracts', c: '#E0218A', c2: '#B5126A', a: '#FFF3C2' }, k: { stem: '#6B4A2A', lt: 'heart', lc: '#4C8A3F' } },
  frangipanier: { w: 'frangipanier plumeria frangipani プルメリア 鸡蛋花 فرانجيباني', f: { t: 'radial', n: 5, len: 0.6, wd: 0.28, ps: 'round', c: '#FFFFFF', c2: '#FFE066', tw: 0.55, cr: 0.1, cc: '#FFD23F', grad: 1 }, k: { stem: '#8A6B4A', lt: 'lance', lc: '#3E8E41', sw: 1.4 } },
  protea: { w: 'protea プロテア 帝王花 بروتيا', f: { t: 'protea', c: '#F48FB1', c2: '#C2185B', a: '#FFF1E0' }, k: { stem: '#6B6B4A', lt: 'oval', lc: '#6B8A5A', sw: 1.3 } },
  cosmos: { w: 'cosmos コスモス 秋桜 秋英 كوزموس', f: { t: 'radial', n: 8, len: 0.62, wd: 0.17, ps: 'notch', c: '#F48FB1', cr: 0.16, cc: '#FFC21A', ct: 'dots' }, k: { stem: '#6BAA4F', lt: 'needle', lc: '#6BAA4F' } },
  souci: { w: 'souci marigold calendula マリーゴールド 金盏花 万寿菊 أذريون', f: { t: 'radial', n: 14, len: 0.5, wd: 0.11, ps: 'round', c: '#FF9F1C', c2: '#FFB84D', L: 3, lr: 0.22, cr: 0.14, cc: '#A85A10' }, k: { stem: '#5E8F4A', lt: 'cut' } },
  capucine: { w: 'capucine nasturtium ナスタチウム 旱金莲 كبوسين', f: { t: 'radial', n: 5, len: 0.55, wd: 0.32, ps: 'broad', c: '#FF7A1A', c2: '#E8510F', cr: 0.1, cc: '#FFD23F', a: '#B5300A', vein: 1 }, k: { stem: '#7FB86A', lt: 'round', leaf: 1.4 } },
  zinnia: { w: 'zinnia ジニア 百日草 百日菊 زينيا', f: { t: 'radial', n: 12, len: 0.48, wd: 0.15, ps: 'round', c: '#FF4D8D', c2: '#FF7AA8', L: 4, lr: 0.17, cr: 0.1, cc: '#FFD23F', ct: 'anthers' }, k: { stem: '#5E8F4A', lt: 'lance' } },
  aster: { w: 'aster アスター 紫菀 نجمية', f: { t: 'radial', n: 20, len: 0.55, wd: 0.05, ps: 'thin', c: '#9B7BE8', cr: 0.16, cc: '#FFC21A', ct: 'dots' }, k: { stem: '#5E8F4A', lt: 'lance' } },
  amaryllis: { w: 'amaryllis アマリリス 朱顶红 أمارليس', f: { t: 'lily', c: '#D61F3C', a: '#FFFFFF', cc: '#FFE066', broad: 1 }, k: { stem: '#4C9A4C', lt: 'strap', sw: 1.4 } },
  begonia: { w: 'begonia ベゴニア 秋海棠 بيغونيا', f: { t: 'radial', n: 4, len: 0.5, wd: 0.36, ps: 'round', c: '#FF6F7D', cr: 0.12, cc: '#FFD23F', ct: 'anthers', many: 3 }, k: { stem: '#B85A5A', lt: 'heart', lc: '#5E8F4A' } },
  fuchsia: { w: 'fuchsia フクシア 倒挂金钟 فوشيا', f: { t: 'bell', n: 2, sh: 'fuchsia', c: '#E0218A', a: '#6A2BB5' }, k: { stem: '#8A3A5A', lt: 'serrated', lc: '#4C8A3F' } },
  digitale: { w: 'digitale foxglove ジギタリス 毛地黄 قمعية', f: { t: 'spike', n: 9, fl: 'bell', c: '#C25AA8', c2: '#F2C6E8', len: 1.5, wd: 0.32 }, k: { stem: '#5E8F4A', lt: 'serrated', lc: '#6B9A5A' } },
  campanule: { w: 'campanule bellflower キキョウ 桔梗 风铃草 جريس', f: { t: 'bell', n: 4, sh: 'star', c: '#7A7BEA', a: '#B9BAF7' }, k: { stem: '#5E8F4A', lt: 'serrated' } },
  pissenlit: { w: 'pissenlit dandelion タンポポ 蒲公英 هندباء', f: { t: 'dandelion', c: '#FFD23F', c2: '#FFFFFF' }, k: { stem: '#7FB86A', lt: 'tooth', lc: '#5E8F4A' } },
  trefle: { w: 'trefle clover クローバー 三叶草 برسيم', f: { t: 'ball', m: 26, fl: 'tube', c: '#E87AAE', c2: '#F7B8D6', r: 0.5 }, k: { stem: '#5E8F4A', lt: 'clover', leaf: 1.6 } },
  chardon: { w: 'chardon thistle アザミ 薊 蓟 شوك', f: { t: 'thistle', c: '#B04BD6', c2: '#5E8F4A' }, k: { stem: '#7F9A7A', lt: 'holly', lc: '#7F9A7A' } },
  bruyere: { w: 'bruyere heather ヒース 石楠 خلنج', f: { t: 'spike', n: 16, fl: 'tiny', c: '#D17BC9', c2: '#E8A8E0', len: 1.1, wd: 0.16 }, k: { stem: '#7A5A35', lt: 'needle', lc: '#4C7A4A', dens: 1.3 } },
  azalee: { w: 'azalee rhododendron azalea ツツジ 躑躅 杜鹃花 杜鹃 أزالية', f: { t: 'funnel', c: '#FF6FA0', c2: '#C2185B', a: '#FFFFFF', many: 3 }, k: { stem: '#6B4A2A', lt: 'oval', lc: '#3E6E3A' } },
  strelitzia: { w: 'strelitzia birdofparadise ゴクラクチョウカ 天堂鸟 鹤望兰 عصفور', f: { t: 'strelitzia', c: '#FF8A1F', c2: '#3F6FE8', a: '#2F6B4A' }, k: { stem: '#4C8A5A', lt: 'paddle', sw: 1.3 } },
  arum: { w: 'arum calla zantedeschia カラー 马蹄莲 كالا', f: { t: 'calla', c: '#FFFFFF', c2: '#E8E6D8', a: '#FFD23F' }, k: { stem: '#4C9A4C', lt: 'arrow' } },
  gypsophile: { w: 'gypsophile gypsophila babysbreath カスミソウ 满天星 جبسوفيلا', f: { t: 'ball', m: 30, fl: 'dot', c: '#FFFFFF', c2: '#F2F2F2', r: 0.9, loose: 1 }, k: { stem: '#8FAF8A', lt: 'grass', lc: '#8FAF8A', leaf: 0.4 } },
  mimosa: { w: 'mimosa ミモザ 银荆 ميموزا', f: { t: 'ball', m: 12, fl: 'pom', c: '#FFD21F', c2: '#FFE873', r: 0.7, loose: 1 }, k: { stem: '#6B8A5A', lt: 'pinnate', lc: '#7F9A8A' } },
  // arbres
  chene: { w: 'chene oak オーク 樫 かし 楢 なら 橡树 栎树 بلوط', k: { fl: ['acorn'], stem: '#6B4A2A', lt: 'oak', lc: '#4C8A3F', rp: [0.35, 0.2], sw: 1.5, leaf: 2.2, dens: 1.3 } },
  erable: { w: 'erable maple カエデ 楓 もみじ 紅葉 枫树 枫 槭树 قيقب', k: { fl: ['samara'], stem: '#7A3A2A', lt: 'maple', lc: '#D9482B', rp: [0.3, 0.2], sw: 1.4, leaf: 2.2 } },
  sapin: { w: 'sapin fir モミ 樅 冷杉 تنوب', k: { fl: ['cone'], stem: '#5B3A22', lt: 'needle', lc: '#1F6B4A', rp: [0.25, 0.2], sw: 1.4, leaf: 3, dens: 1.4 } },
  pin: { w: 'pin pine 松 まつ マツ 松树 صنوبر', k: { fl: ['cone'], stem: '#7A4A2A', lt: 'pinetuft', lc: '#2F7A4A', rp: [0.35, 0.2], sw: 1.4, leaf: 2.4 } },
  bouleau: { w: 'bouleau birch 白樺 しらかば シラカバ 白桦 بتولا', k: { fl: ['catkin'], stem: '#E8E4DC', nodes: '#2B2B33', lt: 'birch', lc: '#7FBF4A', rp: [0.3, 0.2], sw: 1.4, leaf: 2.4 } },
  saule: { w: 'saule willow 柳 やなぎ ヤナギ 柳树 صفصاف', k: { fl: ['catkin'], stem: '#6B5A3A', lt: 'willow', lc: '#8FBF5A', rp: [0.15, 0.1], leaf: 3, droop: 2.4, dens: 1.3 } },
  eucalyptus: { w: 'eucalyptus ユーカリ 桉树 桉 كينا', k: { fl: ['gumnut', 'gumflower'], stem: '#B89A7A', lt: 'eucalyptus', lc: '#8FB3A8', rp: [0.35, 0.2], sw: 1.2, leaf: 2.4, droop: 0.6 } },
  palmier: { w: 'palmier cocotier palm palmtree coconut ヤシ 椰子 棕榈 椰树 نخلة', k: { fl: ['coconut'], stem: '#8A6B4A', nodes: '#5B4A32', lt: 'palmfrond', lc: '#3FAE5A', rp: [0.25, 0.2], sw: 1.8, leaf: 1.6 } },
  baobab: { w: 'baobab バオバブ 猴面包树 باوباب', k: { fl: ['baobabfruit'], stem: '#9C8066', lt: 'chestnut', lc: '#5E8F4A', rp: [0.3, 0.2], sw: 2.4, leaf: 1.4 } },
  olivier: { w: 'olivier olive オリーブ 橄榄树 橄榄 زيتون', k: { fl: ['olive'], stem: '#8A7A66', lt: 'olive', lc: '#8FA88A', rp: [0.4, 0.2], sw: 1.3, leaf: 2.6 } },
  cypres: { w: 'cypres cypress 糸杉 イトスギ 柏树 柏 سرو', k: { fl: ['cypresscone'], stem: '#5B3A22', lt: 'scale', lc: '#1F5E3A', rp: [0.2, 0.2], sw: 1.3, leaf: 2.8 } },
  bambou: { w: 'bambou bamboo 竹 たけ タケ 竹子 خيزران', k: { fl: null, stem: '#7FB84A', nodes: '#4C7A2A', lt: 'bamboo', lc: '#6BAA4F', rp: [0, 0], sw: 1.6, leaf: 1.8 } },
  sequoia: { w: 'sequoia redwood セコイア 红杉 سيكويا', k: { fl: ['cone'], stem: '#8A3A22', lt: 'needle', lc: '#2F6B3A', rp: [0.2, 0.2], sw: 1.9, leaf: 2.6 } },
  platane: { w: 'platane planetree sycamore プラタナス 悬铃木 دلب', k: { fl: ['spikyball'], stem: '#A8A48A', nodes: '#D9D4B8', lt: 'maple', lc: '#6BAA4F', rp: [0.3, 0.2], sw: 1.5, leaf: 2.2 } },
  tilleul: { w: 'tilleul linden 菩提樹 椴树 زيزفون', k: { fl: ['bract'], stem: '#6B5A3A', lt: 'heart', lc: '#7FBF4A', rp: [0.35, 0.2], sw: 1.4, leaf: 2.4 } },
  marronnier: { w: 'marronnier chataignier marron chataigne chestnut トチノキ 栗 くり 七叶树 栗子 كستناء', k: { fl: ['burr'], stem: '#6B4A2A', lt: 'chestnut', lc: '#4C8A3F', rp: [0.35, 0.2], sw: 1.5, leaf: 2 } },
  hetre: { w: 'hetre beech ブナ 橅 山毛榉 زان', k: { fl: ['beechnut'], stem: '#9AA0A6', lt: 'serrated', lc: '#5EA84A', rp: [0.3, 0.2], sw: 1.5, leaf: 2.6 } },
  peuplier: { w: 'peuplier poplar aspen ポプラ 杨树 白杨 حور', k: { fl: ['catkin'], stem: '#B8B4A0', nodes: '#5B5A4A', lt: 'poplar', lc: '#8FBF5A', rp: [0.2, 0.2], sw: 1.3, leaf: 2.6 } },
  acacia: { w: 'acacia アカシア 金合欢 أكاسيا', k: { fl: ['pompom'], stem: '#7A5A35', lt: 'pinnate', lc: '#6B9A5A', rp: [0.55, 0.3], sw: 1.3, leaf: 1.6, th: 1 } },
  ginkgo: { w: 'ginkgo gingko イチョウ 銀杏 いちょう 银杏 جنكة', k: { fl: null, stem: '#6B5A3A', lt: 'ginkgo', lc: '#F2C230', rp: [0, 0], sw: 1.3, leaf: 2.8 } },
  figuier: { w: 'figuier figue fig イチジク 無花果 无花果 تين', k: { fl: ['fig'], stem: '#8A8070', lt: 'fig', lc: '#4C8A3F', rp: [0.4, 0.2], sw: 1.5, leaf: 1.6 } },
  bonsai: { w: 'bonsai 盆栽 ぼんさい 盆景 بونساي', k: { fl: ['bonsai'], stem: '#6B4A2A', lt: 'needle', lc: '#3E7A3A', rp: [0.6, 0.2], sw: 1.3, leaf: 1.2 } },
  frene: { w: 'frene ash トネリコ 白蜡树 دردار', k: { fl: ['samara'], stem: '#8A8A80', lt: 'pinnate', lc: '#5EA84A', rp: [0.25, 0.2], sw: 1.4, leaf: 2.2 } },
  cedre: { w: 'cedre cedar ヒマラヤスギ 雪松 الأرز', k: { fl: ['cone'], stem: '#6B4A32', lt: 'pinetuft', lc: '#4C7A6A', rp: [0.3, 0.2], sw: 1.6, leaf: 2.4 } },
  noyer: { w: 'noyer noix walnut クルミ 胡桃 核桃 جوز', k: { fl: ['walnut'], stem: '#6B5A4A', lt: 'pinnate', lc: '#4C8A3F', rp: [0.35, 0.2], sw: 1.5, leaf: 2 } },
  houx: { w: 'houx holly ヒイラギ 柊 冬青 بهشية', k: { fl: ['hollyberry'], stem: '#4C5A3A', lt: 'holly', lc: '#1F5E2F', rp: [0.55, 0.25], leaf: 2 } },
  gui: { w: 'gui mistletoe ヤドリギ 槲寄生 دبق', k: { fl: ['whiteberry'], stem: '#8FA85A', lt: 'olive', lc: '#9AB86A', rp: [0.6, 0.2], leaf: 1.8 } },
  // plantes
  fougere: { w: 'fougere fern シダ 羊歯 蕨 蕨类 سرخس', k: { fl: null, stem: '#4C8A3F', lt: 'fern', lc: '#4FAE4F', rp: [0, 0], leaf: 1.6, dens: 1.3 } },
  lierre: { w: 'lierre ivy ツタ 蔦 常春藤 لبلاب', k: { fl: null, stem: '#5B6B3A', lt: 'ivy', lc: '#2F6B3A', rp: [0, 0], leaf: 2.8, dens: 1.4 } },
  menthe: { w: 'menthe mint ミント 薄荷 نعناع', k: { fl: ['mintspike'], stem: '#5EA84A', lt: 'serrated', lc: '#4FBF6A', rp: [0.3, 0.2], leaf: 2.6 } },
  basilic: { w: 'basilic basil バジル 罗勒 ريحان', k: { fl: null, stem: '#5EA84A', lt: 'basil', lc: '#3FAE4F', rp: [0, 0], leaf: 2.6 } },
  romarin: { w: 'romarin rosemary ローズマリー 迷迭香 إكليل', k: { fl: ['rosemaryflower'], stem: '#6B6B4A', lt: 'needle', lc: '#5E8A6A', rp: [0.3, 0.2], leaf: 3 } },
  thym: { w: 'thym thyme タイム 百里香 زعتر', k: { fl: ['thymeflower'], stem: '#7A6A4A', lt: 'tiny', lc: '#6B8A5A', rp: [0.35, 0.2], leaf: 3.5 } },
  persil: { w: 'persil parsley パセリ 欧芹 بقدونس', k: { fl: null, stem: '#5EA84A', lt: 'parsley', lc: '#4FBF4F', rp: [0, 0], leaf: 2.4 } },
  aloe: { w: 'aloe aloes アロエ 芦荟 الصبر', k: { fl: ['aloeflower'], stem: '#6BA88A', lt: 'aloe', lc: '#6BA88A', rp: [0.25, 0.2], sw: 1.4, leaf: 1.6 } },
  monstera: { w: 'monstera モンステラ 龟背竹 مونستيرا', k: { fl: null, stem: '#3E7A3A', lt: 'monstera', lc: '#2F7A3A', rp: [0, 0], sw: 1.2, leaf: 1.4 } },
  succulente: { w: 'succulente succulent 多肉植物 多肉 عصارية', k: { fl: ['rosette'], stem: '#7FA88A', lt: 'succulent', lc: '#8FBFA0', rp: [0.5, 0.3], leaf: 1.4 } },
  roseau: { w: 'roseau reed massette cattail 葦 あし 芦苇 قصب', k: { fl: ['cattail'], stem: '#8FA85A', lt: 'grass', lc: '#9AB86A', rp: [0.45, 0.2], leaf: 1.6 } },
  mousse: { w: 'mousse moss 苔 こけ コケ 苔藓 طحلب', k: { fl: ['mossball'], stem: '#6BA84A', lt: 'tiny', lc: '#7FBF4A', rp: [0.7, 0.2], leaf: 2 } },
  algue: { w: 'algue algues seaweed algae kelp 海藻 わかめ 海带 طحالب', k: { fl: null, stem: '#3E8A6A', lt: 'kelp', lc: '#4FA88A', rp: [0, 0], leaf: 2, droop: 0.8 } },
  vigne: { w: 'vigne raisin grapevine vine grape grapes ぶどう 葡萄 ブドウ 葡萄藤 عنب كرمة', k: { fl: ['grapes'], stem: '#7A5A3A', lt: 'grape', lc: '#5EA84A', rp: [0.45, 0.2], leaf: 1.8 } },
  ortie: { w: 'ortie nettle イラクサ 荨麻 قراص', k: { fl: null, stem: '#4C7A3A', lt: 'serrated', lc: '#3E7A3A', rp: [0, 0], leaf: 2.6 } },
  plante: { w: 'plante plant plantes plants feuille feuilles leaf leaves 植物 しょくぶつ 植物 نبات', k: { fl: null, stem: '#3FBF5A', lt: 'oval', rp: [0, 0], leaf: 2.2, dens: 1.4 } }
};

// ---------- fleurs : dessin paramétrique ----------
const FLW = {};
for (const [id, s] of Object.entries(SP)) if (s.f) FLW[id] = s.f;
G.SP = SP; G.FLW = FLW;

G.flower = function (B, cx, cy, R, rot, e, a, tl, f) {
  const s = this.sp(a); if (s <= 0.001) return;
  if (f.many) { // petit bouquet de fleurs identiques
    const n = f.many;
    for (let i = 0; i < n; i++) {
      const t = e.ph1 + i * 2.1, d = i ? 0.75 : 0;
      this['fw_' + f.t](B, cx + Math.cos(t) * R * d, cy + Math.sin(t) * R * d * 0.8, R * (i ? 0.7 : 0.85) * (f.z || 1), rot + i, e, a - i * 80, f, tl);
    }
    return;
  }
  this['fw_' + f.t](B, cx, cy, R * (f.z || 1), rot, e, a, f, tl);
};
// contour d'un pétale le long de son axe : u de 0 (base) à 1 (pointe), demi-largeur selon la forme
G.petal = function (K, t, r0, len, wid, shape, tilt, tw, ox = 0, oy = 0) {
  const N = 10, L = [], Rr = [];
  const hw = u => {
    switch (shape) {
      case 'point': return wid * Math.sin(Math.PI * Math.pow(u, 0.7));
      case 'thin': return wid * 0.55 * Math.sin(Math.PI * Math.pow(u, 0.5));
      case 'broad': return wid * Math.pow(Math.sin(Math.PI * (u * 0.82 + 0.1)), 0.45);
      case 'frill': return wid * Math.pow(Math.sin(Math.PI * Math.min(1, u * 0.95 + 0.03)), 0.6) * (1 + 0.12 * Math.sin(u * 28));
      default: return wid * Math.pow(Math.sin(Math.PI * Math.min(1, u * 0.95 + 0.03)), 0.6);
    }
  };
  const ct = Math.cos(t), st = Math.sin(t), sq = 1 - (tilt || 0);
  const P = (u, v) => { const rr = r0 + u * len, vv = v + (tw || 0) * u * u * wid; return K.T(ox + ct * rr - st * vv, oy + (st * rr + ct * vv) * sq); };
  for (let i = 0; i <= N; i++) { const u = i / N; L.push(P(u, hw(u))); Rr.push(P(u, -hw(u))); }
  const tip = [];
  if (shape === 'notch') tip.push(P(0.86, 0));
  if (shape === 'frill') for (let j = 1; j < 6; j++) tip.push(P(1 - (j % 2) * 0.07, wid * 0.5 * (1 - j / 3)));
  return [...L, ...tip, ...Rr.reverse()];
};
G.center = function (B, K, f, R, sq) {
  const cr = f.cr; if (!cr) return;
  B.fill(K.ell(0, 0, cr, cr * sq, 0, 18), f.cc);
  if (R < 9) return;
  if (f.ct === 'dots' || f.ct === 'seeds') {
    const n = f.ct === 'seeds' ? 34 : 14;
    for (let i = 0; i < n; i++) { const g = i * 2.39996, d = cr * 0.9 * Math.sqrt((i + 0.5) / n); B.fill(K.ring(Math.cos(g) * d, Math.sin(g) * d * sq, cr * 0.07, cr * 0.07 * sq, 5), this.mix(f.cc, '#FFFFFF', 0.25)); }
  } else if (f.ct === 'anthers') {
    for (let i = 0; i < 12; i++) { const g = i * 2.39996, d = cr * (1.05 + 0.25 * (i % 3) / 2); B.fill(K.ring(Math.cos(g) * d, Math.sin(g) * d * sq, cr * 0.13, cr * 0.13, 5), f.a || '#FFD23F'); }
  } else if (f.ct === 'stamens') {
    for (let i = 0; i < 9; i++) { const g = i / 9 * Math.PI * 2, x = Math.cos(g) * cr * 2.4, y = Math.sin(g) * cr * 2.4 * sq; B.stroke([K.T(0, 0), K.T(x, y)], f.a || f.cc, K.lw * 0.9); B.fill(K.ring(x, y, cr * 0.18, cr * 0.18, 5), f.a || f.cc); }
  }
};
G.fw_radial = function (B, cx, cy, R, rot, e, a, f) {
  const K = this.kit(cx, cy, R, rot, 1), tilt = f.tilt == null ? 0.15 : f.tilt, n = f.n || 5, layers = f.L || 1, r0 = f.r0 || (f.cr ? f.cr * 0.6 : 0.08);
  for (let L = 0; L < layers; L++) {
    const k = 1 - L * (f.lr || 0.22), sl = this.spr((a - L * 90) / 1000, 7, 13); if (sl <= 0.001) continue;
    const col = L % 2 && f.c2 ? f.c2 : f.c, off = L * Math.PI / n + e.ph1;
    for (let i = 0; i < n; i++) {
      const t = off + i / n * Math.PI * 2 + Math.sin(i * 7.1 + e.ph2) * 0.08;
      B.fill(this.petal(K, t, r0, f.len * k * sl, f.wd * k * Math.min(1, sl), f.ps, tilt, f.tw), col);
      if (f.grad && R >= 10) B.fill(this.petal(K, t, r0, f.len * 0.35 * sl, f.wd * 0.5, f.ps, tilt, f.tw), f.c2);
      if (f.vein && R >= 10) B.stroke([K.T(Math.cos(t) * r0, Math.sin(t) * r0 * (1 - tilt)), K.T(Math.cos(t) * (r0 + f.len * 0.6 * sl), Math.sin(t) * (r0 + f.len * 0.6 * sl) * (1 - tilt))], f.a, K.lw * 0.8);
    }
  }
  this.center(B, K, f, R, 1 - tilt);
};
G.fw_cup = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R, rot * 0.3, 1), n = f.n || 3, h = f.h * s, layers = f.layers || 1;
  for (let L = layers; L >= 1; L--) {
    const sc = 1 + (L - 1) * 0.25, spr = f.sp * sc;
    for (let i = 0; i <= n; i++) { const t = -Math.PI / 2 + (i - n / 2) * spr * 1.1; B.fill(this.petal(K, t, 0, h * (0.92 / sc + 0.08), f.wd * 0.9, f.ps, 0, 0, 0, 0.35), L > 1 ? f.c2 : f.c2); }
    for (let i = 0; i < n; i++) { const t = -Math.PI / 2 + (i - (n - 1) / 2) * spr; B.fill(this.petal(K, t, 0, h * (1 / sc), f.wd, f.ps, 0, 0, 0, 0.35), f.c); }
  }
  if (R >= 9) B.stroke([K.T(0, 0.3), K.T(0, 0.3 - h * 0.55)], f.a, K.lw * 0.8);
  if (f.pistil) B.stroke([K.T(0, 0.3), K.T(0.05, -0.2), K.T(0.12, -0.45)], f.a, K.lw * 1.6);
  if (f.base) B.fill(K.ell(0, 0.35, 0.18, 0.08, 0, 8), f.c2);
};
G.fw_bell = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), n = f.n, dir = Math.cos(rot + e.ph1) >= 0 ? 1 : -1, sw = Math.sin(this._now / 900 + e.ph1) * 0.06;
  const K = this.kit(cx, cy, R, sw, 1, dir);
  const arc = u => [u * 1.4, -0.35 * Math.sin(Math.PI * u * 0.9) + u * u * 0.5];
  const pts = []; for (let i = 0; i <= 12; i++) pts.push(K.T(...arc(i / 12 * (n > 1 ? 1 : 0.5))));
  B.stroke(pts, this.cc.blue, K.lw * 1.2);
  for (let i = 0; i < n; i++) {
    const u = n > 1 ? (i + 1) / (n + 0.5) : 0.5, [x, y] = arc(u), k = (n > 1 ? 1 - i * 0.08 : 1.2) * Math.min(1, s * 1.4 - i * 0.12); if (k <= 0) continue;
    B.stroke([K.T(x, y), K.T(x, y + 0.15)], this.cc.blue, K.lw);
    this.bellShape(B, K, x, y + 0.15, k * (n > 1 ? 0.55 : 0.75), f);
  }
};
G.bellShape = function (B, K, x, y, k, f) {
  if (f.sh === 'snow') {
    for (const sd of [-1, 0, 1]) B.fill(K.ell(x + sd * 0.22 * k, y + 0.55 * k, 0.17 * k, 0.5 * k, sd * 0.35, 10), f.c);
    B.fill(K.ell(x, y + 0.08 * k, 0.12 * k, 0.12 * k, 0, 8), f.a);
    return;
  }
  if (f.sh === 'fuchsia') {
    for (const sd of [-1, 1]) B.fill(K.ell(x + sd * 0.38 * k, y + 0.25 * k, 0.12 * k, 0.45 * k, sd * 1.0, 10), f.c);
    B.fill(K.ell(x, y + 0.75 * k, 0.32 * k, 0.4 * k, 0, 12), f.a);
    for (const sd of [-0.08, 0, 0.08]) B.stroke([K.T(x + sd * k, y + 0.9 * k), K.T(x + sd * 2 * k, y + 1.5 * k)], f.c, K.lw * 0.8);
    B.fill(K.ell(x, y + 0.1 * k, 0.14 * k, 0.18 * k, 0, 8), f.c);
    return;
  }
  const flare = f.sh === 'star' ? 0.62 : 0.5;
  B.fill(K.poly([[x - 0.22 * k, y], [x + 0.22 * k, y], [x + 0.36 * k, y + 0.55 * k], [x + flare * k, y + 0.85 * k], [x + 0.18 * k, y + 0.72 * k], [x, y + 0.85 * k], [x - 0.18 * k, y + 0.72 * k], [x - flare * k, y + 0.85 * k], [x - 0.36 * k, y + 0.55 * k]]), f.c);
  B.stroke([K.T(x - 0.1 * k, y + 0.1 * k), K.T(x - 0.18 * k, y + 0.6 * k)], f.a, K.lw * 0.8);
};
G.fw_spike = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R, rot * 0.2 + Math.sin(this._now / 1100 + e.ph1) * 0.04, 1), n = f.n, len = f.len;
  B.stroke([K.T(0, 0.2), K.T(0, -len * Math.min(1, s))], this.cc.blue, K.lw * 1.2);
  for (let i = 0; i < n; i++) {
    const u = i / n, show = s * 1.3 - u * 0.6; if (show <= 0) continue;
    const y = -u * len, k = (1 - u * 0.55) * Math.min(1, show), sd = f.side ? 1 : (i % 2 ? 1 : -1), x = sd * f.wd * (1 - u * 0.5) * 0.6;
    const col = u > 0.75 ? f.c2 : f.c;
    if (f.fl === 'bud') B.fill(K.ell(x * 0.7, y, 0.12 * k, 0.2 * k, sd * 0.4, 8), col);
    else if (f.fl === 'tiny') B.fill(K.ring(x * 0.8, y, 0.08 * k, 0.09 * k, 6), col);
    else if (f.fl === 'star') { for (let j = 0; j < 5; j++) B.fill(this.petal(K, j * 1.2566 + i, 0.02, 0.17 * k, 0.07 * k, 'point', 0, 0, x, y), col); }
    else if (f.fl === 'trumpet') { B.fill(this.petal(K, sd > 0 ? -0.3 : Math.PI + 0.3, 0, 0.6 * k, 0.28 * k, 'broad', 0, 0, x * 0.4, y), col); B.fill(K.ring(x * 0.4 + sd * 0.25 * k, y - 0.05 * k, 0.07 * k, 0.07 * k, 6), f.c2); }
    else if (f.fl === 'bell') { this.bellShape(B, K, x, y - 0.2 * k, k * 0.35, { c: col, a: f.c2 }); }
  }
};
G.fw_ball = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy - (f.cone ? R * 0.3 : 0), R, rot * 0.2, 1), m = f.m, r = f.r * Math.min(1, s);
  for (let i = 0; i < m; i++) {
    const g = i * 2.39996 + e.ph1, d = Math.sqrt((i + 0.5) / m);
    let x = Math.cos(g) * d * r, y = Math.sin(g) * d * r;
    if (f.cone) { y = (d * 2 - 1) * r * 1.3; x *= 0.4 + 0.6 * (y / r + 1.3) / 2.6; }
    if (f.loose) { x *= 1.25; y *= 1.1; if (i % 3 === 0) B.stroke([K.T(0, r * 0.9), K.T(x, y)], this.cc.blue, K.lw * 0.6); }
    const k = (f.fl === 'dot' ? 0.09 : f.fl === 'pom' ? 0.18 : 0.15) * Math.min(1, s * 1.5 - d * 0.5), col = (i * 7) % 3 ? f.c : f.c2;
    if (k <= 0) continue;
    if (f.fl === '4p' || f.fl === '5p') { const np = f.fl === '4p' ? 4 : 5; for (let j = 0; j < np; j++) B.fill(this.petal(K, j / np * Math.PI * 2 + g, 0.01, k, k * 0.6, 'round', 0.1, 0, x, y), col); if (f.fl === '5p') B.fill(K.ring(x, y, k * 0.25, k * 0.25, 5), f.c2); }
    else if (f.fl === 'tube') B.fill(K.ell(x, y, k * 0.35, k * 0.8, Math.atan2(y, x) + Math.PI / 2, 6), col);
    else B.fill(K.ring(x, y, k, k, 7), col);
  }
};
G.fw_raceme = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), sw = Math.sin(this._now / 1000 + e.ph1) * 0.08, K = this.kit(cx, cy, R, sw, 1), n = f.n;
  for (let i = 0; i < n; i++) {
    const u = i / n, show = s * 1.3 - u * 0.5; if (show <= 0) continue;
    const y = 0.15 + u * 2.0, k = (1 - u * 0.6) * Math.min(1, show), x = (i % 2 ? 1 : -1) * 0.2 * (1 - u);
    B.fill(this.petal(K, Math.PI / 2 + (i % 2 ? -0.5 : 0.5), 0, 0.3 * k, 0.17 * k, 'round', 0, 0, x, y), u > 0.6 ? f.c2 : f.c);
  }
};
G.fw_lily = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.15, rot * 0.5, 1);
  for (let i = 0; i < 6; i++) {
    const t = e.ph1 + i / 6 * Math.PI * 2;
    B.fill(this.petal(K, t, 0.05, 0.75 * s, f.broad ? 0.26 : 0.17, 'point', 0.2, 0.25), f.c);
    if (R >= 10) for (let j = 1; j < 4; j++) B.fill(K.ring(Math.cos(t) * 0.12 * j, Math.sin(t) * 0.12 * j * 0.8, 0.025, 0.025, 4), f.a);
  }
  for (let i = 0; i < 6; i++) { const t = e.ph1 + i * 1.047 + 0.4, x = Math.cos(t) * 0.5 * s, y = Math.sin(t) * 0.4 * s; B.stroke([K.T(0, 0), K.T(x, y)], '#D8E8B0', K.lw * 0.7); B.fill(K.ell(x, y, 0.07, 0.035, t, 6), f.cc); }
};
G.fw_hibiscus = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.2, rot * 0.5, 1);
  for (let i = 0; i < 5; i++) { const t = e.ph1 + i / 5 * Math.PI * 2; B.fill(this.petal(K, t, 0.02, 0.7 * s, 0.38, 'broad', 0.15, 0.3), f.c); if (R >= 10) for (const d of [-0.12, 0, 0.12]) B.stroke([K.T(0, 0), K.T(Math.cos(t + d) * 0.4 * s, Math.sin(t + d) * 0.4 * s * 0.85)], f.c2, K.lw * 0.6); }
  B.fill(K.ring(0, 0, 0.2, 0.17, 12), f.c2);
  const tx = Math.cos(e.ph2) * 0.75 * s, ty = Math.sin(e.ph2) * 0.6 * s - 0.2;
  B.stroke([K.T(0, 0), K.T(tx, ty)], f.c, K.lw * 2.2);
  for (let i = 0; i < 6; i++) { const u = 0.55 + i * 0.07; B.fill(K.ring(tx * u + Math.sin(i * 2) * 0.05, ty * u + Math.cos(i * 2) * 0.05, 0.04, 0.04, 5), f.a); }
  for (const d of [-0.06, 0.06]) B.fill(K.ring(tx + d, ty - 0.04, 0.05, 0.05, 5), f.c2);
};
G.fw_daffodil = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.1, rot * 0.4, 1);
  for (let i = 0; i < 6; i++) B.fill(this.petal(K, e.ph1 + i / 6 * Math.PI * 2, 0.05, 0.6 * s, 0.22, 'point', 0.25), f.c);
  B.fill(K.ell(0, 0, 0.3 * s, 0.26 * s, 0, 16), f.c2);
  B.fill(K.ell(0.05, -0.04, 0.2 * s, 0.17 * s, 0, 14), this.mix(f.c2, '#7A3A00', 0.25));
  if (R >= 9) B.stroke(this.closed(K.ell(0, 0, 0.3 * s, 0.26 * s, 0, 16)), this.mix(f.c2, '#FFFFFF', 0.35), K.lw);
};
G.fw_funnel = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.05, rot * 0.5, 1);
  B.fill(K.ell(0, 0, 0.8 * s, 0.72 * s, 0, 5 * 5), f.c);
  for (let i = 0; i < 5; i++) B.fill(this.petal(K, e.ph1 + i / 5 * Math.PI * 2, 0.05, 0.78 * s, 0.32, 'broad', 0.1), f.c);
  B.fill(K.ring(0, 0, 0.22, 0.2, 12), f.c2);
  if (R >= 10) for (let i = 0; i < 5; i++) { const t = e.ph1 + i / 5 * Math.PI * 2 + 0.63; B.stroke([K.T(Math.cos(t) * 0.2, Math.sin(t) * 0.18), K.T(Math.cos(t) * 0.6 * s, Math.sin(t) * 0.55 * s)], f.c2, K.lw * 0.8); }
  B.fill(K.ring(0, 0, 0.06, 0.06, 6), f.a);
};
G.fw_poppy = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.15, rot * 0.5, 1);
  for (let i = 0; i < 4; i++) { const t = e.ph1 + i / 4 * Math.PI * 2 + 0.4; B.fill(this.petal(K, t, 0, 0.66 * s, 0.42, 'frill', 0.2, 0.15), i % 2 ? f.c : f.c2); }
  B.fill(K.ring(0, 0, 0.2, 0.18, 12), f.cc);
  if (R >= 9) { for (let i = 0; i < 14; i++) { const g = i * 0.449; B.fill(K.ring(Math.cos(g) * 0.27, Math.sin(g) * 0.24, 0.03, 0.03, 4), f.cc); } B.fill(K.ring(0, 0, 0.1, 0.09, 8), '#6B7A4A'); }
};
G.fw_orchid = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.15, rot * 0.3, 1);
  for (const t of [-Math.PI / 2, Math.PI * 0.2, Math.PI * 0.8]) B.fill(this.petal(K, t, 0, 0.62 * s, 0.17, 'point', 0), f.c);
  for (const t of [-0.25, Math.PI + 0.25]) B.fill(this.petal(K, t, 0, 0.58 * s, 0.3, 'round', 0), f.c);
  B.fill(K.ell(0, 0.3 * s, 0.2, 0.26, 0, 12), f.c2);
  for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.14, 0.12, 0.1, 0.07, sd * 0.4, 8), f.c2);
  B.fill(K.ell(0, 0, 0.08, 0.1, 0, 8), f.a);
};
G.fw_iris = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.2, rot * 0.2, 1);
  for (const sd of [-1, 1]) B.fill(this.petal(K, Math.PI / 2 + sd * 0.9, 0, 0.7 * s, 0.3, 'round', 0), f.c);
  B.fill(this.petal(K, Math.PI / 2, 0, 0.75 * s, 0.3, 'round', 0), f.c);
  for (const sd of [-1, 1]) B.fill(this.petal(K, -Math.PI / 2 + sd * 0.35, 0, 0.62 * s, 0.24, 'round', 0), f.c2);
  if (R >= 9) for (const sd of [-1, 0, 1]) B.stroke([K.T(sd * 0.12, 0.08), K.T(Math.cos(Math.PI / 2 + sd * 0.9) * 0.35, Math.sin(Math.PI / 2 + sd * 0.9) * 0.35)], f.a, K.lw * 1.6);
};
G.fw_pansy = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.1, rot * 0.3, 1);
  for (const t of [-Math.PI / 2 - 0.45, -Math.PI / 2 + 0.45]) B.fill(this.petal(K, t, 0, 0.6 * s, 0.32, 'round', 0), f.c);
  for (const t of [-0.15, Math.PI + 0.15]) B.fill(this.petal(K, t, 0, 0.55 * s, 0.3, 'round', 0), f.c2 && f.t === 'pansy' && f.c2 !== '#FFD23F' ? f.c2 : this.mix(f.c, '#FFFFFF', 0.25));
  B.fill(this.petal(K, Math.PI / 2, 0, 0.62 * s, 0.38, 'broad', 0), f.c2 || f.c);
  if (R >= 8) { B.fill(K.ell(0, 0.18, 0.2, 0.16, 0, 10), f.a); for (const t of [-0.5, 0, 0.5]) B.stroke([K.T(0, 0.05), K.T(Math.sin(t) * 0.3, 0.05 + Math.cos(t) * 0.3)], f.a, K.lw * 0.9); }
  B.fill(K.ring(0, 0, 0.06, 0.06, 6), '#FFD23F');
};
G.fw_thistle = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.1, rot * 0.2, 1);
  B.fill(K.ell(0, 0.25, 0.32 * s, 0.32 * s, 0, 14), f.c2);
  if (R >= 8) for (let i = 0; i < 8; i++) { const t = Math.PI / 2 + (i - 3.5) * 0.35; B.stroke([K.T(Math.cos(t) * 0.25, 0.25 + Math.sin(t) * 0.25), K.T(Math.cos(t) * 0.45, 0.25 + Math.sin(t) * 0.45)], f.c2, K.lw); }
  for (let i = 0; i < 16; i++) { const t = -Math.PI / 2 + (i - 7.5) * 0.12; B.stroke([K.T(0, 0.05), K.T(Math.cos(t) * 0.7 * s, 0.05 + Math.sin(t) * 0.6 * s)], f.c, K.lw * 1.4); }
};
G.fw_dandelion = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R, 0, 1), puff = e.ph2 > 3.3;
  if (puff) {
    for (let i = 0; i < 26; i++) { const t = i / 26 * Math.PI * 2 + e.ph1, x = Math.cos(t) * 0.72 * s, y = Math.sin(t) * 0.72 * s; B.stroke([K.T(0, 0), K.T(x, y)], this.rgba('#FFFFFF', 0.7), K.lw * 0.5); B.fill(K.ring(x, y, 0.05, 0.05, 5), f.c2); }
    B.fill(K.ring(0, 0, 0.1, 0.1, 8), '#C9B98A');
  } else {
    for (let L = 0; L < 3; L++) for (let i = 0; i < 20; i++) B.fill(this.petal(K, i / 20 * Math.PI * 2 + L * 0.15, 0, (0.6 - L * 0.15) * s, 0.05, 'thin', 0.15), L === 2 ? '#FFB800' : f.c);
  }
};
G.fw_protea = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.15, rot * 0.2, 1);
  for (let L = 0; L < 3; L++) for (let i = 0; i < 7; i++) { const t = -Math.PI / 2 + (i - 3) * (0.32 - L * 0.06); B.fill(this.petal(K, t, 0, (0.8 - L * 0.18) * s, 0.13, 'point', 0, 0, 0, 0.3), L === 1 ? f.c2 : f.c); }
  B.fill(K.ell(0, -0.1, 0.22, 0.3, 0, 12), f.a);
};
G.fw_strelitzia = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.25, 0, 1, Math.cos(e.ph1) >= 0 ? 1 : -1);
  B.fill(K.poly([[-0.7, 0.15], [0.6, -0.05], [0.75, 0.05], [-0.6, 0.3]]), f.a);
  for (let i = 0; i < 3; i++) B.fill(this.petal(K, -Math.PI / 2 - 0.3 + i * 0.35, 0, (0.65 - i * 0.08) * s, 0.1, 'point', 0, 0, -0.1 + i * 0.12, 0.1), f.c);
  B.fill(this.petal(K, -0.25, 0, 0.5 * s, 0.07, 'point', 0, 0, 0.05, 0.05), f.c2);
};
G.fw_calla = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R * 1.15, rot * 0.3, 1);
  B.fill(K.poly([[0, 0.45], [-0.35, -0.1], [-0.25, -0.6], [0.15, -0.95 * s], [0.4, -0.35], [0.12, 0.2]]), f.c);
  B.fill(K.poly([[0, 0.45], [-0.15, -0.1], [0.05, -0.55 * s], [0.12, 0.2]]), f.c2);
  B.fill(K.ell(0, -0.1, 0.06, 0.32 * s, 0.1, 8), f.a);
};
G.fw_bracts = function (B, cx, cy, R, rot, e, a, f) {
  const s = this.sp(a), K = this.kit(cx, cy, R, rot, 1);
  for (let j = 0; j < 3; j++) {
    const ox = Math.cos(e.ph1 + j * 2.1) * 0.5, oy = Math.sin(e.ph1 + j * 2.1) * 0.4;
    for (let i = 0; i < 3; i++) B.fill(this.petal(K, i / 3 * Math.PI * 2 + j, 0, 0.4 * s, 0.26, 'round', 0.1, 0, ox, oy), i === 1 ? f.c2 : f.c);
    B.fill(K.ring(ox, oy, 0.05, 0.05, 5), f.a);
  }
};

// ---------- fruits et graines des arbres ----------
G.f_acorn = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.8, rot * 0.4, s);
  for (const [x, r2] of [[0, 1], [0.6, 0.85]].slice(0, e.ph2 > 3 ? 2 : 1)) {
    B.fill(K.ell(x, 0.25 * r2, 0.33 * r2, 0.45 * r2, 0, 14), '#B5782F');
    B.fill(K.ell(x, -0.15 * r2, 0.38 * r2, 0.2 * r2, 0, 12), '#6B4A2A');
    if (R >= 8) for (let i = -2; i <= 2; i++) B.fill(K.ring(x + i * 0.12 * r2, -0.15 * r2, 0.05, 0.05, 4), '#8A6236');
    B.stroke([K.T(x, -0.3 * r2), K.T(x + 0.05, -0.5 * r2)], '#6B4A2A', K.lw * 1.4);
  }
};
G.f_samara = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot + Math.sin(this._now / 700 + e.ph1) * 0.1, s);
  for (const sd of [-1, 1]) { B.fill(this.petal(K, -Math.PI / 2 + sd * 0.5, 0.1, 0.75, 0.16, 'round', 0, 0.3 * sd), '#C9A866'); B.fill(K.ring(sd * 0.08, 0, 0.11, 0.11, 8), '#8A6B3A'); }
};
G.f_cone = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy + R * 0.4, R * 0.9, Math.PI + rot * 0.3, s);
  B.fill(K.ell(0, -0.35, 0.32, 0.6, 0, 16), '#7A4A22');
  for (let r = 0; r < 5; r++) for (let i = -1; i <= 1; i++) B.fill(K.ell(i * 0.17 + (r % 2) * 0.08, -0.8 + r * 0.22, 0.09, 0.07, 0, 6), '#A8703A');
};
G.f_cypresscone = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s); B.fill(K.ring(0, 0, 0.35, 0.35, 10), '#6B5A3A'); B.stroke([K.T(-0.3, 0), K.T(0.3, 0)], '#4A3A22', K.lw); B.stroke([K.T(0, -0.3), K.T(0, 0.3)], '#4A3A22', K.lw); };
G.f_gumnut = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.8, rot * 0.4, s);
  for (const x of [-0.35, 0, 0.35]) { B.stroke([K.T(0, -0.6), K.T(x, 0)], '#8A6B4A', K.lw); B.fill(K.ell(x, 0.15, 0.17, 0.22, 0, 10), '#8FA89A'); B.fill(K.ring(x, -0.02, 0.07, 0.04, 6), '#5E4A3A'); }
};
G.f_gumflower = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.85, rot, s);
  for (let i = 0; i < 30; i++) { const t = i / 30 * Math.PI * 2, d = 0.4 + (i % 3) * 0.1; B.stroke([K.T(0, 0), K.T(Math.cos(t) * d, Math.sin(t) * d)], '#FFF3C2', K.lw * 0.6); }
  B.fill(K.ring(0, 0, 0.15, 0.15, 8), '#C9D9A8');
};
G.f_coconut = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.8, 0, s);
  for (const [x, y] of [[-0.3, 0.1], [0.3, 0.1], [0, 0.4]]) { B.fill(K.ring(x, y, 0.3, 0.3, 12), '#7A4E2A'); if (R >= 8) B.fill(K.ring(x - 0.08, y - 0.08, 0.06, 0.06, 5), '#A8784A'); }
};
G.f_baobabfruit = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, Math.sin(this._now / 900 + e.ph1) * 0.1, s); B.stroke([K.T(0, -0.3), K.T(0, 0.3)], '#6B5A3A', K.lw); B.fill(K.ell(0, 0.65, 0.2, 0.42, 0, 12), '#9AA88A'); };
G.f_olive = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s);
  for (const [x, y, c] of [[-0.2, 0.1, '#5E6B2A'], [0.25, 0.25, '#2B2B33'], [0, 0.45, '#7A8A3A']]) { B.stroke([K.T(0, -0.4), K.T(x, y - 0.2)], '#6B6B4A', K.lw * 0.8); B.fill(K.ell(x, y, 0.15, 0.22, 0.3, 10), c); }
};
G.f_fig = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.9, rot * 0.3, s);
  B.fill(this.dropShape(K), '#6B3A6B'); B.fill(K.ring(0, 0.55, 0.08, 0.06, 6), '#B85A8A');
};
G.f_walnut = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.75, rot, s); B.fill(K.ring(0, 0, 0.45, 0.42, 14), '#7FA84A'); if (R >= 8) B.fill(K.ring(-0.12, -0.12, 0.08, 0.08, 6), '#A8C87A'); };
G.f_beechnut = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s); for (let i = 0; i < 4; i++) B.fill(this.petal(K, i * 1.5708 + 0.785, 0, 0.45, 0.2, 'point', 0), '#8A6B3A'); B.fill(K.ring(0, 0, 0.12, 0.12, 6), '#5B3A22'); };
G.f_burr = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.8, rot, s);
  for (let i = 0; i < 18; i++) { const t = i / 18 * Math.PI * 2; B.stroke([K.T(Math.cos(t) * 0.35, Math.sin(t) * 0.35), K.T(Math.cos(t) * 0.55, Math.sin(t) * 0.55)], '#8FB84A', K.lw); }
  B.fill(K.ring(0, 0, 0.38, 0.38, 14), '#7FA83A'); if (e.ph2 > 3) B.fill(K.ell(0.12, -0.05, 0.22, 0.2, 0, 10), '#6B3A1E');
};
G.f_spikyball = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy + R * 0.3, R * 0.7, 0, s); B.stroke([K.T(0, -0.9), K.T(0, -0.35)], '#8A7A5A', K.lw); B.fill(K.ring(0, 0, 0.35, 0.35, 12), '#A8904A'); if (R >= 8) for (let i = 0; i < 10; i++) B.fill(K.ring(Math.cos(i * 2.4) * 0.22, Math.sin(i * 2.4) * 0.22, 0.04, 0.04, 4), '#6B5A2A'); };
G.f_pompom = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.8, rot, s);
  for (const [x, y] of [[0, 0], [-0.45, 0.3], [0.45, 0.25]]) { for (let i = 0; i < 14; i++) { const t = i / 14 * Math.PI * 2; B.stroke([K.T(x, y), K.T(x + Math.cos(t) * 0.25, y + Math.sin(t) * 0.25)], '#FFD21F', K.lw * 0.8); } B.fill(K.ring(x, y, 0.17, 0.17, 10), '#FFE873'); }
};
G.f_catkin = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, Math.sin(this._now / 800 + e.ph1) * 0.12, s);
  for (let i = 0; i < 9; i++) B.fill(K.ring((i % 2 ? 0.05 : -0.05), 0.1 + i * 0.12, 0.09 * (1 - i * 0.05), 0.08, 6), i % 2 ? '#C9B96A' : '#A8A05A');
};
G.f_bract = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3, s);
  B.fill(this.petal(K, -0.4, 0, 0.9, 0.18, 'round', 0), '#C9D98A');
  for (const [x, y] of [[0.1, 0.4], [-0.15, 0.55], [0.2, 0.62]]) { B.stroke([K.T(0.1, 0.1), K.T(x, y)], '#8FA85A', K.lw * 0.7); B.fill(K.ring(x, y, 0.09, 0.09, 7), '#FFF3B0'); }
};
G.f_bonsai = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 1.1, 0, s);
  B.fill(K.poly([[-0.55, 0.55], [0.55, 0.55], [0.42, 0.85], [-0.42, 0.85]]), '#2F4A6B');
  B.stroke([K.T(0, 0.55), K.T(-0.15, 0.2), K.T(0.15, -0.1), K.T(-0.05, -0.3)], '#6B4A2A', K.lw * 3);
  for (const [x, y, r] of [[-0.35, -0.05, 0.28], [0.3, -0.25, 0.25], [-0.05, -0.5, 0.3]]) B.fill(K.ell(x, y, r * 1.3, r * 0.7, 0, 12), '#3E7A3A');
};
G.f_hollyberry = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s); for (const [x, y] of [[0, 0], [-0.3, 0.25], [0.3, 0.22]]) { B.fill(K.ring(x, y, 0.22, 0.22, 10), '#D61F2C'); if (R >= 8) B.fill(K.ring(x - 0.06, y - 0.06, 0.05, 0.05, 5), '#FF9DA0'); } };
G.f_whiteberry = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s); for (const [x, y] of [[0, 0], [-0.3, 0.2], [0.3, 0.2]]) B.fill(K.ring(x, y, 0.2, 0.2, 10), '#F4F4E8'); };
G.f_mintspike = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2, s); for (let i = 0; i < 5; i++) B.fill(K.ell(0, -i * 0.22, 0.17 - i * 0.02, 0.1, 0, 10), i % 2 ? '#C9A8E8' : '#B08CD9'); };
G.f_rosemaryflower = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s); for (const [x, y] of [[0, 0], [0.35, 0.2], [-0.3, 0.3]]) for (let i = 0; i < 4; i++) B.fill(this.petal(K, i * 1.57 + x, 0, 0.22, 0.12, 'round', 0, 0, x, y), '#8FA8F0'); };
G.f_thymeflower = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.7, rot, s); for (let i = 0; i < 9; i++) B.fill(K.ring(Math.cos(i * 2.4) * 0.3 * Math.sqrt(i / 9), Math.sin(i * 2.4) * 0.3 * Math.sqrt(i / 9), 0.09, 0.09, 6), '#E0A8D9'); };
G.f_aloeflower = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.1, s); for (let i = 0; i < 8; i++) B.fill(K.ell((i % 2 ? 0.06 : -0.06), -i * 0.15, 0.06, 0.16, (i % 2 ? 0.5 : -0.5), 6), i > 5 ? '#7FA84A' : '#FF8A3D'); };
G.f_rosette = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, e.ph1, s);
  for (let L = 0; L < 3; L++) for (let i = 0; i < 6; i++) B.fill(this.petal(K, i / 6 * Math.PI * 2 + L * 0.5, 0, 0.75 - L * 0.22, 0.24 - L * 0.04, 'point', 0.3), L === 2 ? '#C9E0B0' : L ? '#9FC8A8' : '#7FB09A');
  if (R >= 9) for (let i = 0; i < 6; i++) { const t = i / 6 * Math.PI * 2; B.fill(K.ring(Math.cos(t) * 0.68, Math.sin(t) * 0.68 * 0.7, 0.04, 0.04, 4), '#E8607A'); }
};
G.f_cattail = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.1 + Math.sin(this._now / 900 + e.ph1) * 0.05, s); B.stroke([K.T(0, 0.3), K.T(0, -1.1)], '#8FA85A', K.lw); B.fill(K.ell(0, -0.4, 0.13, 0.42, 0, 12), '#6B4226'); };
G.f_mossball = function (B, cx, cy, R, rot, e, a) { const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 0.6, rot, s); for (let i = 0; i < 7; i++) { const t = i * 2.4; B.fill(K.ring(Math.cos(t) * 0.3, Math.sin(t) * 0.25, 0.25, 0.22, 8), i % 2 ? '#7FBF4A' : '#5EA83A'); } B.stroke([K.T(0.1, -0.2), K.T(0.15, -0.65)], '#C9A86A', K.lw); B.fill(K.ell(0.15, -0.7, 0.04, 0.08, 0, 6), '#A8703A'); };
G.f_grapes = function (B, cx, cy, R, rot, e, a) {
  const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, Math.sin(this._now / 1000 + e.ph1) * 0.06, s);
  for (let r = 0; r < 4; r++) for (let i = 0; i < 4 - r; i++) { const x = (i - (3 - r) / 2) * 0.24, y = 0.1 + r * 0.22; B.fill(K.ring(x, y, 0.13, 0.13, 8), '#6B2F7A'); if (R >= 10) B.fill(K.ring(x - 0.04, y - 0.04, 0.03, 0.03, 4), '#B78BC9'); }
  B.stroke([K.T(0, -0.2), K.T(0, 0.05)], '#7A5A3A', K.lw * 1.4);
};

// ---------- feuilles ----------
const lw = (L, k = 0.035) => Math.max(0.8, L * k);
Object.assign(G, {
  lf_oval(B, x, y, a, L, b) { this.blade(B, x, y, a, L, b); },
  lf_broad(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.15, b, { w: 0.3, pw: 0.7 }); },
  lf_lance(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.25, b, { w: 0.1, pw: 0.7 }); },
  lf_strap(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.5, b * 1.6, { w: 0.08, pw: 0.5, vein: false }); },
  lf_grass(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.4, b * 2, { w: 0.04, pw: 0.4, vein: false }); },
  lf_tulip(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.4, b * 1.4, { w: 0.13, pw: 0.6, vein: false }); },
  lf_serrated(B, x, y, a, L, b) { this.blade(B, x, y, a, L, b, { w: 0.2, teeth: 9 }); },
  lf_birch(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 0.75, b, { w: 0.26, pw: 0.6, teeth: 8 }); },
  lf_poplar(B, x, y, a, L, b) { this.blade(B, x, y, a + Math.sin(this._now / 160 + x) * 0.15, L * 0.85, b, { w: 0.32, pw: 0.5, heart: 1 }); },
  lf_heart(B, x, y, a, L, b) { this.blade(B, x, y, a, L, b, { w: 0.3, pw: 0.55, heart: 1 }); },
  lf_basil(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 0.9, b * 1.5, { w: 0.28, pw: 0.75 }); },
  lf_olive(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.1, b, { w: 0.08, pw: 0.6, vein: false }); },
  lf_willow(B, x, y, a, L, b) { this.blade(B, x, y, Math.PI / 2 + (a - Math.PI / 2) * 0.25, L * 1.5, b, { w: 0.06, pw: 0.6, vein: false }); },
  lf_eucalyptus(B, x, y, a, L, b) { this.blade(B, x, y, Math.PI / 2 + (a - Math.PI / 2) * 0.5, L * 1.4, 2.2, { w: 0.1, pw: 0.6 }); },
  lf_oak(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.05, b, { w: 0.26, pw: 0.9, lobes: 4.5, lobeAmp: 0.45, n: 28 }); },
  lf_tooth(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.2, b, { w: 0.14, pw: 0.9, lobes: 6, lobeAmp: 0.6, n: 30 }); },
  lf_cut(B, x, y, a, L, b) { this.blade(B, x, y, a, L, b, { w: 0.22, pw: 0.8, lobes: 3.5, lobeAmp: 0.55, n: 24 }); },
  lf_holly(B, x, y, a, L, b) { this.blade(B, x, y, a, L, b, { w: 0.22, pw: 0.8, lobes: 5, lobeAmp: 0.35, n: 30 }); },
  lf_paddle(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.4, b, { w: 0.22, pw: 0.5 }); },
  lf_arrow(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.2, b, { w: 0.3, pw: 0.45, heart: 1 }); },
  lf_kelp(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.7, Math.sin(this._now / 600 + x) * 2.5, { w: 0.09, pw: 0.5, lobes: 9, lobeAmp: 0.25, n: 26, vein: false }); },
  lf_aloe(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.3, b * 0.5, { w: 0.14, pw: 0.35, lobes: 8, lobeAmp: 0.12, n: 26, vein: false }); },
  lf_succulent(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 0.7, 0, { w: 0.32, pw: 0.6, vein: false }); },
  lf_bamboo(B, x, y, a, L, b) { this.blade(B, x, y, a, L * 1.3, b, { w: 0.11, pw: 0.6 }); },
  // feuilles composées
  lf_maple(B, x, y, a, L, b) {
    const col = this.cc.leaf || this.cc.blue;
    for (const [d, k] of [[0, 1], [-0.75, 0.8], [0.75, 0.8], [-1.45, 0.5], [1.45, 0.5]]) this.blade(B, x, y, a + d, L * 0.75 * k, 0, { w: 0.26, pw: 0.85, lobes: 2.5, lobeAmp: 0.35, n: 16, col, vein: false });
    if (L > 6) B.stroke([[x, y], [x + Math.cos(a) * L * 0.6, y + Math.sin(a) * L * 0.6]], this.cc.vein, lw(L, 0.025));
  },
  lf_grape(B, x, y, a, L, b) { for (const [d, k] of [[0, 1], [-0.85, 0.75], [0.85, 0.75]]) this.blade(B, x, y, a + d, L * 0.75 * k, 0, { w: 0.34, pw: 0.7, teeth: 6, vein: false }); },
  lf_fig(B, x, y, a, L, b) { for (const [d, k] of [[0, 1], [-0.7, 0.85], [0.7, 0.85], [-1.4, 0.55], [1.4, 0.55]]) this.blade(B, x, y, a + d, L * 0.8 * k, 0, { w: 0.24, pw: 0.75, vein: false }); },
  lf_chestnut(B, x, y, a, L, b) { for (const [d, k] of [[0, 1], [-0.55, 0.85], [0.55, 0.85], [-1.1, 0.6], [1.1, 0.6]]) this.blade(B, x, y, a + d, L * 0.85 * k, 0, { w: 0.15, pw: 0.85, teeth: 9 }); },
  lf_clover(B, x, y, a, L, b) { for (const d of [-1.1, 0, 1.1]) this.blade(B, x, y, a + d, L * 0.45, 0, { w: 0.48, pw: 0.4, heart: 1, vein: false }); },
  lf_round(B, x, y, a, L, b) {
    const c = [x + Math.cos(a) * L * 0.4, y + Math.sin(a) * L * 0.4], col = this.cc.leaf || this.cc.blue, r = L * 0.38, p = [];
    for (let i = 0; i < 18; i++) { const t = i / 18 * Math.PI * 2; p.push([c[0] + Math.cos(t) * r, c[1] + Math.sin(t) * r]); }
    B.stroke([[x, y], c], col, lw(L)); B.fill(p, col);
    if (L > 6) for (let i = 0; i < 7; i++) { const t = i / 7 * Math.PI * 2; B.stroke([c, [c[0] + Math.cos(t) * r * 0.85, c[1] + Math.sin(t) * r * 0.85]], this.cc.vein, lw(L, 0.02)); }
  },
  lf_pad(B, x, y, a, L, b) {
    const c = [x + Math.cos(a) * L * 0.45, y + Math.sin(a) * L * 0.45], col = this.cc.leaf || this.cc.blue, r = L * 0.5, p = [c];
    for (let i = 1; i < 20; i++) { const t = a + Math.PI + i / 20 * Math.PI * 1.85 - Math.PI * 0.92; p.push([c[0] + Math.cos(t) * r, c[1] + Math.sin(t) * r * 0.55]); }
    B.fill(p, col);
  },
  lf_pinnate(B, x, y, a, L, b) {
    const ca = Math.cos(a), sa = Math.sin(a), col = this.cc.leaf || this.cc.blue, n = 4;
    B.stroke([[x, y], [x + ca * L, y + sa * L]], col, lw(L, 0.025));
    for (let i = 0; i < n; i++) { const u = 0.25 + i / n * 0.7, q = [x + ca * L * u, y + sa * L * u]; for (const sd of [-1, 1]) this.blade(B, q[0], q[1], a + sd * 1.05, L * 0.3, 0, { w: 0.24, vein: false }); }
    this.blade(B, x + ca * L * 0.92, y + sa * L * 0.92, a, L * 0.3, 0, { w: 0.24, vein: false });
  },
  lf_parsley(B, x, y, a, L, b) { for (const d of [-0.6, 0, 0.6]) this.blade(B, x, y, a + d, L * 0.6, 0, { w: 0.3, lobes: 3, lobeAmp: 0.5, n: 18, vein: false }); },
  lf_ivy(B, x, y, a, L, b) { for (const [d, k] of [[0, 1], [-1, 0.7], [1, 0.7]]) this.blade(B, x, y, a + d, L * 0.6 * k, 0, { w: 0.4, pw: 0.6, vein: false }); },
  lf_ginkgo(B, x, y, a, L, b) {
    const col = this.cc.leaf || this.cc.blue, tip = [x + Math.cos(a) * L * 0.4, y + Math.sin(a) * L * 0.4], p = [[x, y]];
    B.stroke([[x, y], tip], col, lw(L));
    for (let i = 0; i <= 12; i++) { const t = a - 0.85 + i / 12 * 1.7, r = L * (0.85 + (i === 6 ? -0.15 : 0)); p.push([x + Math.cos(t) * r, y + Math.sin(t) * r]); }
    B.fill(p.map(q => [tip[0] + (q[0] - x) * 0.7, tip[1] + (q[1] - y) * 0.7]).concat([tip]), col);
  },
  lf_needle(B, x, y, a, L, b) { const col = this.cc.leaf || this.cc.blue; for (let i = -2; i <= 2; i++) { const t = a + i * 0.28; B.stroke([[x, y], [x + Math.cos(t) * L * 0.9, y + Math.sin(t) * L * 0.9]], col, lw(L, 0.04)); } },
  lf_pinetuft(B, x, y, a, L, b) { const col = this.cc.leaf || this.cc.blue; for (let i = 0; i < 9; i++) { const t = a + (i - 4) * 0.2; B.stroke([[x, y], [x + Math.cos(t) * L * 1.1, y + Math.sin(t) * L * 1.1]], col, lw(L, 0.035)); } },
  lf_scale(B, x, y, a, L, b) { const col = this.cc.leaf || this.cc.blue; for (let i = 0; i < 5; i++) { const u = i / 5; this.blade(B, x + Math.cos(a) * L * u, y + Math.sin(a) * L * u, a, L * 0.35, 0, { w: 0.45, pw: 0.6, vein: false, col }); } },
  lf_tiny(B, x, y, a, L, b) { const ca = Math.cos(a), sa = Math.sin(a); for (let i = 0; i < 4; i++) { const q = [x + ca * L * i * 0.25, y + sa * L * i * 0.25]; for (const sd of [-1, 1]) this.blade(B, q[0], q[1], a + sd * 0.9, L * 0.22, 0, { w: 0.4, vein: false }); } },
  lf_fern(B, x, y, a, L, b) {
    const ca = Math.cos(a), sa = Math.sin(a), col = this.cc.leaf || this.cc.blue, n = 7, L2 = L * 1.5;
    B.stroke([[x, y], [x + ca * L2, y + sa * L2]], col, lw(L, 0.025));
    for (let i = 0; i < n; i++) { const u = 0.12 + i / n * 0.85, q = [x + ca * L2 * u, y + sa * L2 * u], k = 1 - u * 0.7; for (const sd of [-1, 1]) this.blade(B, q[0], q[1], a + sd * 1.15, L * 0.38 * k, 0, { w: 0.22, lobes: 4, lobeAmp: 0.3, vein: false }); }
  },
  lf_palmfrond(B, x, y, a, L, b) {
    const ca = Math.cos(a), sa = Math.sin(a), col = this.cc.leaf || this.cc.blue, L2 = L * 1.8, n = 10;
    const pt = u => [x + ca * L2 * u + Math.sin(a) * u * u * L * 0.5, y + sa * L2 * u - Math.cos(a) * u * u * L * 0.5 + u * u * L * 0.4];
    const sp = []; for (let i = 0; i <= 10; i++) sp.push(pt(i / 10)); B.stroke(sp, col, lw(L, 0.03));
    for (let i = 0; i < n; i++) { const u = 0.15 + i / n * 0.8, q = pt(u); for (const sd of [-1, 1]) this.blade(B, q[0], q[1], a + sd * 0.7 + 0.4, L * 0.5 * (1 - u * 0.5), 0, { w: 0.08, vein: false }); }
  },
  lf_monstera(B, x, y, a, L, b) {
    const L2 = L * 1.4, c = [x + Math.cos(a) * L2 * 0.5, y + Math.sin(a) * L2 * 0.5];
    this.blade(B, x, y, a, L2, b, { w: 0.42, pw: 0.6, heart: 1 });
    if (L > 6) for (const sd of [-1, 1]) for (const u of [0.35, 0.55, 0.75]) { const q = [x + Math.cos(a) * L2 * u, y + Math.sin(a) * L2 * u], px = -Math.sin(a) * sd, py = Math.cos(a) * sd; B.stroke([[q[0] + px * L2 * 0.08, q[1] + py * L2 * 0.08], [q[0] + px * L2 * 0.3, q[1] + py * L2 * 0.3]], this.cc.vein, lw(L, 0.05)); }
  }
});
})();
