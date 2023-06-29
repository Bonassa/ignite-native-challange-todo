# Default react native expo manage workflow app

This is my react native expo manage default template, its includes the basic configurations to begin a expo manage workflow app.

## Fonts
Includes the expo fonts, and google inter font.

```bash
  npx expo install expo-font @expo-google-fonts/inter
```

## Prettier and ESLint configuration
Includes the default configuration of <b>prettier</b> and <b>eslint</b> for expo.

```bash
  npm install eslint-config-universe --save-dev

  npm i eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev

  npm install --save-dev eslint-plugin-import
```

The configurations files was <b>.eslintrc.js</b> and <b>.prettierrc</b>

## Path mapping
To mapping the applications paths, was used the <b>npm i babel-plugin-module-resolver</b>.

```bash
  npm install --save-dev babel-plugin-module-resolver
```

Then was modified the <b>babel.config.js</b> and <b>tsconfig.json</b> to work the path mapping.

## Styled components
The styling library was <b>styled-components</b>.

```bash
  npm install styled-components

  npm install --save-dev @types/styled-components
```

This template already have the theme configuration.