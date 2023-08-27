const cangjie = require('./cangjie.json');
const PepperSpray = require('pepper-spray');

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
      .replaceAll(',', '')
      .replaceAll('.', '')
      .replaceAll('!', '')
      .replaceAll('?', '')
      .replaceAll(`'`, '')
      .replaceAll(`"`, '')
      .replace(/[\u0300-\u036f]/g, "")
      .split(' ');

    
  }

  translate() {
    this.phrase.forEach((word) => {
      let w = Object.values(word);
      let f = w[0];
      
      this[f].call(this, word, w);
    });
  }

  hand() { //Shou

  }

  field() { //Tian

  }

  water() { //Shui

  }

  mouth() { //Kou

  }

  twenty() { //Nian

  }

  predict() { //Bo

  }

  mountain() { //Shan

  }

  daggerAxe() { //Ge

  }

  people() { //Ren

  }

  heart() { //Xin

  }

  day() { //Ri

  }

  corpse() { //Shi

  }

  wood() { //Mu

  }

  fire() { //Huo

  }

  earth() { //Tu

  }

  bamboo() { //Zhu

  }

  ten() { //Shi

  }

  big() { //Da

  }

  middle() { //Zhong

  }

  disaster() { //Nan

  }

  gold() { //Jin

  }

  female() { //Nu

  }

  moon() { //Yue

  }

  bow() { //Gong

  }

  one() { //Yi

  }
}

module.exports = Lantern;
module.exports.Lantern = Lantern;