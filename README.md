# @cuiqg/eslint-config

[![npm](https://img.shields.io/npm/v/@cuiqg/eslint-config?color=%23ff4777&label=)](https://www.npmjs.com/package/@cuiqg/eslint-config)

> [!NOTE]
> Usage is based on [Flat configuration](https://zh-hans.eslint.org/docs/latest/use/configure/configuration-files-new) from the ESLint docs.

## Usage

### Install

```bash
npm i -D eslint @cuiqg/eslint-config
```

### Create config File

#### With ECMAScript modules (recommended)

`package.json`

```json
{
  "type": "module",
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

`eslint.config.json`

```js
import cuiqg from '@cuiqg/eslint-config'

export default cuiqg()
```

#### With CommonJS modules

```js
// eslint.config.js
const cuiqg = require('@cuiqg/eslint-config').default

module.exports = cuiqg()
```

## Extension

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "eslint.experimental.useFlatConfig": true,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```
