import {cp,mkdir,rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
await rm(path.join(root,'dist'),{recursive:true,force:true});
await mkdir(path.join(root,'dist'),{recursive:true});
for(const name of ['index.html','style.css','script.js','workbench'])await cp(path.join(root,name),path.join(root,'dist',name),{recursive:true,filter:src=>!src.includes('/tests')&&!src.endsWith('README.md')});
console.log('Static preview built from the original homepage and workbench.');
