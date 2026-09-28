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
