# Journal des Mondes — site du podcast

Site construit avec **Astro** + **Tailwind CSS v4**, pensé pour un hébergement statique (Netlify).

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:4321

## Build de production

```bash
npm run build
npm run preview   # pour vérifier le build localement
```

## Structure

- `src/layouts/BaseLayout.astro` — structure HTML commune (head, Header, Footer)
- `src/components/Header.astro` / `Footer.astro` — à modifier une fois pour changer partout
- `src/consts.ts` — liens de nav, réseaux sociaux, plateformes d'écoute, lien Soutenir, lien Drive Léonia (à remplacer par les vrais liens)
- `src/pages/` — une page par route (index, blog, episodes, leonia, a-propos, contact)
- `src/content.config.ts` — définition des collections de contenu (episodes, blog)
- `src/content/episodes/`, `src/content/blog/` — les fichiers Markdown (gérés par le panel admin une fois en ligne)
- `src/styles/global.css` — palette de couleurs et polices (config Tailwind v4 "CSS-first")
- `public/fonts/` — polices Sacred Bridge (titres) et Jane Austen (script)
- `public/images/` — logo + `uploads/` (images ajoutées depuis le panel admin)
- `public/textures/` — texture parchemin du hero
- `public/admin-jdm-2026/` — panel admin (Decap CMS)

## Activer le panel admin (à faire une fois, après le premier déploiement Netlify)

Le panel vit sur une route non-devinable et n'est jamais indexé (`robots.txt` + `noindex`),
mais il faut activer l'authentification côté Netlify pour qu'il fonctionne :

1. Déployer le site sur Netlify (connecter le dépôt Git).
2. Dans le dashboard Netlify du site : **Site configuration → Identity → Enable Identity**.
3. Toujours dans Identity : **Registration → Invite only** (important : empêche n'importe qui de créer un compte).
4. **Site configuration → Identity → Services → Git Gateway → Enable Git Gateway**
   (c'est ce qui permet au CMS de commiter dans le dépôt sans clé d'API à gérer).
5. Onglet **Identity** du dashboard → **Invite users** → entrer ton email (et celui de toute
   personne autorisée à publier).
6. Tu reçois un email d'invitation → en cliquant sur le lien, tu es redirigé vers le site puis
   automatiquement vers `/admin-jdm-2026/` où tu peux définir ton mot de passe.
7. Une fois connecté, l'admin est accessible à `https://ton-domaine/admin-jdm-2026/`.

Chaque publication/modification depuis le panel crée un commit Git → Netlify relance
automatiquement un build → le site se met à jour, sans jamais toucher au code.

## État actuel

✅ Les 6 pages : Accueil, Blog, Episodes, Léonia, À propos, Contact
✅ Collections de contenu (episodes, blog) — l'accueil et les listings en dépendent dynamiquement
✅ Formulaire de contact branché sur Netlify Forms
✅ Panel admin (Decap CMS) configuré — à activer côté Netlify (voir ci-dessus)
🚧 Visuels réels (logo déjà intégré, mais photos/illustrations à venir — voir `PlaceholderArt.astro`)
🚧 Liens réseaux sociaux, email de contact, lien Soutenir, lien Drive Léonia — tous des placeholders dans `src/consts.ts` à remplacer
