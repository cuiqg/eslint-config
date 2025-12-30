# @cuiqg/eslint-config [![npm](https://img.shields.io/npm/v/%40cuiqg%2Feslint-config?registry_uri=https%3A%2F%2Fregistry.npmmirror.com&style=social&logo=npm&logoColor=%23CB3837)](https://npmmirror.com/package/@cuiqg/eslint-config)

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
+   "lint:fix": "eslint . --fix",
+   "lint:inspect": "eslint . --inspect-config"
  }
}
```

创建 `eslint.config.mjs` 文件

```js
import cuiqg from '@cuiqg/eslint-config'

export default cuiqg()
```

## 插件配置

安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

创建配置文件 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,

  "eslint.useFlatConfig": true,

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```
