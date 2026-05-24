import { navigationGraph } from "./navigationGraph";

export function bfs(start, goal) {
    const queue = [[start]];
    const visited = new Set();

    while (queue.length) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (node === goal) return path;

        if (!visited.has(node)) {
            visited.add(node);

            const neighbors = navigationGraph[node] || [];
            for (const n of neighbors) {
                queue.push([...path, n]);
            }
        }
    }

    return null;
}