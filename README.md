# Type Grow

Écris un mot, il pousse. Une variation sur [Type Garden](https://type-garden.vercel.app) d'Akshat Agarwal : chaque mot reconnu fait pousser son propre motif (une centaine de fleurs et d'arbres dessinés à la main, des animaux qui se baladent sous les lettres, des références pop culture, une soixantaine d'objets dessinés en code), en français, anglais, japonais, chinois et arabe.

- `index.html` : Type Grow
- `classique.html` : la version fidèle à Type Garden
- `verger.html` : la variante arbres fruitiers

`?t=texte` dans l'adresse fait pousser un texte tout seul.

À l'arrivée, « Grow your garden » s'écrit tout seul ; il fane dès qu'on tape. Le menu « motif » fait pousser tout le texte dans un seul dessin (tout en lavande, en rose, en avion…) ; on peut aussi écrire le motif à côté, puis Entrée.

## Vocabulaire

Environ 450 dessins, tous en code. Au-delà du lexique, `mots.js` relie plus de 70 000 noms (français, anglais, japonais, chinois, arabe) au dessin le plus proche grâce à WordNet : « pirogue » fait pousser des bateaux, « ukulélé » des guitares, « astronaute » des fusées. Il est chargé en arrière-plan.

- `dessins.js` : les dessins en format compact (une courte liste de formes chacun)
- `outils/construire_mots.py` : régénère `mots.js` et les noms des dessins (`pip install nltk`, puis les données `wordnet`, `omw-1.4`, `omw-2.0`)
