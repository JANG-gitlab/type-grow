// Culture : références pop (Star Wars, Seigneur des anneaux, Minecraft…), expressions de plusieurs mots, prénoms
(() => {
const G = Garden.prototype;

G.POP = {
  starwars: { w: 'starwars スターウォーズ 星球大战 حرب_النجوم', fl: ['saber', 'deathstar', 'yoda', 'vader', 'trooper'], stem: '#6E7480' },
  jedi: { w: 'jedi ジェダイ 绝地 sabrelaser lightsaber luke skywalker obiwan kenobi leia chewbacca r2d2 c3po', fl: ['saber'], stem: '#6E7480' },
  sith: { w: 'sith シス 西斯 palpatine dooku', fl: ['saber'], stem: '#5A2A2A', saber: '#FF2A2A' },
  yoda: { w: 'yoda ヨーダ 尤达', fl: ['yoda', 'saber'], stem: '#5E7A3A', saber: '#3CF07A' },
  vador: { w: 'vador vader darthvader ダースベイダー 达斯维达', fl: ['vader', 'saber'], stem: '#3A3A44', saber: '#FF2A2A' },
  trooper: { w: 'stormtrooper stormtroopers', fl: ['trooper'], stem: '#8A8F99' },
  etoiledelamort: { w: 'deathstar', fl: ['deathstar'], stem: '#6E7480' },
  lotr: { w: 'tolkien lotr sda terremilieu middleearth', fl: ['ring', 'sauron', 'gandalf', 'elfleaf', 'hobbitdoor'], stem: '#6B5A3A' },
  anneau: { w: 'gollum smeagol precieux precious unanneau', fl: ['ring'], stem: '#6B5A3A' },
  sauron: { w: 'sauron mordor nazgul barad', fl: ['sauron'], stem: '#3A2A22' },
  gandalf: { w: 'gandalf saroumane saruman ガンダルフ 甘道夫', fl: ['gandalf'], stem: '#7A7F8A' },
  hobbit: { w: 'hobbit hobbits frodon frodo bilbon bilbo shire ホビット 霍比特人', fl: ['hobbitdoor', 'ring'], stem: '#5E8F4A' },
  elfe: { w: 'legolas elfe elfes elf elves lorien galadriel elrond fondcombe rivendell', fl: ['elfleaf'], stem: '#8FA88A' },
  aragorn: { w: 'aragorn gimli boromir gondor rohan', fl: ['elfleaf', 'ring'], stem: '#6B5A3A' },
  minecraft: { w: 'minecraft マインクラフト マイクラ 我的世界', fl: ['creeper', 'pickaxe', 'grassblock', 'mcdiamond'], stem: '#5BC236' },
  creeper: { w: 'creeper creepers クリーパー 苦力怕', fl: ['creeper'], stem: '#5BC236' },
  pioche: { w: 'pioche pickaxe steve enderman notch nether ツルハシ 镐', fl: ['pickaxe', 'mcdiamond'], stem: '#8A5A2B' },
  harrypotter: { w: 'poudlard hogwarts ホグワーツ 霍格沃茨 hermione dumbledore snape hagrid gryffondor gryffindor serpentard slytherin', fl: ['glasses', 'wand', 'snitch'], stem: '#7A1F2B' },
  voldemort: { w: 'voldemort horcruxe horcrux', fl: ['wand'], stem: '#2B3A2B' },
  quidditch: { w: 'quidditch vifdor snitch', fl: ['snitch'], stem: '#C9A227' },
  sorcier: { w: 'sorcier sorciere wizard witch baguettemagique wand 魔法使い 巫师 ساحر', fl: ['wand'], stem: '#5A3A7A' },
  pokemon: { w: 'pokemon ポケモン 宝可梦 بوكيمون dresseur', fl: ['pokeball', 'pikachu'], stem: '#C93A3A' },
  pikachu: { w: 'pikachu ピカチュウ 皮卡丘 بيكاتشو', fl: ['pikachu'], stem: '#C9A227' },
  pokeball: { w: 'pokeball pokeballs モンスターボール 精灵球', fl: ['pokeball'], stem: '#C93A3A' },
  mario: { w: 'mario luigi bowser yoshi マリオ 马力欧 ماريو', fl: ['oneup', 'qblock', 'mariostar'], stem: '#3FA34D' },
  nintendo: { w: 'nintendo 任天堂 نينتندو gameboy', fl: ['qblock', 'oneup', 'mariostar', 'triforce', 'pokeball'], stem: '#C93A3A' },
  zelda: { w: 'zelda hyrule triforce ganon ganondorf ゼルダ 塞尔达', fl: ['triforce', 'mastersword'], stem: '#3E7A5A' }
};
// expressions écrites en plusieurs mots
G.PHR = {
  starwars: 'starwars', laguerredesetoiles: 'starwars', etoiledelamort: 'etoiledelamort', deathstar: 'etoiledelamort', sabrelaser: 'jedi',
  darthvader: 'vador', darkvador: 'vador', lukeskywalker: 'jedi', maitreyoda: 'yoda',
  seigneurdesanneaux: 'lotr', leseigneurdesanneaux: 'lotr', lordoftherings: 'lotr', thelordoftherings: 'lotr', lehobbit: 'hobbit', thehobbit: 'hobbit', unanneau: 'anneau', theonering: 'anneau',
  harrypotter: 'harrypotter', supermario: 'mario', mariobros: 'mario', supermariobros: 'mario', thelegendofzelda: 'zelda', legendofzelda: 'zelda',
  minecraft: 'minecraft', pokemongo: 'pokemon'
};

// ---------- dessins ----------
const SAB = ['#4DA8FF', '#3CF07A', '#B05CFF', '#4DA8FF'];
Object.assign(G, {
  f_saber(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return;
    const col = (this.ck && this.ck.saber) || SAB[Math.floor(e.ph2 / 1.6) % 4], K = this.kit(cx, cy, R, rot * 0.6, 1), L = 1.9 * Math.min(1, s * 1.2) * (0.97 + 0.03 * Math.sin(this._now / 37 + e.ph1));
    B.stroke([K.T(0, 0.3), K.T(0, 0.3 - L)], this.rgba(col, 0.22), K.lw * 16);
    B.stroke([K.T(0, 0.3), K.T(0, 0.3 - L)], this.rgba(col, 0.55), K.lw * 8);
    B.stroke([K.T(0, 0.3), K.T(0, 0.3 - L)], '#FFFFFF', K.lw * 3.4);
    B.fill(K.poly([[-0.09, 0.3], [0.09, 0.3], [0.08, 0.95], [-0.08, 0.95]]), '#B8BEC6');
    for (const y of [0.5, 0.62, 0.74]) B.stroke([K.T(-0.09, y), K.T(0.09, y)], '#1A1A1A', K.lw * 1.2);
    B.fill(K.poly([[-0.12, 0.28], [0.12, 0.28], [0.12, 0.36], [-0.12, 0.36]]), '#5E646E');
  },
  f_deathstar(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2 + this._now / 9000, s);
    B.fill(K.ring(0, 0, 0.85, 0.85, 26), '#8E959E');
    B.stroke([K.T(-0.85, 0.02), K.T(0, 0.06), K.T(0.85, 0.02)], '#5E646E', K.lw * 1.4);
    B.fill(K.ring(0.32, -0.35, 0.22, 0.22, 14), '#6E7480'); B.fill(K.ring(0.32, -0.35, 0.05, 0.05, 6), '#3A3F47');
    for (const [x, y] of [[-0.4, 0.35], [-0.1, 0.55], [0.35, 0.4], [-0.5, -0.3]]) B.stroke([K.T(x, y), K.T(x + 0.18, y)], '#6E7480', K.lw);
  },
  f_yoda(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2 + Math.sin(this._now / 1300 + e.ph1) * 0.05, s), g = '#8DB255';
    for (const sd of [-1, 1]) { B.fill(K.poly([[sd * 0.32, -0.12], [sd * 1.1, -0.35], [sd * 0.38, 0.14]]), g); B.fill(K.poly([[sd * 0.38, -0.06], [sd * 0.9, -0.24], [sd * 0.4, 0.06]]), '#C9A08A'); }
    B.fill(K.ell(0, 0, 0.45, 0.4, 0, 18), g);
    for (const sd of [-1, 1]) { B.fill(K.ell(sd * 0.17, -0.04, 0.1, 0.08, 0, 8), '#1A1A1A'); B.fill(K.ring(sd * 0.17 + 0.03, -0.07, 0.025, 0.025, 4), '#FFFFFF'); }
    B.stroke([K.T(-0.25, -0.24), K.T(0, -0.28), K.T(0.25, -0.24)], '#6E8E3E', K.lw);
    B.stroke([K.T(-0.12, 0.24), K.T(0, 0.27), K.T(0.12, 0.24)], '#5E7A3A', K.lw);
  },
  f_vader(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2, s);
    B.fill(K.poly([[-0.62, 0.42], [-0.48, -0.1], [-0.42, -0.45], [0, -0.68], [0.42, -0.45], [0.48, -0.1], [0.62, 0.42], [0.22, 0.5], [0, 0.34], [-0.22, 0.5]]), '#14141A');
    for (const sd of [-1, 1]) B.fill(K.poly([[sd * 0.06, -0.12], [sd * 0.34, -0.2], [sd * 0.3, 0.02], [sd * 0.08, 0.02]]), '#3A3F47');
    B.fill(K.poly([[-0.14, 0.12], [0.14, 0.12], [0, 0.38]]), '#5E646E');
    for (const x of [-0.06, 0, 0.06]) B.stroke([K.T(x, 0.16), K.T(x * 0.4, 0.3)], '#14141A', K.lw * 0.8);
    B.stroke([K.T(-0.4, -0.42), K.T(0, -0.62), K.T(0.4, -0.42)], '#3A3F47', K.lw);
  },
  f_trooper(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2, s);
    B.fill(K.poly([[-0.5, 0.4], [-0.5, -0.2], [-0.35, -0.55], [0, -0.68], [0.35, -0.55], [0.5, -0.2], [0.5, 0.4], [0.18, 0.5], [-0.18, 0.5]]), '#F4F4F4');
    for (const sd of [-1, 1]) { B.fill(K.poly([[sd * 0.08, -0.12], [sd * 0.36, -0.18], [sd * 0.3, 0.06], [sd * 0.12, 0.08]]), '#1A1A1A'); B.fill(K.ring(sd * 0.5, 0.05, 0.08, 0.12, 8), '#9AA0A6'); }
    B.fill(K.poly([[-0.18, 0.2], [0.18, 0.2], [0.1, 0.4], [-0.1, 0.4]]), '#9AA0A6');
    for (const x of [-0.08, 0, 0.08]) B.stroke([K.T(x, 0.22), K.T(x * 0.7, 0.38)], '#2B2B33', K.lw * 0.8);
    B.stroke([K.T(-0.3, -0.35), K.T(0, -0.42), K.T(0.3, -0.35)], '#9AA0A6', K.lw);
  },
  f_ring(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3, s), glow = 0.5 + 0.5 * Math.sin(this._now / 700 + e.ph1);
    B.stroke(this.closed(K.ell(0, 0, 0.62, 0.36, 0, 24)), this.rgba('#FFB800', 0.15 + glow * 0.2), K.lw * 12);
    B.stroke(this.closed(K.ell(0, 0, 0.62, 0.36, 0, 24)), '#D4A017', K.lw * 4.5);
    B.stroke(K.ell(0, -0.04, 0.6, 0.33, 0, 24).slice(13, 22), '#FFF3B0', K.lw * 1.4);
    if (glow > 0.6) B.stroke(K.ell(0, 0, 0.62, 0.36, 0, 24).slice(2, 10), this.rgba('#FF5A1F', (glow - 0.6) * 2), K.lw * 1.2);
  },
  f_sauron(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R * 1.1, 0, s), t = this._now / 160 + e.ph1;
    for (let i = 0; i < 10; i++) { const g = i / 10 * Math.PI * 2, r = 0.7 + 0.12 * Math.sin(t + i * 2); B.fill(this.petal(K, g, 0.2, r, 0.16, 'point', 0.4), i % 2 ? '#FF5A1F' : '#FFB800'); }
    B.fill(K.ell(0, 0, 0.55, 0.32, 0, 20), '#FFD23F');
    B.fill(K.ell(0, 0, 0.42, 0.24, 0, 18), '#FF7A1A');
    B.fill(K.ell(Math.sin(t / 6) * 0.08, 0, 0.05, 0.22, 0, 10), '#0B0B0B');
  },
  f_gandalf(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2, s);
    B.stroke([K.T(0.45, 0.9), K.T(0.5, -0.2), K.T(0.4, -0.6)], '#7A5230', K.lw * 2.4);
    B.fill(K.ring(0.42, -0.68, 0.1, 0.1, 8), this.rgba('#FFFFFF', 0.6 + 0.4 * Math.sin(this._now / 400)));
    B.fill(K.ell(-0.1, 0.3, 0.55, 0.12, 0, 16), '#8A8F99');
    B.fill(K.poly([[-0.42, 0.3], [0.22, 0.3], [0.02, -0.25], [-0.2, -0.75], [-0.08, -0.3]]), '#8A8F99');
    B.stroke([K.T(-0.38, 0.22), K.T(0.18, 0.22)], '#5E646E', K.lw * 1.4);
  },
  f_elfleaf(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot, s);
    B.fill(this.petal(K, -Math.PI / 2 + 0.3, 0, 1.0, 0.32, 'point', 0, 0.2, 0, 0.45), '#5EA84A');
    B.stroke([K.T(0, 0.45), K.T(0.12, 0), K.T(0.28, -0.45)], '#D9DEE3', K.lw * 1.8);
    for (const sd of [-1, 1]) B.stroke([K.T(0.12, 0.05), K.T(0.12 + sd * 0.18, -0.08)], '#D9DEE3', K.lw);
  },
  f_hobbitdoor(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, 0, s);
    B.fill(K.ring(0, 0, 0.82, 0.82, 26), '#8A5A2B');
    B.fill(K.ring(0, 0, 0.68, 0.68, 24), '#3E7A3A');
    for (let i = 0; i < 6; i++) { const g = i / 6 * Math.PI; B.stroke([K.T(0, 0), K.T(Math.cos(g) * 0.68, -Math.sin(g) * 0.68)], '#2F5E2F', K.lw); }
    B.fill(K.ring(0, 0.02, 0.08, 0.08, 8), '#FFD23F');
    for (let i = 0; i < 7; i++) B.stroke([K.T(-0.8 + i * 0.27, 0.85), K.T(-0.75 + i * 0.27, 0.62)], '#5EA84A', K.lw * 1.4);
  },
  pix(B, K, rows, pal, sz = 0.22) {
    const n = rows.length, m = rows[0].length;
    rows.forEach((row, j) => [...row].forEach((ch, i) => {
      if (!pal[ch]) return;
      const x = (i - m / 2) * sz, y = (j - n / 2) * sz;
      B.fill(K.poly([[x, y], [x + sz, y], [x + sz, y + sz], [x, y + sz]]), pal[ch]);
    }));
  },
  f_creeper(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.15, s);
    this.pix(B, K, ['GgGGGGgG', 'GGGgGGGG', 'GKKGGKKG', 'GKKGgKKG', 'GGgKKGGG', 'GGKKKKGG', 'GgKKKKGg', 'GGKGGKGG'], { G: '#5BC236', g: '#3E9A22', K: '#0B0B0B' }, 0.21);
  },
  f_pickaxe(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2 + Math.sin(this._now / 300 + e.ph1) * 0.15, s);
    this.pix(B, K, ['.dDDDd..', 'dDd..Dd.', '.....BDd', '....B.Dd', '...B...d', '..B.....', '.B......', 'B.......'], { D: '#5FE0D8', d: '#2BA8A0', B: '#8A5A2B' }, 0.22);
  },
  f_mcdiamond(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, 0, s);
    this.pix(B, K, ['..ddd..', '.dDDDd.', 'dDwDDDd', 'dDDDDDd', '.dDDDd.', '..dDd..', '...d...'], { D: '#5FE0D8', d: '#2BA8A0', w: '#FFFFFF' }, 0.22);
  },
  f_grassblock(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, 0, s);
    B.fill(K.poly([[0, -0.75], [0.7, -0.4], [0, -0.05], [-0.7, -0.4]]), '#5BC236');
    B.fill(K.poly([[-0.7, -0.4], [0, -0.05], [0, 0.8], [-0.7, 0.45]]), '#8A5A2B');
    B.fill(K.poly([[0, -0.05], [0.7, -0.4], [0.7, 0.45], [0, 0.8]]), '#6B4422');
    B.fill(K.poly([[-0.7, -0.4], [0, -0.05], [0, 0.12], [-0.7, -0.23]]), '#4FA82E'); B.fill(K.poly([[0, -0.05], [0.7, -0.4], [0.7, -0.23], [0, 0.12]]), '#3E8A22');
  },
  f_glasses(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2, s);
    B.fill(K.poly([[0.05, -0.95], [-0.15, -0.6], [0.02, -0.6], [-0.12, -0.3], [0.2, -0.7], [0.04, -0.7], [0.18, -0.95]]), '#C0392B');
    for (const sd of [-1, 1]) B.stroke(this.closed(K.ring(sd * 0.36, 0, 0.27, 0.27, 18)), '#1A1A1A', K.lw * 2);
    B.stroke([K.T(-0.09, -0.04), K.T(0, -0.1), K.T(0.09, -0.04)], '#1A1A1A', K.lw * 1.6);
  },
  f_wand(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.4 + 0.5, s);
    B.stroke([K.T(0, 0.9), K.T(0, -0.6)], '#5B3A22', K.lw * 2.6);
    B.stroke([K.T(0, 0.9), K.T(0, 0.45)], '#3A2414', K.lw * 3.4);
    for (let i = 0; i < 5; i++) { const t = this._now / 500 + i * 1.3 + e.ph1, d = 0.15 + ((t * 0.3) % 1) * 0.5, x = Math.cos(t * 2) * d * 0.5, y = -0.65 - d; B.fill(K.ring(x, y, 0.05 * (1 - (d - 0.15) / 0.5), 0.05 * (1 - (d - 0.15) / 0.5), 5), '#FFF3B0'); }
  },
  f_snitch(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const t = this._now / 1000, K = this.kit(cx + Math.sin(t * 2.3 + e.ph1) * R * 0.3, cy + Math.cos(t * 3.1 + e.ph1) * R * 0.2, R, 0, s), f = Math.abs(Math.sin(t * 30));
    for (const sd of [-1, 1]) B.fill(this.petal(K, sd > 0 ? -0.3 : Math.PI + 0.3, 0.15, 0.85, 0.22 * (0.4 + f), 'round', 0), '#F4F4EC');
    B.fill(K.ring(0, 0, 0.25, 0.25, 14), '#E6B800'); B.stroke([K.T(-0.2, 0), K.T(0.2, 0)], '#B8860B', K.lw);
  },
  f_pokeball(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const wob = Math.sin(this._now / 120) * 0.25 * (Math.sin(this._now / 1500 + e.ph1) > 0.6 ? 1 : 0), K = this.kit(cx, cy, R, wob, s);
    const top = [], bot = []; for (let i = 0; i <= 14; i++) { const g = Math.PI * i / 14; top.push(K.T(-Math.cos(g) * 0.8, -Math.sin(g) * 0.8)); bot.push(K.T(Math.cos(g) * 0.8, Math.sin(g) * 0.8)); }
    B.fill(top, '#E5353A'); B.fill(bot, '#F4F4F4');
    B.stroke([K.T(-0.8, 0), K.T(0.8, 0)], '#1A1A1A', K.lw * 2.6);
    B.fill(K.ring(0, 0, 0.22, 0.22, 12), '#1A1A1A'); B.fill(K.ring(0, 0, 0.13, 0.13, 10), '#F4F4F4');
  },
  f_pikachu(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.15, s), y = '#FFD93B';
    for (const sd of [-1, 1]) { B.fill(K.ell(sd * 0.42, -0.62, 0.13, 0.42, sd * 0.45, 10), y); B.fill(K.ell(sd * 0.56, -0.92, 0.08, 0.15, sd * 0.45, 8), '#1A1A1A'); }
    B.fill(K.ell(0, 0, 0.62, 0.5, 0, 20), y);
    for (const sd of [-1, 1]) { B.fill(K.ring(sd * 0.24, -0.08, 0.08, 0.08, 8), '#1A1A1A'); B.fill(K.ring(sd * 0.24 + 0.03, -0.11, 0.03, 0.03, 4), '#FFFFFF'); B.fill(K.ring(sd * 0.44, 0.15, 0.11, 0.1, 8), '#E5353A'); }
    B.fill(K.ring(0, 0.03, 0.025, 0.02, 4), '#1A1A1A');
    B.stroke([K.T(-0.1, 0.13), K.T(-0.05, 0.18), K.T(0, 0.13), K.T(0.05, 0.18), K.T(0.1, 0.13)], '#1A1A1A', K.lw);
  },
  f_oneup(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.2, s), cap = [];
    B.fill(K.ell(0, 0.3, 0.42, 0.38, 0, 14), '#F7E0B5');
    for (let i = 0; i <= 16; i++) { const g = Math.PI * i / 16; cap.push(K.T(Math.cos(g) * 0.85, 0.15 - Math.sin(g) * 0.8)); }
    B.fill(cap, Math.floor(e.ph2) % 2 ? '#3FA34D' : '#E5353A');
    for (const [x, y, r] of [[0, -0.42, 0.2], [-0.55, -0.05, 0.14], [0.55, -0.05, 0.14]]) B.fill(K.ring(x, y, r, r, 10), '#FFFFFF');
    for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.13, 0.3, 0.05, 0.11, 0, 6), '#1A1A1A');
  },
  f_qblock(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const hop = Math.max(0, Math.sin(this._now / 300 + e.ph1)) ** 8 * 0.25, K = this.kit(cx, cy - hop * R, R, 0, s);
    B.fill(K.poly([[-0.75, -0.75], [0.75, -0.75], [0.75, 0.75], [-0.75, 0.75]]), '#C98A1A');
    B.fill(K.poly([[-0.65, -0.65], [0.65, -0.65], [0.65, 0.65], [-0.65, 0.65]]), '#F2B33D');
    for (const [x, y] of [[-0.52, -0.52], [0.52, -0.52], [-0.52, 0.52], [0.52, 0.52]]) B.fill(K.ring(x, y, 0.05, 0.05, 4), '#8A5A10');
    B.stroke([K.T(-0.2, -0.25), K.T(-0.12, -0.42), K.T(0.12, -0.42), K.T(0.2, -0.25), K.T(0, -0.05), K.T(0, 0.12)], '#FFF3E0', K.lw * 3);
    B.fill(K.ring(0, 0.38, 0.07, 0.07, 6), '#FFF3E0');
  },
  f_mariostar(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, Math.sin(this._now / 200 + e.ph1) * 0.15, s), p = [];
    for (let i = 0; i < 10; i++) { const g = -Math.PI / 2 + i / 10 * Math.PI * 2, r = i % 2 ? 0.45 : 0.95; p.push([Math.cos(g) * r, Math.sin(g) * r]); }
    B.fill(K.poly(p), '#FFD23F');
    for (const sd of [-1, 1]) B.fill(K.ell(sd * 0.13, -0.05, 0.05, 0.13, 0, 6), '#1A1A1A');
  },
  f_triforce(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.1, s), g = '#E6B800', h = 0.8;
    for (const [x, y] of [[0, -h / 2], [-0.46, h / 2], [0.46, h / 2]]) B.fill(K.poly([[x, y - h / 2], [x + 0.46, y + h / 2], [x - 0.46, y + h / 2]]), g);
  },
  f_mastersword(B, cx, cy, R, rot, e, a) {
    const s = this.sp(a); if (s <= 0.001) return; const K = this.kit(cx, cy, R, rot * 0.3, s);
    B.fill(K.poly([[-0.08, 0.25], [0.08, 0.25], [0.08, -1.1], [0, -1.3], [-0.08, -1.1]]), '#D9DEE3');
    B.fill(K.poly([[-0.4, 0.3], [-0.12, 0.22], [0.12, 0.22], [0.4, 0.3], [0.12, 0.38], [-0.12, 0.38]]), '#3F5BB8');
    B.fill(K.poly([[-0.06, 0.38], [0.06, 0.38], [0.06, 0.8], [-0.06, 0.8]]), '#5E3FA8'); B.fill(K.ring(0, 0.86, 0.08, 0.08, 6), '#3F5BB8');
  }
});

