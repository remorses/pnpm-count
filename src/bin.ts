#!/usr/bin/env node
import { uniqBy } from 'lodash'
import yargs from 'yargs'
import chalk from 'chalk'
import { getPnpmWhy, processWhyOutput } from './'

const argv = yargs
    .command(
        ['get <packageName>', '*'],
        '',
        (yargs) => {
            yargs
                .option('recursive', { type: 'boolean', alias: 'r' })

                .option('verbose', { alias: 'v', type: 'boolean' })
        },
        (argv) => {
            const pkg = argv.packageName
            if (!pkg) {
                throw new Error('positional arg is required')
            }
            const recursive = argv.recursive
            console.info('running pnpm why command')
            const why = getPnpmWhy({ pkg, recursive })
            console.info('traversing the dependency tree')
            // console.log(why)
            const res = processWhyOutput(pkg, why)
            console.info()
            console.info()
            console.info(
                `Found ${Object.keys(res).length} instances of ${chalk.green(
                    pkg,
                )}`,
            )
            Object.keys(res).forEach((k) => {
                console.info()
                const pkgs = uniqBy(res[k], (x) => x.topLevelDependent)
                console.info(`version ${chalk.green(pkgs[0].version)} used by`)
                pkgs.forEach((p) => {
                    console.info(`  - ${p.topLevelDependent}`)
                })
            })
            console.info()
        },
    )
    .help('help')
    .help('h').argv
