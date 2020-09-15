import { execSync } from 'child_process'
import { groupBy, uniqBy } from 'lodash'

export function getPnpmWhy({ pkg, recursive: r }) {
    try {
        const stdout = execSync(`pnpm why --json ${r ? '-r' : ''} ${pkg}`, {
            stdio: 'pipe',
        }).toString()
        // console.log({ stdout })
        const res = JSON.parse(stdout)

        return res
    } catch {
        console.error('cannot get pnpm why output')
        return []
    }
}

export type WhyJSON = {
    name?: string
    version?: string
    dependencies?: {
        [k: string]: WhyDependency
    }
    devDependencies?: {
        [k: string]: WhyDependency
    }
    peerDependencies?: {
        [k: string]: WhyDependency
    }
}

type WhyDependency = {
    from: string
    version: string
    resolved: string
    dependencies?: {
        [k: string]: WhyDependency
    }
    devDependencies?: {
        [k: string]: WhyDependency
    }
    peerDependencies?: {
        [k: string]: WhyDependency
    }
}

export function processWhyOutput(pkg, output: WhyJSON[]) {
    const instances = output
        .map((x) => {
            const nodes = bfs(x).filter(Boolean)
            const target = nodes.find((x) => x.from === pkg)
            if (!target) {
                return
            }
            return {
                ...target,
                topLevelDependent: x.name,
            }
        })
        .filter(Boolean)
    return groupBy(instances, (x) => x.version)
}

function getChildren(x: WhyJSON): WhyDependency[] {
    return [
        ...Object.values(x?.dependencies || {}),
        ...Object.values(x?.devDependencies || {}),
        // ...Object.values(x?.dependencies || {}),
    ]
}

export function bfs(tree: WhyJSON): WhyDependency[] {
    const results = []
    var queue = [tree]
    var n: WhyJSON

    while (queue.length > 0) {
        n = queue.shift()
        results.push(n)

        let children = getChildren(n)
        if (!children) {
            continue
        }
        for (var i = 0; i < children.length; i++) {
            const child = children[i]
            // child.depth = (n.depth || 0) + 1
            queue.push(child)
        }
    }
    return results
}
