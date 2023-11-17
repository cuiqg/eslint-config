# @cuiqg/eslint-config

[![npm](https://img.shields.io/npm/v/@cuiqg/eslint-config?color=%23ff4777&label=)](https://www.npmjs.com/package/@cuiqg/eslint-config)

> [!IMPORTANT]
> 
> 代码和想法几乎全部来源于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) :pray:

## 使用

```bash
npm i -D eslint @cuiqg/eslint-config
```
修改 `package.json` 文件

```diff
{
+ "type": "module",
  "scripts": {
+   "lint": "eslint .",
+   "lint:fix": "eslint . --fix"
  }
}
```

创建 `eslint.config.json` 文件

```js
import cuiqg from '@cuiqg/eslint-config'

export default cuiqg()
```

## 插件配置

安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 

创建配置文件 `.vscode/settings.json`

```json
{
  "eslint.experimental.useFlatConfig": true,
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```
