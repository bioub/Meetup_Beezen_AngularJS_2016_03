// hellworld-objet.js
(function(global) {
  'use strict';

  function Helloworld(source, dest) {
    if (arguments.length < 2) {
      throw new Error('Not enough arguments');
    }

    this.inputElt = document.body.querySelector(source);
    this.spanElt = document.body.querySelector(dest);
  }

  Helloworld.prototype.start = function() {
    var that = this;
    this.inputElt.addEventListener('input', function() {
      that.spanElt.innerHTML = that.inputElt.value;
    });
  };

  global.Helloworld = Helloworld;

}(this));
