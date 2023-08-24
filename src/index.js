const cangjie = require('./cangjie.json');

class Lantern {
  constructor(string, d = false) {
    this.debug = d;
    this.phrase = string;
    this.result = [];

    this.parse();
    this.translate();
  }

  parse() {
    this.phrase = this.phrase.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(' ');

    this.phrase.map((i) => {
      let i += 1;


    })
  }

  translate() {
    this.phrase.forEach((word) => {
      let w = Object.values(word);
      let f = w[0];
      
      this[f].call(this, word, w);
    });
  }

  hand() {

  }

  field() {

  }

  water() {

  }

  mouth() {

  }

  twenty() {

  }

  predict() {

  }

  mountain() {

  }

  daggerAxe() {

  }

  people() {

  }

  heart() {

  }

  day() {

  }

  corpse() {

  }

  wood() {

  }

  fire() {

  }

  earth() {

  }

  bamboo() {

  }

  ten() {

  }

  big() {

  }

  middle() {

  }

  disaster() {

  }

  gold() {

  }

  female() {

  }

  moon() {

  }

  bow() {

  }

  one() {

  }



}

module.exports = Lantern;
module.exports.Lantern = Lantern;