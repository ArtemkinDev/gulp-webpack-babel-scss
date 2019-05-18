export class FirstModule {
  constructor(word) {
    this.word = word;
  }

  sayWord() {
    console.log(this.word);
  }

  changeTitle() {
    const h1 = document.querySelector('h1').innerHTML = 'Hello world from main.js';
  }
};
