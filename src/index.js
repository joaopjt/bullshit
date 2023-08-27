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
    this.phrase = new PepperSpray(this.phrase);

    this.phrase
  }

  translate() {
    this.phrase.forEach((word) => {
      let w = Object.values(word);
      let f = w[0];
      
      this[f].call(this, word, w);
    });
  }

  hand() { //Shou
    // default: (old mc donald had a fart, fart fart fart fart fart)
  }

  field() { //Tian
    // default: eye
  }

  water() { //Shui
    // default: too
  }

  mouth() { //Kou
    // default: vinegar
  }

  twenty() { //Nian
    // default: hand
  }

  predict() { //Bo
    // default: in
  }

  mountain() { //Shan
    // default: zo
  }

  daggerAxe() { //Ge
    // default: degree
  }

  people() { //Ren
    // default: eye
  }

  heart() { //Xin
    // default: dimple
  }

  day() { //Ri
    // default: picture
  }

  corpse() { //Shi
    // default: in
  }

  wood() { //Mu
    // default: oh
  }

  fire() { //Huo
    // default: hey
  }

  earth() { //Tu
    // default: ho
  }

  bamboo() { //Zhu
    // default: reactor
  }

  ten() { //Shi
    // default: dimple
  }

  big() { //Da
    // default: ma
  }

  middle() { //Zhong
    // default: vinegar
  }

  disaster() { //Nan
    // default: ru
  }

  gold() { //Jin
    // default: ingredient
  }

  female() { //Nu
    // default: hot water (👺)
  }

  moon() { //Yue
    // default: fruit
  }

  bow() { //Gong
    // default: nothing
  }

  one() { //Yi
    // default: hand
  }
}

module.exports = Lantern;
module.exports.Lantern = Lantern;