// ---------- prénoms ----------
G.NAMES = {
  f: 'marie anne julie sophie camille lea emma chloe manon sarah laura lucie clara alice ines jade louise lina zoe juliette eva anna mathilde pauline marine charlotte margaux oceane lola jeanne elise nina agathe adele apolline romane louna mila rose ambre lena margot capucine victoire valentine salome heloise gabrielle constance celine nathalie isabelle sandrine stephanie valerie christine catherine sylvie veronique patricia monique nicole francoise martine brigitte chantal elodie audrey aurelie emilie melanie caroline virginie amandine claire helene emeline justine fanny marion morgane coralie noemie maeva yasmine fatima aicha myriam samira nadia leila sofia amira olivia mia ava emily isabella sophia charlotte amelia harper abigail ella elizabeth scarlett grace chloe victoria madison lily hannah jessica ashley jennifer amanda megan rachel rebecca nicole kate kelly lauren taylor sakura yuki hana aiko mei yui mao xiu li na lan ying',
  m: 'jean pierre paul jacques louis lucas hugo gabriel arthur leo raphael jules adam mael noah ethan nathan tom theo enzo mathis axel antoine thomas nicolas julien maxime alexandre baptiste clement romain quentin kevin florian benjamin guillaume vincent sebastien olivier francois philippe michel alain bernard patrick christophe stephane laurent frederic eric david daniel marc thierry didier pascal bruno gilles yves andre rene robert henri charles victor martin simon samuel valentin lucien emile marius sacha timeo nolan tiago liam aaron ibrahim mohamed mohammed ahmed youssef karim mehdi bilal rayan amine omar ali hamza james john robert michael william david richard joseph thomas christopher matthew anthony mark steven andrew joshua kevin brian george edward ryan jacob tyler dylan logan oliver harry jack charlie oscar henry alfie freddie hiroshi takeshi kenji haruto yuto ren sota wei jun hao ming chen jian'
};
G.JOKES = {
  f: ["c'est ta mère ?", "c'est ta sœur, avoue.", 'ton crush, non ?', 'who is this girl?', 'elle sait que tu écris son prénom ?', 'je savais que tu allais écrire {n}.'],
  m: ["c'est ton père ?", 'who is this guy?', "you're not that guy.", "c'est ton ex, avoue.", 'il sait que tu écris son prénom ?', 'je savais que tu allais écrire {n}.'],
  x: ['who is this?', "c'est quelqu'un de ta famille ?", 'je savais que tu allais écrire {n}.', "{n} ? on s'est déjà vus quelque part."]
};
})();
