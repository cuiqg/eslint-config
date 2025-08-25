import type { Linter } from 'eslint'
export type Awaitable<T> = T | Promise<T>

export type FlatConfigItem = Omit<Linter.Config, 'plugins'> & {
  plugins?: Record<string, any>
}

export interface OptionsOverrides {
  overrides?: Linter.Config['rules']
}

export interface OptionsFiles {
  files?: Array<string | string[]>
}

export interface OptionsConfig {
  /**
   * @default true
   */
  gitignore?: boolean

  /**
   * @default true
   */
  javascript?: boolean

  /**
   * @default hasTypeScript()
   */
  typescript?: boolean

  /**
   * @default true
   */
  imports?: boolean

  /**
   * @default hasVue()
   */
  vue?: boolean

  /**
   * @default false
   */
  prettier?: boolean

  /**
   * @default hasUnoCss()
   */
  unocss?: boolean

  /**
   * @default false
   */
  nextjs?: boolean
}
