import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import jsxAlly from 'eslint-plugin-jsx-a11y'
import sonarjs from 'eslint-plugin-sonarjs'
import promise from 'eslint-plugin-promise'
import node from 'eslint-plugin-node'
import unicorn from 'eslint-plugin-unicorn'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        plugins: {
            prettier: prettierPlugin,
            import: importPlugin,
            'unused-imports': unusedImports,
            'jsx-a11y': jsxAlly,
            sonarjs: sonarjs,
            promise: promise,
            node: node,
            unicorn: unicorn,
            perfectionist: perfectionist,
        },
        rules: {
            'prettier/prettier': 'error',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            // Organizacion de los imports por grupos
            'import/order': [
                'warn',
                {
                    groups: [
                        ['builtin', 'external'],
                        ['internal'],
                        ['parent', 'sibling', 'index'],
                        'object',
                        'type',
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'after',
                        },
                    ],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always',
                },
            ],
            'import/no-unresolved': 'off',

            // Variables e imports que no se utilizan
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
            // Accesibilidad JSX
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',

            // SonarJS — Evitar dulpicados
            'sonarjs/no-duplicate-string': 'warn',
            'sonarjs/no-identical-functions': 'warn',

            // Manejo de promise
            'promise/always-return': 'warn',
            'promise/no-return-wrap': 'warn',

            // Reglas generales de JS/TS
            '@typescript-eslint/no-redeclare': 'off',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            'no-console': ['error'],
            'node/prefer-global/process': ['off'],
            'node/no-process-env': ['error'],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-empty-function': 'warn',
            'no-alert': 'error',
            'no-magic-numbers': 'off',
            'prefer-const': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { args: 'none', varsIgnorePattern: '^_' },
            ],

            // Consistencia en los nombres de los archivos
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        kebabCase: true,
                        snakeCase: true,
                        pascalCase: true,
                    },
                    ignore: ['README.md', 'vite-env.d.ts'],
                },
            ],
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
])
