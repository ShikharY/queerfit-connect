# QueerFit Connect

A web application connecting queer people with queer-friendly fitness courses and spaces in Bayreuth. The interface is inspired by Strava's clean, modern design.

## Features

- **Courses Feed**: Browse nearby queer-friendly fitness courses in a modern feed layout with ratings, instructor info, and reviews
- **Interactive Map**: See queer-friendly gyms and fitness studios on an interactive map with course details
- **Inclusive Design**: Shows gender-neutral bathroom availability and inclusive course tags
- **Mobile Responsive**: Fully optimized for mobile and desktop viewing

## Tech Stack

- React with TypeScript
- Vite for build tool
- React Router for navigation
- Leaflet + React-Leaflet for interactive maps
- Golden Hour color scheme (#FFBF00, #CFB53B, #E0B0FF, #CC5500)

## Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173/queerfit-connect/](http://localhost:5173/queerfit-connect/) in your browser

## Deploying to GitHub Pages

### Setup

1. Fork or clone this repository
2. Update the `homepage` in `package.json` with your GitHub username:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/queerfit-connect"
   ```

3. Create a GitHub repository named `queerfit-connect`

### Deploy

Run the deploy command:
```bash
npm run deploy
```

This will:
- Build your site
- Push the `dist` folder to the `gh-pages` branch
- Your site will be live at `https://YOUR-USERNAME.github.io/queerfit-connect`

### GitHub Pages Settings

In your repository settings:
1. Go to **Settings > Pages**
2. Under "Source", select `gh-pages` branch
3. Click Save

Your site should now be live!

## Dummy Data

The app uses dummy data for demonstration. Update course and gym information in:
- `src/Courses.tsx` - Course listings and details
- `src/MapView.tsx` - Gym locations and information

## License

Open source for educational purposes.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
