# @cuiqg/eslint-config

[![npm](https://img.shields.io/npm/v/@cuiqg/eslint-config?color=%23ff4777&label=)](https://www.npmjs.com/package/@cuiqg/eslint-config)

## Usage

Usage is based on [Flat configuration](https://zh-hans.eslint.org/docs/latest/use/configure/configuration-files-new) from the ESLint docs.

```js
import cuiqg from '@cuiqg/eslint-config'

export default [
  ...cuiqg
]
```

## Extension
Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`
```json
{
  "prettier.enable": false,
  "eslint.experimental.useFlatConfig": true,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
