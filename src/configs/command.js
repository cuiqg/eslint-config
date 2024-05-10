import createCommand from 'eslint-plugin-command/config'

/** @type {import('eslint-define-config').FlatESLintConfigItem} */
export async function command() {
  return [
    {
      ...createCommand(),
    },
  ]
}
