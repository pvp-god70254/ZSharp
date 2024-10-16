JUST TO KNOW

1. THIS FILE IS ONLY AVALIBLE WITH LOCALHOST AND NOT FILE:// - ONLY TESTED ON CHROME

2. THE COMPILER IS NOT PART OF THE DOWNLOAD GO TO SETUP TO FIND THE INSTRUCTIONS


SETUP

1. download ZS.js


2. go to index.html and make sure ZS.js is there


3. place ZS.js in new folder named compiler

  • index.html

  • compiler > ZS.js


4. in compiler add new file compiler.js


5. on index.html type these scripts in <BODY>

  • <script type='module' src='./compiler/ZS.js'>

  • <script type='module' src='./compiler/compiler.js'>


6. write code in compiler.js

  import { genZ } from './ZS.js'


  var repeat;

  async function readFile(path) {
    const file = await fetch(path)
    const text = await file.text()

    return text
  }

  const code = await readFile('../script.zs')

  new genZ(code).$(repeat)

7. at location of index.html - compiler folder parent directory add script.zs

8. code script.zs - found as plain text --- DONT LINK SCRIPT.ZS TO INDEX.HTML


Loop code

in compiler go to repeat and set the amount of times to run

Launching server

bash - python/python3 launchServer.py

not bash - double click file
