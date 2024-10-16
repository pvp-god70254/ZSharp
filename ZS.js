//please dont republish im just 10🥲 thank you!

//compiler


//syntax - class
/*
import { genZ } from './ZS.js'

const <genZ class shortcut name ex. Z, A, $> = genZ or just use genZ class

new <genZ class name>(`code`).exec()

*/

export class genZ {
    constructor(zsharp) {
      try {
        //syntax checker
        this.code = zsharp
          .replaceAll('celem(', 'document.createElement(')
          .replaceAll('.sigma', '.id')
          .replaceAll('err(', 'Error(')
          .replaceAll('yap(', 'console.log(')
          .replaceAll('lit ', 'let ')
          .replaceAll('yell(', 'alert(')
          .replaceAll('rushE', Math.E)
          .replaceAll('pi', Math.PI)
          .replaceAll('rnd(', 'Math.round(')
          .replaceAll('a+?(', 'confirm(')
          .replaceAll('school', 'class')
          .replaceAll('build', 'constructor')
          .replaceAll('pro.', 'this.')
          .replaceAll('Func', 'function')
          .replaceAll('coolfunc', 'function')
          .replaceAll('.bro =', '.innerHTML =')
          .replaceAll('.click =', '.onclick =')
          .replaceAll('spawn(', 'appendChild(')
          .replaceAll('9/11(', 'remove(')
          .replaceAll('.lookBro(', 'window.open(')
          .replaceAll('flr(', 'Math.floor(')
          .replaceAll('?(', 'prompt(');
      } catch (error) {
        throw new Error('Please define Z# code.');
      }
    }
    //exec func name - default = $
    $(times){
      let a = '';
      if (times == undefined){
        times = 1
      }
      for (let b = 0; b < times; b++){
        let i = b + 1
        try {
          a = eval(this.code);
        } catch (error) {
          throw new Error('Error with Z# to JavaScript compiler. Please fix code.\n\n' + error);
        }
  
      }
      return a;
    }
  }