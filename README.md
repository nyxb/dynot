[![cover][cover-src]][cover-href]
[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] 
[![License][license-src]][license-href]

> 🦖⚡️ Boost your Node.js runtime with TypeScript and ESM support!

## ✨ Features

- 🌊 Smooth TypeScript and ESM syntax integration
- 🔗 Seamless ESM and CommonJS interoperability
- ⚡ Synchronous API as a `require` alternative
- 💪 Super lightweight with zero dependencies
- 🧠 Clever syntax detection to avoid unnecessary transformations
- 💾 CommonJS cache integration
- 🗄️ Filesystem transpile hard cache
- 🏎️ V8 compile cache
- 🔍 Custom resolve alias

## 🛠️ Usage

### 📦 Scripted

```ts
const dynotti = require('dynot')(__filename)

dynot('./path/to/file.ts')
```

You can also pass options as a second argument:

```ts
const dynot = require('dynot')(__filename, { debug: true })
```

### 🖥️ CLI

```bash
dynot index.ts
# or npx dynot index.ts
```

### 📝 Register require hook

```bash
node -r dynot/register index.ts
```

Alternatively, you can register `dynot` as a require hook programmatically:

```ts
const dynot = require('dynot')()

const unregister = dynot.register()
```

## ⚙️ Options

### `debug` 🐞

- Type: Boolean
- Default: `false`
- Environment Variable: `DYNOT_DEBUG`

Enable debug mode to see which files are transpiled

### `cache` 💽

- Type: Boolean | String
- Default: `true`
- Environment Variable: `DYNOT_CACHE`

Toggle transpile cache

If set to `true`, it will use `node_modules/.cache/dynot` (if exists) or `{TMP_DIR}/node-dynot`

### `esmResolve` 🌀

- Type: Boolean | String
- Default: `false`
- Environment Variable: `DYNOT_ESM_RESOLVE`

Activate esm resolution algorithm to support `import` condition.

### `transform` 🔄

- Type: Function
- Default: Babel (lazy loaded)

Specify a transform function. Check [src/babel](./src/babel.ts) for more details.

### `sourceMaps` 🗺️

- Type: Boolean
- Default `false`
- Environment Variable: `DYNOT_SOURCE_MAPS`

Add inline source map to transformed source for improved debugging.

### `interopDefault` 🧩

- Type: Boolean
- Default: `false`

Return the `.default` export of a module at the top-level.

### `alias` 🏷️

- Type: Object
- Default: -
- Environment Variable: `DYNOT_ALIAS`

Define a custom alias map to resolve ids.

### `nativeModules` 🌐

- Type: Array
- Default: ['typescript`]
- Environment Variable: `DYNOT_NATIVE_MODULES`

Specify a list of modules (within `node_modules`) to always use native require for them.

### `transformModules` 🛠️

- Type: Array
- Default: []
- Environment Variable: `DYNOT_TRANSFORM_MODULES`

List modules (within `node_modules`) to transform them regardless of syntax.

## 🌱 Development

🐙 Clone this repository
🔧 Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
📦 Install dependencies using [nyxi](https://github.com/nyxblabs/nyxi) 🧙 Always right package manager
🏃 Run `nyxr dev`
🏃 Run `nyxr dynot ./test/path/to/file.ts`

## 📜 License

[MIT](./LICENSE) - Made with 💞

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/dynot?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/dynot
[npm-downloads-src]: https://img.shields.io/npm/dm/dynot?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/dynot
[bundle-src]: https://img.shields.io/bundlephobia/minzip/dynot?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=dynot
[license-src]: https://img.shields.io/github/license/nyxblabs/dynot.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxblabs/dynot/blob/main/LICENSE

<!-- Cover -->
[cover-src]: https://raw.githubusercontent.com/nyxblabs/dynot/main/.github/assets/cover-github-dynot.png
[cover-href]: https://💻nyxb.ws
