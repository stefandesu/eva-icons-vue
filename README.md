# eva-icons-vue
[![Test and build](https://github.com/stefandesu/eva-icons-vue/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/stefandesu/eva-icons-vue/actions/workflows/test-and-build.yml)
[![GitHub package version](https://img.shields.io/github/package-json/v/stefandesu/eva-icons-vue.svg?label=version)](https://github.com/stefandesu/eva-icons-vue)
[![NPM package name](https://img.shields.io/badge/npm-eva--icons--vue-blue.svg)](https://www.npmjs.com/package/eva-icons-vue)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

> Tree-shakable icons for Vue 3 based on [Eva Icons](https://akveo.github.io/eva-icons/).

Note that this library is currently only intended for internal use. You can use it yourself, but pin your version number because there might be breaking changes at any point!

## Table of Contents <!-- omit in toc -->
- [Development](#development)
- [Using the library](#using-the-library)
  - [Node](#node)
- [Publish](#publish)
- [License](#license)

## Development
```bash
git clone https://github.com/stefandesu/eva-icons-vue.git
cd eva-icons-vue
npm install
npm run dev # for Vite dev server on port 4314
npm run build # for Vite build (provide BASE to change the base path)
```

## Using the library

### Node

1\. Add the library to your Vue project:
```bash
npm install @stefandesu/eva-icons-vue
```

2a. Add all icons globally (in `src/main.js` for your project):
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import * as EvaIcons from "@stefandesu/eva-icons-vue"
app.use(EvaIcons)

app.mount('#app')
```

2b. Add individual icons globally (tree-shakable):
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { EvaIcon, Star, HeartOutline } from "@stefandesu/eva-icons-vue"
EvaIcon.register([Star, HeartOutline])
app.use(EvaIcon)

app.mount('#app')
```

2c. Add icons where needed (e.g. in some SFC, tree-shakable):
```js
import { defineComponent } from "vue"
import { EvaIcon, Star, HeartOutline } from "@stefandesu/eva-icons-vue"
EvaIcon.register([Star, HeartOutline])

export default defineComponent({
  // ...
  components: {
    EvaIcon,
  },
  // ...
})
```

3\. Use the EvaIcon component with the `name` property:

```html
<eva-icon name="star" />
<eva-icon name="heart-outline" />
```

Icons are the same size as the text surrounding it. You can adjust the size separately via the `size` property. You can also adjust the fill color via the `fill` property.

Icon names are lowercased and use kebab-case.

## Publish
Please work on the `dev` branch during development (or better yet, develop in a feature branch and merge into `dev` when ready).

When a new release is ready (i.e. the features are finished, merged into `dev`, and all tests succeed), run the included release script (replace "patch" with "minor" or "major" if necessary):

```bash
npm run release:patch
```

This will:
- Check that we are on `dev`
- Run tests and build to make sure everything works
- Make sure `dev` is up-to-date
- Run `npm version patch` (or "minor"/"major")
- Push changes to `dev`
- Switch to `main`
- Merge changes from `dev`
- Push `main` with tags
- Switch back to `dev`

After running this, GitHub Actions will **automatically publish the new version to npm**. It will also create a new GitHub Release draft. Please **edit and publish the release draft manually**.

## License
MIT Copyright (c) 2018 Akveo.
MIT Copyright (c) 2021 stefandesu
