// helloworld-es6.js
class Helloworld {
  constructor(source, dest) {
    if (arguments.length < 2) {
      throw new Error('Not enough arguments');
    }

    this.inputElt = document.body.querySelector(source);
    this.spanElt = document.body.querySelector(dest);
  }

  start() {
    this.inputElt.addEventListener('input', () => {
      this.spanElt.innerHTML = this.inputElt.value;
    });
  }
}

export default Helloworld;
