import assert from 'assert'
import { processWhyOutput } from '../src'
import snapshot from 'snap-shot-it'

it('processWhyOutput', () => {
    const res = processWhyOutput('lodash', exampleWhyOut)
    snapshot(res)
})

const exampleWhyOut = [
    {
        name: '@pnpm/plugin-commands-server',
        version: '2.0.32',
        dependencies: {
            'render-help': {
                from: 'render-help',
                version: '1.0.0',
                resolved:
                    'https://registry.npmjs.org/render-help/-/render-help-1.0.0.tgz',
                dependencies: {
                    table: {
                        from: 'table',
                        version: '5.4.6',
                        resolved:
                            'https://registry.npmjs.org/table/-/table-5.4.6.tgz',
                        dependencies: {
                            lodash: {
                                from: 'lodash',
                                version: '4.17.20',
                                resolved:
                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                            },
                        },
                    },
                },
            },
        },
    },
    {
        name: '@pnpm/plugin-commands-store',
        version: '2.0.36',
        dependencies: {
            'render-help': {
                from: 'render-help',
                version: '1.0.0',
                resolved:
                    'https://registry.npmjs.org/render-help/-/render-help-1.0.0.tgz',
                dependencies: {
                    table: {
                        from: 'table',
                        version: '5.4.6',
                        resolved:
                            'https://registry.npmjs.org/table/-/table-5.4.6.tgz',
                        dependencies: {
                            lodash: {
                                from: 'lodash',
                                version: '4.17.20',
                                resolved:
                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                            },
                        },
                    },
                },
            },
        },
    },
    {
        name: 'pnpm',
        version: '5.5.13',
        dependencies: {
            'render-help': {
                from: 'render-help',
                version: '1.0.0',
                resolved:
                    'https://registry.npmjs.org/render-help/-/render-help-1.0.0.tgz',
                dependencies: {
                    table: {
                        from: 'table',
                        version: '5.4.6',
                        resolved:
                            'https://registry.npmjs.org/table/-/table-5.4.6.tgz',
                        dependencies: {
                            lodash: {
                                from: 'lodash',
                                version: '4.17.20',
                                resolved:
                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                            },
                        },
                    },
                },
            },
        },
    },
    {
        name: '@pnpm/pnpmfile',
        version: '0.1.16',
    },
    {
        name: '@pnpm/prune-lockfile',
        version: '2.0.14',
    },
    {
        name: '@pnpm/read-modules-dir',
        version: '2.0.3',
    },
    {
        name: '@pnpm/read-package-json',
        version: '3.1.5',
    },
    {
        name: '@pnpm/read-project-manifest',
        version: '1.0.13',
    },
    {
        name: '@pnpm/read-projects-context',
        version: '4.0.5',
    },
    {
        name: '@pnpm/remove-bins',
        version: '1.0.5',
    },
    {
        name: '@pnpm/resolve-dependencies',
        version: '18.0.1',
    },
    {
        name: '@pnpm/resolve-workspace-range',
        version: '1.0.1',
    },
    {
        name: '@pnpm/resolver-base',
        version: '7.0.3',
    },
    {
        name: '@pnpm/run-npm',
        version: '2.0.3',
    },
    {
        name: '@pnpm/server',
        version: '8.0.9',
    },
    {
        name: '@pnpm/sort-packages',
        version: '1.0.13',
    },
    {
        name: '@pnpm/store-connection-manager',
        version: '0.3.31',
    },
    {
        name: '@pnpm/store-controller-types',
        version: '8.0.2',
    },
    {
        name: 'supi',
        version: '0.41.28',
        devDependencies: {
            nock: {
                from: 'nock',
                version: '12.0.3',
                resolved: 'https://registry.npmjs.org/nock/-/nock-12.0.3.tgz',
                dependencies: {
                    lodash: {
                        from: 'lodash',
                        version: '4.17.20',
                        resolved:
                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                    },
                },
            },
        },
    },
    {
        name: '@pnpm/symlink-dependency',
        version: '3.0.9',
    },
    {
        name: '@pnpm/tarball-fetcher',
        version: '8.2.0',
        devDependencies: {
            nock: {
                from: 'nock',
                version: '12.0.3',
                resolved: 'https://registry.npmjs.org/nock/-/nock-12.0.3.tgz',
                dependencies: {
                    lodash: {
                        from: 'lodash',
                        version: '4.17.20',
                        resolved:
                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                    },
                },
            },
        },
    },
    {
        name: '@pnpm/tarball-resolver',
        version: '4.0.3',
    },
    {
        name: '@pnpm/types',
        version: '6.2.0',
    },
    {
        name: '@pnpm/write-project-manifest',
        version: '1.1.1',
    },
    {
        name: '@pnpm/assert-project',
        version: '2.1.7',
    },
    {
        name: '@pnpm/assert-store',
        version: '1.0.8',
    },
    {
        name: '@pnpm/prepare',
        version: '0.0.9',
    },
    {
        name: '@pnpm/test-fixtures',
        version: '0.0.0',
    },
    {
        name: '@pnpm-private/tools',
        version: '0.0.0',
        devDependencies: {
            '@commitlint/config-conventional': {
                from: '@commitlint/config-conventional',
                version: '9.1.2',
                resolved:
                    'https://registry.npmjs.org/@commitlint/config-conventional/-/config-conventional-9.1.2.tgz',
                dependencies: {
                    'conventional-changelog-conventionalcommits': {
                        from: 'conventional-changelog-conventionalcommits',
                        version: '4.3.0',
                        resolved:
                            'https://registry.npmjs.org/conventional-changelog-conventionalcommits/-/conventional-changelog-conventionalcommits-4.3.0.tgz',
                        dependencies: {
                            lodash: {
                                from: 'lodash',
                                version: '4.17.20',
                                resolved:
                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                            },
                        },
                    },
                },
            },
            '@commitlint/cli': {
                from: '@commitlint/cli',
                version: '9.1.2',
                resolved:
                    'https://registry.npmjs.org/@commitlint/cli/-/cli-9.1.2.tgz',
                dependencies: {
                    lodash: {
                        from: 'lodash',
                        version: '4.17.20',
                        resolved:
                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                    },
                    '@commitlint/load': {
                        from: '@commitlint/load',
                        version: '9.1.2',
                        resolved:
                            'https://registry.npmjs.org/@commitlint/load/-/load-9.1.2.tgz',
                        dependencies: {
                            lodash: {
                                from: 'lodash',
                                version: '4.17.20',
                                resolved:
                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                            },
                            '@commitlint/resolve-extends': {
                                from: '@commitlint/resolve-extends',
                                version: '9.1.2',
                                resolved:
                                    'https://registry.npmjs.org/@commitlint/resolve-extends/-/resolve-extends-9.1.2.tgz',
                                dependencies: {
                                    lodash: {
                                        from: 'lodash',
                                        version: '4.17.20',
                                        resolved:
                                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                    },
                                },
                            },
                        },
                    },
                    '@commitlint/lint': {
                        from: '@commitlint/lint',
                        version: '9.1.2',
                        resolved:
                            'https://registry.npmjs.org/@commitlint/lint/-/lint-9.1.2.tgz',
                        dependencies: {
                            '@commitlint/parse': {
                                from: '@commitlint/parse',
                                version: '9.1.2',
                                resolved:
                                    'https://registry.npmjs.org/@commitlint/parse/-/parse-9.1.2.tgz',
                                dependencies: {
                                    'conventional-commits-parser': {
                                        from: 'conventional-commits-parser',
                                        version: '3.1.0',
                                        resolved:
                                            'https://registry.npmjs.org/conventional-commits-parser/-/conventional-commits-parser-3.1.0.tgz',
                                        dependencies: {
                                            lodash: {
                                                from: 'lodash',
                                                version: '4.17.20',
                                                resolved:
                                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                            },
                                        },
                                    },
                                },
                            },
                            '@commitlint/rules': {
                                from: '@commitlint/rules',
                                version: '9.1.2',
                                resolved:
                                    'https://registry.npmjs.org/@commitlint/rules/-/rules-9.1.2.tgz',
                                dependencies: {
                                    '@commitlint/ensure': {
                                        from: '@commitlint/ensure',
                                        version: '9.1.2',
                                        resolved:
                                            'https://registry.npmjs.org/@commitlint/ensure/-/ensure-9.1.2.tgz',
                                        dependencies: {
                                            lodash: {
                                                from: 'lodash',
                                                version: '4.17.20',
                                                resolved:
                                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '@commitlint/prompt-cli': {
                from: '@commitlint/prompt-cli',
                version: '9.1.2',
                resolved:
                    'https://registry.npmjs.org/@commitlint/prompt-cli/-/prompt-cli-9.1.2.tgz',
                dependencies: {
                    '@commitlint/prompt': {
                        from: '@commitlint/prompt',
                        version: '9.1.2',
                        resolved:
                            'https://registry.npmjs.org/@commitlint/prompt/-/prompt-9.1.2.tgz',
                        dependencies: {
                            lodash: {
                                from: 'lodash',
                                version: '4.17.20',
                                resolved:
                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                            },
                            '@commitlint/load': {
                                from: '@commitlint/load',
                                version: '9.1.2',
                                resolved:
                                    'https://registry.npmjs.org/@commitlint/load/-/load-9.1.2.tgz',
                                dependencies: {
                                    lodash: {
                                        from: 'lodash',
                                        version: '4.17.20',
                                        resolved:
                                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                    },
                                    '@commitlint/resolve-extends': {
                                        from: '@commitlint/resolve-extends',
                                        version: '9.1.2',
                                        resolved:
                                            'https://registry.npmjs.org/@commitlint/resolve-extends/-/resolve-extends-9.1.2.tgz',
                                        dependencies: {
                                            lodash: {
                                                from: 'lodash',
                                                version: '4.17.20',
                                                resolved:
                                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                            },
                                        },
                                    },
                                },
                            },
                            vorpal: {
                                from: 'vorpal',
                                version: '1.12.0',
                                resolved:
                                    'https://registry.npmjs.org/vorpal/-/vorpal-1.12.0.tgz',
                                dependencies: {
                                    lodash: {
                                        from: 'lodash',
                                        version: '4.17.20',
                                        resolved:
                                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                    },
                                    inquirer: {
                                        from: 'inquirer',
                                        version: '0.11.0',
                                        resolved:
                                            'https://registry.npmjs.org/inquirer/-/inquirer-0.11.0.tgz',
                                        dependencies: {
                                            lodash: {
                                                from: 'lodash',
                                                version: '3.10.1',
                                                resolved:
                                                    'https://registry.npmjs.org/lodash/-/lodash-3.10.1.tgz',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    {
        name: '@pnpm-private/typings',
        version: '0.0.0',
    },
    {
        name: '@pnpm/eslint-config',
        version: '1.0.0',
        dependencies: {
            '@typescript-eslint/eslint-plugin': {
                from: '@typescript-eslint/eslint-plugin',
                version: '4.1.0',
                resolved:
                    'https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.1.0.tgz',
                dependencies: {
                    '@typescript-eslint/experimental-utils': {
                        from: '@typescript-eslint/experimental-utils',
                        version: '4.1.0',
                        resolved:
                            'https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.1.0.tgz',
                        dependencies: {
                            '@typescript-eslint/typescript-estree': {
                                from: '@typescript-eslint/typescript-estree',
                                version: '4.1.0',
                                resolved:
                                    'https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.1.0.tgz',
                                dependencies: {
                                    lodash: {
                                        from: 'lodash',
                                        version: '4.17.20',
                                        resolved:
                                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'eslint-config-standard-with-typescript': {
                from: 'eslint-config-standard-with-typescript',
                version: '19.0.1',
                resolved:
                    'https://registry.npmjs.org/eslint-config-standard-with-typescript/-/eslint-config-standard-with-typescript-19.0.1.tgz',
                dependencies: {
                    '@typescript-eslint/parser': {
                        from: '@typescript-eslint/parser',
                        version: '4.1.0',
                        resolved:
                            'https://registry.npmjs.org/@typescript-eslint/parser/-/parser-4.1.0.tgz',
                        dependencies: {
                            '@typescript-eslint/typescript-estree': {
                                from: '@typescript-eslint/typescript-estree',
                                version: '4.1.0',
                                resolved:
                                    'https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.1.0.tgz',
                                dependencies: {
                                    lodash: {
                                        from: 'lodash',
                                        version: '4.17.20',
                                        resolved:
                                            'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                    },
                                },
                            },
                        },
                    },
                    '@typescript-eslint/eslint-plugin': {
                        from: '@typescript-eslint/eslint-plugin',
                        version: '4.1.0',
                        resolved:
                            'https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.1.0.tgz',
                        dependencies: {
                            '@typescript-eslint/experimental-utils': {
                                from: '@typescript-eslint/experimental-utils',
                                version: '4.1.0',
                                resolved:
                                    'https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.1.0.tgz',
                                dependencies: {
                                    '@typescript-eslint/typescript-estree': {
                                        from:
                                            '@typescript-eslint/typescript-estree',
                                        version: '4.1.0',
                                        resolved:
                                            'https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.1.0.tgz',
                                        dependencies: {
                                            lodash: {
                                                from: 'lodash',
                                                version: '4.17.20',
                                                resolved:
                                                    'https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    {
        name: '@pnpm/tsconfig',
        version: '1.0.0',
    },
    {
        name: '@pnpm-private/updater',
        version: '0.0.23',
    },
]
