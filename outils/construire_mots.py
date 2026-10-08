#!/usr/bin/env python3
"""Relie un grand vocabulaire (fr, en, ja, zh, ar) aux dessins du jardin, hors ligne.

Chaque dessin est accroché à un ou plusieurs sens de WordNet ; un nom prend le dessin
accroché le plus proche en remontant l'arbre des sens (« pirogue » → bateau → véhicule).
Produit mots.js (chargé en arrière-plan par la page) et les noms des dessins de dessins.js.

  pip install nltk
  python3 -c "import nltk; nltk.download('wordnet'); nltk.download('omw-1.4'); nltk.download('omw-2.0')"
  python3 outils/construire_mots.py
"""
import base64, json, os, re, sys, unicodedata
from collections import deque
from nltk.corpus import wordnet as wn

ICI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = {'eng': 'en', 'fra': 'fr', 'jpn': 'ja', 'cmn': 'zh', 'arb': 'ar'}

# ---------- ancres : catégorie = sens WordNet (nom.n.NN) ou mots (premier sens nominal) ----------
ANCRES = """
pomme = apple.n.01 crab_apple.n.03
cerise = cherry.n.03
orange = orange.n.01 citrus.n.01 mandarin.n.05 grapefruit.n.02
citron = lemon.n.01 lime.n.06
fruit = edible_fruit.n.01 berry.n.01 drupe.n.01
fraise = strawberry.n.01
poire = pear.n.01 quince.n.03
peche = peach.n.03 nectarine.n.02
ananas = pineapple.n.02
pasteque = watermelon.n.02
kiwi = kiwi.n.03
prune = plum.n.02
myrtille = blueberry.n.02 cranberry.n.02
framboise = raspberry.n.02 blackberry.n.01
mangue = mango.n.02 papaya.n.02
abricot = apricot.n.02
grenade = pomegranate.n.02
melon = melon.n.01
avocat = avocado.n.01
banane = banana.n.02
raisin = grape.n.01 raisin.n.01
legume = vegetable.n.01 root_vegetable.n.01 tomato.n.01 carrot.n.03
pommedeterre = potato.n.01
oignon = onion.n.03 leek.n.02 shallot.n.03
ail = garlic.n.02
poivron = sweet_pepper.n.02
piment = hot_pepper.n.02
brocoli = broccoli.n.02 cauliflower.n.02
chou = cabbage.n.01 brussels_sprouts.n.01
salade = lettuce.n.03 salad_green.n.01 spinach.n.02 salad.n.01
concombre = cucumber.n.02 zucchini.n.02
aubergine = eggplant.n.01
mais = corn.n.03 corn.n.01
petitpois = pea.n.01 legume.n.01 bean.n.01
radis = radish.n.01 beet.n.02 turnip.n.02
citrouille = pumpkin.n.02 squash.n.02
champignon = mushroom.n.05 fungus.n.01 mushroom.n.02
cereale = cereal.n.01 grain.n.02 wheat.n.02 rice.n.01 oat.n.01
fleur = flower.n.01 flower.n.02
arbre = tree.n.01 woody_plant.n.01
palmier = palm.n.03
cactus = cactus.n.01 succulent.n.01
herbe = grass.n.01 gramineous_plant.n.01
plante = plant.n.02 herb.n.01 vine.n.01 shrub.n.01
feuille = leaf.n.01
branche = branch.n.02 twig.n.01

chat = cat.n.01 domestic_cat.n.01
lion = lion.n.01 big_cat.n.01
tigre = tiger.n.02 leopard.n.02 jaguar.n.01
chien = dog.n.01 canine.n.02
loup = wolf.n.01
renard = fox.n.01
cheval = equine.n.01 horse.n.01
zebre = zebra.n.01
vache = bovine.n.01 cattle.n.01
cochon = swine.n.01
mouton = sheep.n.01 goat.n.01
cerf = deer.n.01 antelope.n.01
ours = bear.n.01
lapin = leporid.n.01 rodent.n.01
elephant = proboscidean.n.01
baleine = cetacean.n.01
crabe = crustacean.n.01 crab.n.01
tortue = chelonian.n.01
girafe = giraffe.n.01
dinosaure = dinosaur.n.01
licorne = unicorn.n.01
dragon = dragon.n.01
chameau = camel.n.01
hibou = owl.n.01
pingouin = penguin.n.01
poulpe = cephalopod.n.01
meduse = jellyfish.n.02
oiseau = bird.n.01
insecte = insect.n.01 arachnid.n.01 worm.n.01
papillon = lepidopterous_insect.n.01
marin = fish.n.01 aquatic_mammal.n.01 mollusk.n.01
reptile = reptile.n.01 amphibian.n.03
domestique = domestic_animal.n.01
sauvage = animal.n.01

corps = body_part.n.01 organ.n.01
oeil = eye.n.01
nez = nose.n.01
bouche = mouth.n.02 lip.n.01
oreille = ear.n.01
pied = foot.n.01 leg.n.01
main = hand.n.01 finger.n.01
cheveux = hair.n.01 beard.n.01
os = bone.n.01
dent = tooth.n.01
coeur = heart.n.02
cerveau = brain.n.01
sang = blood.n.01
crane = skull.n.01

feu = fire.n.01 flame.n.01
eau = body_of_water.n.01 water.n.01
pluie = rain.n.01 precipitation.n.03
neige = snow.n.02 ice.n.01
orage = storm.n.01 lightning.n.01
nuage = cloud.n.02 fog.n.02 weather.n.01
lune = moon.n.01
etoile = star.n.01 star.n.03 constellation.n.02
tournesol = sun.n.01
planete = planet.n.01 celestial_body.n.01
comete = comet.n.01 meteor.n.01
montagne = mountain.n.01 natural_elevation.n.01
terre = rock.n.01 stone.n.02 soil.n.02 mineral.n.01
vague = wave.n.01
ile = island.n.01
volcan = volcano.n.02
etoiledemer = starfish.n.01 echinoderm.n.01

amour = love.n.01
joie = joy.n.01 happiness.n.01
tristesse = sadness.n.01
colere = anger.n.01
peur = fear.n.01

argent = money.n.01 coin.n.01 currency.n.01 wallet.n.01
temps = timepiece.n.01 clock.n.01 calendar.n.03 time_unit.n.01
clef = key.n.01
maison = house.n.01 dwelling.n.01 building.n.01 housing.n.01 town.n.01 village.n.02 family.n.01
chateau = castle.n.02 palace.n.01 fortress.n.01
phare = beacon.n.03
igloo = igloo.n.01
cabane = hut.n.01 shack.n.01 cabin.n.02
pont = bridge.n.01
moulin = windmill.n.01 mill.n.04
gratteciel = skyscraper.n.01 tower.n.01 city.n.01
usine = factory.n.01 plant.n.01
eglise = place_of_worship.n.01 church.n.02
tente = tent.n.01
niche = kennel.n.01

transport = vehicle.n.01 wheeled_vehicle.n.01 wheel.n.01
voiture = car.n.01 motor_vehicle.n.01 driver.n.01
camion = truck.n.01 van.n.05
bus = bus.n.01
train = train.n.01 locomotive.n.01 railcar.n.01
avion = airplane.n.01 aircraft.n.01 pilot.n.01
helicoptere = helicopter.n.01
montgolfiere = hot-air_balloon.n.01 airship.n.01
fusee = rocket.n.01 spacecraft.n.01 astronaut.n.01
ovni = flying_saucer.n.01
bateau = vessel.n.02 boat.n.01 ship.n.01
sousmarin = submarine.n.01
velo = bicycle.n.01 wheeled_vehicle.n.01
moto = motorcycle.n.01 motor_scooter.n.01
skateboard = skateboard.n.01 scooter.n.02
tracteur = tractor.n.01 farmer.n.01
ambulance = ambulance.n.01
pompiers = fire_engine.n.01 fireman.n.04

tech = machine.n.01 device.n.01 electronic_equipment.n.01
ordi = computer.n.01 web_site.n.01
telephone = telephone.n.01 cellular_telephone.n.01
photo = camera.n.01 photograph.n.01
tele = television_receiver.n.01 movie.n.01 display.n.06 actor.n.01
radio = radio_receiver.n.01
hautparleur = loudspeaker.n.01
micro = microphone.n.01
calculatrice = calculator.n.02
clavier = keyboard.n.01
pile = battery.n.02
lampe = lamp.n.01 lamp.n.02
ampoule = light_bulb.n.01
lampetorche = flashlight.n.01
bougie = candle.n.01
robot = robot.n.01 automaton.n.02

musique = musical_instrument.n.01 music.n.01 song.n.01 musician.n.01 dance.n.01 musician.n.02
guitare = guitar.n.01 stringed_instrument.n.01
violon = violin.n.01 bowed_stringed_instrument.n.01
piano = piano.n.01 keyboard_instrument.n.01
tambour = drum.n.01 percussion_instrument.n.01
trompette = trumpet.n.01 brass.n.02
flute = flute.n.01 woodwind.n.01

fauteuil = seat.n.03 chair.n.01 sofa.n.01 furniture.n.01
table = table.n.02 desk.n.01
lit = bed.n.01 pillow.n.01 bedclothes.n.01
miroir = mirror.n.01
tapis = rug.n.01 carpet.n.01
coussin = cushion.n.03
fenetre = window.n.01
porte = door.n.01 gate.n.01
frigo = refrigerator.n.01 home_appliance.n.01
baignoire = bathtub.n.01
savon = soap.n.01
serviette = towel.n.01
brosseadents = toothbrush.n.01
peigne = comb.n.01

bouteille = bottle.n.01 flask.n.01 milk.n.01
verre = glass.n.02 drinking_vessel.n.01 beverage.n.01 alcohol.n.01 juice.n.01
tasse = cup.n.01 mug.n.04 coffee.n.01 tea.n.01 teapot.n.01
theiere = teapot.n.01 kettle.n.01
bol = bowl.n.03 soup.n.01 dish.n.02
vase = vase.n.01 jar.n.01 urn.n.01
boite = box.n.01 container.n.01 package.n.02
panier = basket.n.01
seau = bucket.n.01
sac = bag.n.01 backpack.n.01 handbag.n.01
valise = bag.n.06 suitcase.n.01 luggage.n.01
cadeau = gift.n.01 present.n.02
aquarium = aquarium.n.01
cage = cage.n.01
casserole = pot.n.01 saucepan.n.01 cooking_utensil.n.01
poele = pan.n.01 frying_pan.n.01
assiette = plate.n.04 dish.n.01 tableware.n.01
cuillere = spoon.n.01 ladle.n.01
fourchette = fork.n.01 cutlery.n.02
couteau = knife.n.01 knife.n.02

vetement = clothing.n.01 garment.n.01 shirt.n.01 sweater.n.01
robe = dress.n.01 gown.n.01
pantalon = trouser.n.01 jean.n.01
jupe = skirt.n.02
manteau = coat.n.01 jacket.n.01
chaussure = footwear.n.02 shoe.n.01 sandal.n.01
botte = boot.n.01
chaussette = sock.n.01 stocking.n.01
gant = glove.n.02 mitten.n.01
echarpe = scarf.n.01 shawl.n.01
chapeau = hat.n.01 headdress.n.01
casquette = cap.n.01 baseball_cap.n.01
bonnet = stocking_cap.n.01 beret.n.01
lunettes = spectacles.n.01 goggles.n.01 sunglasses.n.01
bague = ring.n.08 jewelry.n.01 gem.n.02
collier = necklace.n.01 chain.n.03
bouton = button.n.01
pelote = yarn.n.01 thread.n.01 wool.n.01 fabric.n.01
couronne = crown.n.04 tiara.n.01 sovereign.n.01
masque = mask.n.01 mask.n.04

marteau = hammer.n.02 tool.n.01 hand_tool.n.01 mallet.n.03
scie = saw.n.02
tournevis = screwdriver.n.01
vis = screw.n.04 bolt.n.06
clou = nail.n.02
pelle = shovel.n.01 spade.n.01 trowel.n.01
rateau = rake.n.03 hoe.n.01
arrosoir = watering_can.n.01
brouette = wheelbarrow.n.01
potdefleur = flowerpot.n.01
nichoir = birdhouse.n.01
echelle = ladder.n.01 stairs.n.01 staircase.n.01
aimant = magnet.n.01
loupe = magnifier.n.01 hand_glass.n.01 lens.n.01 scientist.n.01 detective.n.01
telescope = telescope.n.01 microscope.n.01 binoculars.n.01
boussole = compass.n.01
cadenas = padlock.n.01 lock.n.01
parapluie = umbrella.n.01 parasol.n.01
cloche = bell.n.01
ancre = anchor.n.01 sailor.n.01
casque = earphone.n.01 headset.n.01
sablier = hourglass.n.01 sandglass.n.01
globe = globe.n.03
repere = map.n.01 atlas.n.02
pilule = pill.n.02 tablet.n.03 medicine.n.02 drug.n.01 doctor.n.01 nurse.n.01 health_professional.n.01

epee = sword.n.01 weapon.n.01 knife.n.02 dagger.n.01
bouclier = shield.n.02 armor.n.01 soldier.n.01 warrior.n.01 knight.n.02
fleche = arrow.n.01 arrow.n.02 bow.n.04
cible = dartboard.n.01 bull's_eye.n.01

livre = book.n.01 book.n.02 publication.n.01 notebook.n.01 teacher.n.01 student.n.01 writer.n.01
papier = paper.n.01 document.n.01 sheet.n.02 newspaper.n.01 poster.n.01
lettre = letter.n.01 envelope.n.01 mail.n.01 postcard.n.01
timbre = postage.n.02
cadre = picture.n.01 painting.n.01 picture_frame.n.01 portrait.n.01 painter.n.01
crayon = pencil.n.01 pen.n.01 writing_implement.n.01 crayon.n.01 chalk.n.04
pinceau = paintbrush.n.01 paint.n.01 brush.n.02
gomme = eraser.n.01
regle = rule.n.12
trombone = paper_clip.n.01
punaise = thumbtack.n.01 pin.n.09
ciseaux = scissors.n.01 shears.n.01

sport = ball.n.01 sports_equipment.n.01 football.n.02 basketball.n.02 sport.n.01 athlete.n.01
raquette = racket.n.04
ski = ski.n.01
patin = skate.n.01 ice_skate.n.01 roller_skate.n.01
cervolant = kite.n.03
yoyo = yo-yo.n.01
toupie = top.n.08
poupee = doll.n.01 puppet.n.01 baby.n.01
ourson = teddy.n.01 plaything.n.01
cartes = playing_card.n.01 card.n.01
pion = chessman.n.01 pawn.n.01 board_game.n.01
de = dice.n.01 domino.n.01
puzzle = jigsaw_puzzle.n.01 puzzle.n.01
ballon = balloon.n.01 balloon.n.02
haltere = dumbbell.n.01 barbell.n.01
sifflet = whistle.n.03 policeman.n.01 referee.n.01
trophee = trophy.n.01 medal.n.01 award.n.02 prize.n.01
drapeau = flag.n.01 banner.n.01 country.n.02 state.n.04 nation.n.02

nourriture = food.n.01 food.n.02 meal.n.01 dessert.n.01 cake.n.03 cook.n.01
pain = bread.n.01 baked_goods.n.01 bun.n.01 toast.n.01
croissant = croissant.n.01
gaufre = waffle.n.01
crepe = pancake.n.01 crape.n.01
donut = doughnut.n.02 pastry.n.01
tarte = pie.n.01 tart.n.02 quiche.n.01
biscuit = cookie.n.01 cracker.n.01
bonbon = candy.n.01 sweet.n.03 lollipop.n.02
chocolat = chocolate.n.02 chocolate.n.01
glace = ice_cream.n.01 frozen_dessert.n.01
fromage = cheese.n.01
beurre = butter.n.01 margarine.n.01
yaourt = yogurt.n.01
oeuf = egg.n.02 egg.n.01
miel = honey.n.01 syrup.n.01
confiture = jam.n.01 spread.n.05
sel = salt.n.02 spice.n.02 sugar.n.01 condiment.n.01
frites = french_fries.n.01
hotdog = hotdog.n.02
sandwich = sandwich.n.01
burger = hamburger.n.01
pizza = pizza.n.01
sushi = sushi.n.01
nouilles = noodle.n.01 pasta.n.02
riz = rice.n.01 rice.n.02
saucisse = sausage.n.01
poulet = meat.n.01 poultry.n.02
crevette = shrimp.n.03 seafood.n.01
cacahuete = peanut.n.04 nut.n.01 edible_nut.n.01
fantome = ghost.n.01 spirit.n.04 monster.n.01
personne = person.n.01 people.n.01
"""

