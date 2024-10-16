import os

os.system('mkdir compiler')
os.chdir('compiler')
os.system('curl -O https://raw.githubusercontent.com/pvp-god70254/ZSharp/refs/head/main/ZS.js')
open('compiler.js', 'w').write("import { genZ } from './ZS.js'\n\n  var repeat;\n\n  async function readFile(path) {\n    const file = await fetch(path)\n\n    const text = await file.text()\n\n    return text\n  }\n\n  const code = await readFile('../script.zs')\n\n  new genZ(code).$(repeat)")