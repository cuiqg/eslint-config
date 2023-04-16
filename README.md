# @cuiqg/eslint-config

[![npm](https://img.shields.io/npm/v/@cuiqg/eslint-config?color=%23ff4777&label=)](https://www.npmjs.com/package/@cuiqg/eslint-config)

## Usage

Usage is based on [Sharing configurations](https://eslint.org/docs/latest/extend/shareable-configs) from the ESLint docs.

1. Install package

```bash
npm i -D eslint @cuiqg/eslint-config
```

2. Add the following to `package.json`

```json
{
  "eslintConfig": {
    "extends": "@cuiqg"
  }
}
```

3. Change `package.json` add following to `scripts`
```json
{
  "scripts": {
    "lint" : "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
## Option
Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`
```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
