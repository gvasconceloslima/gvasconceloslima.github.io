import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const shell = await readFile(new URL('src/standalone-shell.html', root), 'utf8');
const content = await readFile(new URL('src/portfolio-fragment.html', root), 'utf8');
if (shell.split('__PORTFOLIO_CONTENT__').length !== 2) throw new Error('Expected one content placeholder');
await writeFile(new URL('index.html', root), shell.replace('__PORTFOLIO_CONTENT__', content));
console.log('index.html regenerated');