# sens injurieux : jamais reliés à un dessin
TOUT = True  # WordNet relit aussi les mots du lexique ; la page choisit
INSULTE = re.compile(r'offensive|derogatory|disparaging|slur|obscene|vulgar', re.I)

# ---------- normalisation : la même que norm() dans index.html ----------
def norm(w):
    w = w.lower().replace('œ', 'oe').replace('æ', 'ae')
    w = unicodedata.normalize('NFKC', w)
    w = re.sub('[ً-ٟـ]', '', w)
    w = re.sub('[أإآٱ]', 'ا', w).replace('ى', 'ي')
    w = ''.join(chr(ord(c) - 0x60) if 'ァ' <= c <= 'ヶ' else c for c in w)
    if all(ord(c) <= 0x24F for c in w):
        w = ''.join(c for c in unicodedata.normalize('NFD', w) if not unicodedata.combining(c))
    return ''.join(c for c in w if unicodedata.category(c)[0] in 'LN')


def ids(path, pat):
    return set(re.findall(pat, open(os.path.join(ICI, path), encoding='utf-8').read(), re.M))


def main():
    # catégories qui existent vraiment côté page
    cats = ids('index.html', r"\b(\w+): [CA]\(") | ids('objets.js', r"^  (\w+): \{ (?:fl|to):") \
        | ids('flore.js', r"^  (\w+): \{ w:") | ids('dessins.js', r"^  (\w+): \['#")
    cats = {c if isinstance(c, str) else c[0] for c in cats}
    ancre, manque = {}, []
    for ligne in ANCRES.strip().splitlines():
        if not ligne.strip():
            continue
        cat, _, sens = ligne.partition('=')
        cat = cat.strip()
        if cat not in cats:
            sys.exit(f'catégorie inconnue côté page : {cat}')
        for nom in sens.split():
            try:
                s = wn.synset(nom)
            except Exception:
                manque.append(nom); continue
            ancre.setdefault(s, cat)
    # chaque espèce de la flore s'accroche par ses noms anglais, parmi les plantes
    plante = wn.synset('plant.n.02')
    flore = open(os.path.join(ICI, 'flore.js'), encoding='utf-8').read()
    for sp, mots in re.findall(r"^  (\w+): \{ w: '([^']*)'", flore, re.M):
        for m in mots.split():
            if not re.fullmatch('[a-z]+', m):
                continue
            for s in wn.synsets(m, 'n'):
                if s not in ancre and plante in s.closure(lambda x: x.hypernyms()):
                    ancre[s] = sp; break
            else:
                continue
            break
    if manque:
        print('sens introuvables :', ' '.join(manque))
    print(len(ancre), 'sens accrochés à', len(set(ancre.values())), 'dessins')

    # le dessin d'un sens : l'ancre la plus proche en remontant l'arbre
    memo = {}
    def dessin(s):
        if s in memo:
            return memo[s]
        vu, file, res = {s}, deque([(s, 0)]), None
        while file:
            x, d = file.popleft()
            if x in ancre:
                res = ancre[x]; break
            for h in x.hypernyms() + x.instance_hypernyms():
                if h not in vu:
                    vu.add(h); file.append((h, d + 1))
        memo[s] = res
        return res

    # mots déjà connus de la page (lexique) et mots écartés
    lex = open(os.path.join(ICI, 'lexique.js'), encoding='utf-8').read()
    L = json.loads(lex[lex.index('=') + 1:].strip().rstrip(';'))
    # le lexique garde la main quand il donne un dessin précis ; ses familles vagues laissent passer WordNet
    vagues = {'objet', 'tech', 'maison', 'transport', 'sport', 'nourriture', 'musique', 'temps', 'clef', 'argent', 'corps', 'terre', 'plante', 'sauvage', 'domestique', 'nuage', 'eau', 'joie'}
    precis = {w for lg in L['w'].values() for c, t in lg.items() if c not in vagues for w in t.split()}
    connus = set() if TOUT else {w for lg in L["w"].values() for c, s in lg.items() if c not in vagues for w in s.split()}
    connus |= {w for c, s in L.get('top', {}).items() if c not in vagues for w in s.split()}
    try:
        bad = json.loads(base64.b64decode(L['bad']).decode())
        ecartes = {norm(w) for w in bad.get('g', []) + bad.get('h', [])}
    except Exception:
        ecartes = set()

    # noms des nouveaux dessins (dessins.js) : les noms de leurs ancres dans les 5 langues
    nouveaux = sorted(ids('dessins.js', r"^  (\w+): \['#"))
    noms = {}
    for d in nouveaux:
        ws = [d]
        for s, c in ancre.items():
            if c != d:
                continue
            for lg in LANGS:
                ws += [l.name() for l in s.lemmas(lang=lg)]
        out = []
        for w in ws:
            if '_' in w or ' ' in w:
                continue
            n = norm(w)
            if len(n) >= 2 and n not in out and n not in ecartes:
                out.append(n)
        noms[d] = ' '.join(out)

    # tout le vocabulaire : chaque nom prend le dessin de son premier sens accroché (parmi ses deux premiers)
    fall, total = {}, 0
    for lg in LANGS:
        for lemme in wn.all_lemma_names('n', lang=lg):
            if '_' in lemme or ' ' in lemme or '-' in lemme:
                continue
            w = norm(lemme)
            if len(w) < 2 or w in fall or w in connus or w in ecartes or w.isdigit():
                continue
            total += 1
            ss = wn.synsets(lemme, 'n', lang=lg)
            # l'anglais range ses sens du plus courant au plus rare ; les autres langues non :
            # on les classe par la fréquence de leurs équivalents anglais
            if lg != 'eng':
                ss = sorted(ss, key=lambda s: -sum(l.count() for l in s.lemmas()))
            c = None
            for s in ss[:2]:
                if INSULTE.search(s.definition()):
                    break
                c = dessin(s)
                if c:
                    break
            if not c:
                continue
            # le lexique a déjà un dessin précis : WordNet ne le remplace que sur un sens bien attesté,
            # ou quand la plupart des sens du mot mènent au même dessin
            if w in precis and sum(l.count() for l in ss[0].lemmas()) < 5 and sum(dessin(x) == c for x in ss) * 2 <= len(ss):
                continue
            fall[w] = c
    print(total, 'noms lus,', len(fall), 'reliés à un dessin')

    par = {}
    for w, c in sorted(fall.items()):
        par.setdefault(c, []).append(w)
    with open(os.path.join(ICI, 'mots.js'), 'w', encoding='utf-8') as f:
        f.write('// Généré par outils/construire_mots.py : chaque nom relié au dessin le plus proche (WordNet), par dessin\n')
        f.write('window.MOTS = ' + json.dumps({c: ' '.join(ws) for c, ws in sorted(par.items())}, ensure_ascii=False, separators=(',', ':')) + ';\n')

    p = os.path.join(ICI, 'dessins.js')
    src = open(p, encoding='utf-8').read()
    bloc = 'G.DRAWN = ' + json.dumps(noms, ensure_ascii=False, indent=0).replace('\n', '\n  ').replace('\n  }', '\n}') + ';'
    src = re.sub(r'G\.DRAWN = (?:/\*NOMS\*/\{\}|\{[\s\S]*?\n\});', lambda m: bloc, src)
    open(p, 'w', encoding='utf-8').write(src)
    print('mots.js :', os.path.getsize(os.path.join(ICI, 'mots.js')) // 1024, 'Ko')


if __name__ == '__main__':
    main()
