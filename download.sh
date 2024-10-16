mkdir compiler
cd compiler

echo "
 import { genZ } from './ZS.js'


  var repeat;

  async function readFile(path) {
    const file = await fetch(path)
    const text = await file.text()

    return text
  }

  const code = await readFile('../script.zs')

  new genZ(code).$(repeat)
" > compiler.js