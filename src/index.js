const cangjie = require('./cangjie.json');
const hiragana = require('./hiragana.json');
const { PepperSpray } = require('pepper-spray');

class Lantern {
  constructor(string, d = false) {
    this.debug = d;
    this.phrase = string;
    this.result = [];

    this.parse();
    this.translate();
  }

  parse() {
    let p = [];

    this.phrase = this.phrase.split(/[.,!?]/gm).filter(w => w.length);

    this.phrase.forEach((part) => {
      let i = 1;
      let partArray = [];

      part = part.trim();
      
      let _part = part.split(' ');
      _part.forEach((word, j) => {
        partArray.push(new PepperSpray(word).result[0]);

        if (i === 3 || j === _part.length - 1) {
          i = 1;
          
          p.push(partArray);

          partArray = [];
        } else {
          i++;  
        }
      });
    });

    this.phrase = p;
  }

  translate() {
    if (this.debug) console.log(this.phrase);

    this.phrase.forEach((part) => {
      let result = this[cangjie[part[0].wide]].call(this, part);

      this.result.push({ word: hiragana[result], wide: result, _children: part });
    });
  }

  hand(word) { //Shou
    if(word.length === 1) return 'he';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'ki';
        break;

      case 'field':
        return 'zo';
        break;

      case 'water':
        return 'ge';
        break;

      case 'mouth':
        return 'reactor';
        break;

      case 'twenty':
        return 'mu';
        break;

      case 'predict':
        return 'mi';
        break;

      case 'mountain':
        return 'ka';
        break;

      case 'daggerAxe':
        return 'tsu';
        break;

      case 'people':
        return 'ro';
        break;

      case 'heart':
        return 'do';
        break;

      case 'day':
        return 'ko';
        break;

      case 'corpse':
        return 'so';
        break;

      case 'wood':
        return 'to';
        break;

      case 'fire':
        return 'su';
        break;

      case 'earth':
        return 'mo';
        break;

      case 'bamboo':
        return 'he';
        break;

      case 'ten':
        return 'ge';
        break;

      case 'big':
        return 'chi';
        break;

      case 'middle':
        return 'ze';
        break;

      case 'disaster':
        return 'gi';
        break;

      case 'gold':
        return 'ji';
        break;

      case 'female':
        return 'ki';
        break;

      case 'moon':
        return 'sa';
        break;

      case 'bow':
        return 'ro';
        break;

      case 'one':
        return 're';
        break;
    }
  }

  field(word) { //Tian
    if(word.length === 1) return 'me';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'ko';
        break;

      case 'field':
        return 'be';
        break;

      case 'water':
        return 'ko';
        break;

      case 'mouth':
        return 'do';
        break;

      case 'twenty':
        return 'ro';
        break;

      case 'predict':
        return 'ze';
        break;

      case 'mountain':
        return 'pi';
        break;

      case 'daggerAxe':
        return 'to';
        break;

      case 'people':
        return 'so';
        break;

      case 'heart':
        return 'mo';
        break;

      case 'day':
        return 'ko';
        break;

      case 'corpse':
        return 'ro';
        break;

      case 'wood':
        return 'go';
        break;

      case 'fire':
        return 'yo';
        break;

      case 'earth':
        return 'do';
        break;

      case 'bamboo':
        return 'dzu';
        break;

      case 'ten':
        return 'nu';
        break;

      case 'big':
        return 'ra';
        break;

      case 'middle':
        return 'hi';
        break;

      case 'disaster':
        return 'mi';
        break;

      case 'gold':
        return 'ji';
        break;

      case 'female':
        return 'u';
        break;

      case 'moon':
        return 'wo';
        break;

      case 'bow':
        return 'zo';
        break;

      case 'one':
        return 'ge';
        break;
    }
  }

  water(word) { //Shui
    if(word.length === 1) return 'mo';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'shi';
        break;

      case 'field':
        return 'wa';
        break;

      case 'water':
        return 'a';
        break;

      case 'mouth':
        return 'po';
        break;

      case 'twenty':
        return 'po';
        break;

      case 'predict':
        return 'ge';
        break;

      case 'mountain':
        return 'ni';
        break;

      case 'daggerAxe':
        return 'dji';
        break;

      case 'people':
        return 'za';
        break;

      case 'heart':
        return 'ro';
        break;

      case 'day':
        return 'ji';
        break;

      case 'corpse':
        return 'za';
        break;

      case 'wood':
        return 'da';
        break;

      case 'fire':
        return 'mi';
        break;

      case 'earth':
        return 'mu';
        break;

      case 'bamboo':
        return 'nu';
        break;

      case 'ten':
        return 'i';
        break;

      case 'big':
        return 'wa';
        break;

      case 'middle':
        return 'ri';
        break;

      case 'disaster':
        return 'su';
        break;

      case 'gold':
        return 'ji';
        break;

      case 'female':
        return 'ga';
        break;

      case 'moon':
        return 'su';
        break;

      case 'bow':
        return 'ru';
        break;

      case 'one':
        return 'gu';
        break;
    }
  }

  mouth(word) { //Kou
    if(word.length === 1) return 'su';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'wo';
        break;

      case 'field':
        return 'e';
        break;

      case 'water':
        return 'pu';
        break;

      case 'mouth':
        return 'na';
        break;

      case 'twenty':
        return 'ri';
        break;

      case 'predict':
        return 'fu';
        break;

      case 'mountain':
        return 'ya';
        break;

      case 'daggerAxe':
        return 'mi';
        break;

      case 'people':
        return 'bi';
        break;

      case 'heart':
        return 'pa';
        break;

      case 'day':
        return 'ri';
        break;

      case 'corpse':
        return 'za';
        break;

      case 'wood':
        return 'u';
        break;

      case 'fire':
        return 'ri';
        break;

      case 'earth':
        return 'wo';
        break;

      case 'bamboo':
        return 'ge';
        break;

      case 'ten':
        return 'e';
        break;

      case 'big':
        return 'me';
        break;

      case 'middle':
        return 'me';
        break;

      case 'disaster':
        return 're';
        break;

      case 'gold':
        return 'so';
        break;

      case 'female':
        return 'te';
        break;

      case 'moon':
        return 'e';
        break;

      case 'bow':
        return 'to';
        break;

      case 'one':
        return 'po';
        break;
    }
  }

  twenty(word) { //Nian
    if(word.length === 1) return 'te';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'e';
        break;

      case 'field':
        return 'to';
        break;

      case 'water':
        return 'ro';
        break;

      case 'mouth':
        return 'po';
        break;

      case 'twenty':
        return 'to';
        break;

      case 'predict':
        return 'yo';
        break;

      case 'mountain':
        return 'ne';
        break;

      case 'daggerAxe':
        return 'e';
        break;

      case 'people':
        return 'bu';
        break;

      case 'heart':
        return 'se';
        break;

      case 'day':
        return 'ne';
        break;

      case 'corpse':
        return 'ze';
        break;

      case 'wood':
        return 'mo';
        break;

      case 'fire':
        return 'so';
        break;

      case 'earth':
        return 'mo';
        break;

      case 'bamboo':
        return 'ho';
        break;

      case 'ten':
        return 'ko';
        break;

      case 'big':
        return 'chi';
        break;

      case 'middle':
        return 'bi';
        break;

      case 'disaster':
        return 'ji';
        break;

      case 'gold':
        return 'bi';
        break;

      case 'female':
        return 'wi';
        break;

      case 'moon':
        return 'nu';
        break;

      case 'bow':
        return 'do';
        break;

      case 'one':
        return 'ko';
        break;
    }
  }

  predict(word) { //Bo
    if(word.length === 1) return 'de';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'mo';
        break;

      case 'field':
        return 'te';
        break;

      case 'water':
        return 'so';
        break;

      case 'mouth':
        return 'po';
        break;

      case 'twenty':
        return 'po';
        break;

      case 'predict':
        return 'po';
        break;

      case 'mountain':
        return 'o';
        break;

      case 'daggerAxe':
        return 'na';
        break;

      case 'people':
        return 'wo';
        break;

      case 'heart':
        return 'po';
        break;

      case 'day':
        return 'do';
        break;

      case 'corpse':
        return 'po';
        break;

      case 'wood':
        return 'do';
        break;

      case 'fire':
        return 'ro';
        break;

      case 'earth':
        return 'to';
        break;

      case 'bamboo':
        return 'zo';
        break;

      case 'ten':
        return 'nu';
        break;

      case 'big':
        return 'yo';
        break;

      case 'middle':
        return 'ko';
        break;

      case 'disaster':
        return 'pe';
        break;

      case 'gold':
        return 're';
        break;

      case 'female':
        return 'po';
        break;

      case 'moon':
        return 'de';
        break;

      case 'bow':
        return 'ru';
        break;

      case 'one':
        return 'yo';
        break;
    }
  }

  mountain(word) { //Shan
    if(word.length === 1) return 'zo';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'za';
        break;

      case 'field':
        return 'i';
        break;

      case 'water':
        return 'wi';
        break;

      case 'mouth':
        return 'u';
        break;

      case 'twenty':
        return 'tsu';
        break;

      case 'predict':
        return 'ru';
        break;

      case 'mountain':
        return 'gu';
        break;

      case 'daggerAxe':
        return 'fu';
        break;

      case 'people':
        return 'gu';
        break;

      case 'heart':
        return 'bu';
        break;

      case 'day':
        return 'mi';
        break;

      case 'corpse':
        return 'nu';
        break;

      case 'wood':
        return 'ru';
        break;

      case 'fire':
        return 'gu';
        break;

      case 'earth':
        return 'pa';
        break;

      case 'bamboo':
        return 'tsu';
        break;

      case 'ten':
        return 'mu';
        break;

      case 'big':
        return 'yu';
        break;

      case 'middle':
        return 'ri';
        break;

      case 'disaster':
        return 'wi';
        break;

      case 'gold':
        return 'bi';
        break;

      case 'female':
        return 'yu';
        break;

      case 'moon':
        return 'do';
        break;

      case 'bow':
        return 'de';
        break;

      case 'one':
        return 'po';
        break;
    }
  }

  daggerAxe(word) { //Ge
    if(word.length === 1) return 'do';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'gi';
        break;

      case 'field':
        return 'ji';
        break;

      case 'water':
        return 'pi';
        break;

      case 'mouth':
        return 'fu';
        break;

      case 'twenty':
        return 'zu';
        break;

      case 'predict':
        return 'ni';
        break;

      case 'mountain':
        return 'wa';
        break;

      case 'daggerAxe':
        return 'ri';
        break;

      case 'people':
        return 'mi';
        break;

      case 'heart':
        return 'su';
        break;

      case 'day':
        return 'to';
        break;

      case 'corpse':
        return 'ro';
        break;

      case 'wood':
        return 'do';
        break;

      case 'fire':
        return 'po';
        break;

      case 'earth':
        return 'se';
        break;

      case 'bamboo':
        return 'yo';
        break;

      case 'ten':
        return 'ze';
        break;

      case 'big':
        return 'ro';
        break;

      case 'middle':
        return 'so';
        break;

      case 'disaster':
        return 'do';
        break;

      case 'gold':
        return 'fu';
        break;

      case 'female':
        return 'e';
        break;

      case 'moon':
        return 'ne';
        break;

      case 'bow':
        return 'i';
        break;

      case 'one':
        return 'dji';
        break;
    }
  }

  people(word) { //Ren
    if(word.length === 1) return 'me';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'sa';
        break;

      case 'field':
        return 'ge';
        break;

      case 'water':
        return 'me';
        break;

      case 'mouth':
        return 'se';
        break;

      case 'twenty':
        return 'to';
        break;

      case 'predict':
        return 'go';
        break;

      case 'mountain':
        return 'ro';
        break;

      case 'daggerAxe':
        return 'me';
        break;

      case 'people':
        return 'tsu';
        break;

      case 'heart':
        return 'e';
        break;

      case 'day':
        return 'e';
        break;

      case 'corpse':
        return 'ko';
        break;

      case 'wood':
        return 'bu';
        break;

      case 'fire':
        return 'ho';
        break;

      case 'earth':
        return 'u';
        break;

      case 'bamboo':
        return 'ze';
        break;

      case 'ten':
        return 'o';
        break;

      case 'big':
        return 'so';
        break;

      case 'middle':
        return 'ro';
        break;

      case 'disaster':
        return 'he';
        break;

      case 'gold':
        return 're';
        break;

      case 'female':
        return 'se';
        break;

      case 'moon':
        return 'ge';
        break;

      case 'bow':
        return 'ko';
        break;

      case 'one':
        return 'zo';
        break;
    }
  }

  heart(word) { //Xin
    if(word.length === 1) return 'po';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'yu';
        break;

      case 'field':
        return 'zu';
        break;

      case 'water':
        return 'picture';
        break;

      case 'mouth':
        return 're';
        break;

      case 'twenty':
        return 're';
        break;

      case 'predict':
        return 'o';
        break;

      case 'mountain':
        return 'mo';
        break;

      case 'daggerAxe':
        return 'do';
        break;

      case 'people':
        return 'ge';
        break;

      case 'heart':
        return 'yo';
        break;

      case 'day':
        return 'se';
        break;

      case 'corpse':
        return 'ge';
        break;

      case 'wood':
        return 'o';
        break;

      case 'fire':
        return 'ro';
        break;

      case 'earth':
        return 'zo';
        break;

      case 'bamboo':
        return 'do';
        break;

      case 'ten':
        return 'mo';
        break;

      case 'big':
        return 'ko';
        break;

      case 'middle':
        return 'i';
        break;

      case 'disaster':
        return 'chi';
        break;

      case 'gold':
        return 'gi';
        break;

      case 'female':
        return 'u';
        break;

      case 'moon':
        return 'dji';
        break;

      case 'bow':
        return 'mu';
        break;

      case 'one':
        return 'zu';
        break;
    }
  }

  day(word) { //Ri
    if(word.length === 1) return 'e';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'ma';
        break;

      case 'field':
        return 'chi';
        break;

      case 'water':
        return 'gi';
        break;

      case 'mouth':
        return 'hi';
        break;

      case 'twenty':
        return 'gi';
        break;

      case 'predict':
        return 'yu';
        break;

      case 'mountain':
        return 'gi';
        break;

      case 'daggerAxe':
        return 'hi';
        break;

      case 'people':
        return 'gi';
        break;

      case 'heart':
        return 'ri';
        break;

      case 'day':
        return 'gu';
        break;

      case 'corpse':
        return 'tsu';
        break;

      case 'wood':
        return 'gu';
        break;

      case 'fire':
        return 'bu';
        break;

      case 'earth':
        return 'mu';
        break;

      case 'bamboo':
        return 'e';
        break;

      case 'ten':
        return 'e';
        break;

      case 'big':
        return 'zu';
        break;

      case 'middle':
        return 'e';
        break;

      case 'disaster':
        return 'se';
        break;

      case 'gold':
        return 'ko';
        break;

      case 'female':
        return 'ne';
        break;

      case 'moon':
        return 'ge';
        break;

      case 'bow':
        return 'ko';
        break;

      case 'one':
        return 'ro';
        break;
    }
  }

  corpse(word) { //Shi
    if(word.length === 1) return 'de';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'te';
        break;

      case 'field':
        return 'yu';
        break;

      case 'water':
        return 'e';
        break;

      case 'mouth':
        return 'me';
        break;

      case 'twenty':
        return 'ge';
        break;

      case 'predict':
        return 'ko';
        break;

      case 'mountain':
        return 'mo';
        break;

      case 'daggerAxe':
        return 'to';
        break;

      case 'people':
        return 'ge';
        break;

      case 'heart':
        return 'se';
        break;

      case 'day':
        return 'so';
        break;

      case 'corpse':
        return 'to';
        break;

      case 'wood':
        return 'pe';
        break;

      case 'fire':
        return 'ze';
        break;

      case 'earth':
        return 'ho';
        break;

      case 'bamboo':
        return 're';
        break;

      case 'ten':
        return 'to';
        break;

      case 'big':
        return 'ko';
        break;

      case 'middle':
        return 'ro';
        break;

      case 'disaster':
        return 'pe';
        break;

      case 'gold':
        return 'ko';
        break;

      case 'female':
        return 'so';
        break;

      case 'moon':
        return 'ro';
        break;

      case 'bow':
        return 'do';
        break;

      case 'one':
        return 'po';
        break;
    }
  }

  wood(word) { //Mu
    if(word.length === 1) return 'o';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'na';
        break;

      case 'field':
        return 'wa';
        break;

      case 'water':
        return 'ki';
        break;

      case 'mouth':
        return 'wi';
        break;

      case 'twenty':
        return 'ri';
        break;

      case 'predict':
        return 'bi';
        break;

      case 'mountain':
        return 'yu';
        break;

      case 'daggerAxe':
        return 'su';
        break;

      case 'people':
        return 'wa';
        break;

      case 'heart':
        return 'zu';
        break;

      case 'day':
        return 'da';
        break;

      case 'corpse':
        return 'dji';
        break;

      case 'wood':
        return 'ri';
        break;

      case 'fire':
        return 'dzu';
        break;

      case 'earth':
        return 'go';
        break;

      case 'bamboo':
        return 'ro';
        break;

      case 'ten':
        return 'he';
        break;

      case 'big':
        return 'ko';
        break;

      case 'middle':
        return 'zo';
        break;

      case 'disaster':
        return 'bu';
        break;

      case 'gold':
        return 'yu';
        break;

      case 'female':
        return 'gu';
        break;

      case 'moon':
        return 'nu';
        break;

      case 'bow':
        return 'zu';
        break;

      case 'one':
        return 'o';
        break;
    }
  }

  fire(word) { //Huo
    if(word.length === 1) return 'ne';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'he';
        break;

      case 'field':
        return 'so';
        break;

      case 'water':
        return 'o';
        break;

      case 'mouth':
        return 'gu';
        break;

      case 'twenty':
        return 'u';
        break;

      case 'predict':
        return 'pe';
        break;

      case 'mountain':
        return 'dzu';
        break;

      case 'daggerAxe':
        return 'so';
        break;

      case 'people':
        return 'wo';
        break;

      case 'heart':
        return 'do';
        break;

      case 'day':
        return 'po';
        break;

      case 'corpse':
        return 'po';
        break;

      case 'wood':
        return 'wo';
        break;

      case 'fire':
        return 'ho';
        break;

      case 'earth':
        return 'bu';
        break;

      case 'bamboo':
        return 'se';
        break;

      case 'ten':
        return 'to';
        break;

      case 'big':
        return 'ge';
        break;

      case 'middle':
        return 'mu';
        break;

      case 'disaster':
        return 'o';
        break;

      case 'gold':
        return 'ho';
        break;

      case 'female':
        return 'ze';
        break;

      case 'moon':
        return 'bu';
        break;

      case 'bow':
        return 'ke';
        break;

      case 'one':
        return 'po';
        break;
    }
  }

  earth(word) { //Tu
    if(word.length === 1) return 'ho';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'yu';
        break;

      case 'field':
        return 'ro';
        break;

      case 'water':
        return 'ko';
        break;

      case 'mouth':
        return 'mo';
        break;

      case 'twenty':
        return 'ro';
        break;

      case 'predict':
        return 'po';
        break;

      case 'mountain':
        return 'go';
        break;

      case 'daggerAxe':
        return 'to';
        break;

      case 'people':
        return 'ke';
        break;

      case 'heart':
        return 'dzu';
        break;

      case 'day':
        return 'o';
        break;

      case 'corpse':
        return 'ko';
        break;

      case 'wood':
        return 're';
        break;

      case 'fire':
        return 'go';
        break;

      case 'earth':
        return 'fu';
        break;

      case 'bamboo':
        return 'ko';
        break;

      case 'ten':
        return 'wo';
        break;

      case 'big':
        return 'ro';
        break;

      case 'middle':
        return 'ge';
        break;

      case 'disaster':
        return 'zu';
        break;

      case 'gold':
        return 'ke';
        break;

      case 'female':
        return 'ro';
        break;

      case 'moon':
        return 'su';
        break;

      case 'bow':
        return 'me';
        break;

      case 'one':
        return 'mo';
        break;
    }
  }

  bamboo(word) { //Zhu
    if(word.length === 1) return 'ro';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'ke';
        break;

      case 'field':
        return 'ke';
        break;

      case 'water':
        return 'u';
        break;

      case 'mouth':
        return 'ze';
        break;

      case 'twenty':
        return 'mu';
        break;

      case 'predict':
        return 'ge';
        break;

      case 'mountain':
        return 'to';
        break;

      case 'daggerAxe':
        return 'go';
        break;

      case 'people':
        return 'zo';
        break;

      case 'heart':
        return 'po';
        break;

      case 'day':
        return 'ko';
        break;

      case 'corpse':
        return 'go';
        break;

      case 'wood':
        return 'he';
        break;

      case 'fire':
        return 'de';
        break;

      case 'earth':
        return 'mo';
        break;

      case 'bamboo':
        return 'po';
        break;

      case 'ten':
        return 'zo';
        break;

      case 'big':
        return 'te';
        break;

      case 'middle':
        return 'me';
        break;

      case 'disaster':
        return 'go';
        break;

      case 'gold':
        return 'zu';
        break;

      case 'female':
        return 'de';
        break;

      case 'moon':
        return 'mo';
        break;

      case 'bow':
        return 'do';
        break;

      case 'one':
        return 'pe';
        break;
    }
  }

  ten(word) { //Shi
    if(word.length === 1) return 'po';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'gu';
        break;

      case 'field':
        return 'ro';
        break;

      case 'water':
        return 'so';
        break;

      case 'mouth':
        return 'ke';
        break;

      case 'twenty':
        return 'ge';
        break;

      case 'predict':
        return 'yu';
        break;

      case 'mountain':
        return 'zo';
        break;

      case 'daggerAxe':
        return 'me';
        break;

      case 'people':
        return 'mo';
        break;

      case 'heart':
        return 'de';
        break;

      case 'day':
        return 'be';
        break;

      case 'corpse':
        return 'do';
        break;

      case 'wood':
        return 'ku';
        break;

      case 'fire':
        return 'o';
        break;

      case 'earth':
        return 'ro';
        break;

      case 'bamboo':
        return 'go';
        break;

      case 'ten':
        return 'po';
        break;

      case 'big':
        return 'ne';
        break;

      case 'middle':
        return 'zo';
        break;

      case 'disaster':
        return 'fu';
        break;

      case 'gold':
        return 'ro';
        break;

      case 'female':
        return 'so';
        break;

      case 'moon':
        return 'ko';
        break;

      case 'bow':
        return 'be';
        break;

      case 'one':
        return 'zo';
        break;
      
      default: 
        return 'po';
    }
  }

  big(word) { //Dalet 
    if(word.length === 1) return 'a';
    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'i';
        break;

      case 'field':
        return 'ni';
        break;

      case 'water':
        return 'gu';
        break;

      case 'mouth':
        return 'ha';
        break;

      case 'twenty':
        return 'ka';
        break;

      case 'predict':
        return 'nu';
        break;

      case 'mountain':
        return 'ra';
        break;

      case 'daggerAxe':
        return 'pi';
        break;

      case 'people':
        return 'fu';
        break;

      case 'heart':
        return 'gu';
        break;

      case 'day':
        return 'fu';
        break;

      case 'corpse':
        return 'mi';
        break;

      case 'wood':
        return 'ba';
        break;

      case 'fire':
        return 'se';
        break;

      case 'earth':
        return 'e';
        break;

      case 'bamboo':
        return 'mo';
        break;

      case 'ten':
        return 'gi';
        break;

      case 'big':
        return 'se';
        break;

      case 'middle':
        return 'ko';
        break;

      case 'disaster':
        return 'ho';
        break;

      case 'gold':
        return 'po';
        break;

      case 'female':
        return 'ke';
        break;

      case 'moon':
        return 'ku';
        break;

      case 'bow':
        return 'po';
        break;

      case 'one':
        return 'gu';
        break;

      default: 
        return 'a';
    }
  }

  middle(word) { //Zhong
    if(word.length === 1) return 'su';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'pa';
        break;

      case 'field':
        return 'mu';
        break;

      case 'water':
        return 'bu';
        break;

      case 'mouth':
        return 'ro';
        break;

      case 'twenty':
        return 'e';
        break;

      case 'predict':
        return 'mo';
        break;

      case 'mountain':
        return 'bu';
        break;

      case 'daggerAxe':
        return 'do';
        break;

      case 'people':
        return 'ge';
        break;

      case 'heart':
        return 'zo';
        break;

      case 'day':
        return 'su';
        break;

      case 'corpse':
        return 'ge';
        break;

      case 'wood':
        return 'fu';
        break;

      case 'fire':
        return 'ku';
        break;

      case 'earth':
        return 'pu';
        break;

      case 'bamboo':
        return 'tsu';
        break;

      case 'ten':
        return 'zo';
        break;

      case 'big':
        return 'pi';
        break;

      case 'middle':
        return 'u';
        break;

      case 'disaster':
        return 'do';
        break;

      case 'gold':
        return 'ne';
        break;

      case 'female':
        return 'wo';
        break;

      case 'moon':
        return 'pi';
        break;

      case 'bow':
        return 'go';
        break;

      case 'one':
        return 'ho';
        break;

      default:
        return 'su';
    }
  }

  disaster(word) { //Nan
    if(word.length === 1) return 'ru';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'yo';
        break;

      case 'field':
        return 'so';
        break;

      case 'water':
        return 'go';
        break;

      case 'mouth':
        return 'po';
        break;

      case 'twenty':
        return 'do';
        break;

      case 'predict':
        return 'pi';
        break;

      case 'mountain':
        return 'ta';
        break;

      case 'daggerAxe':
        return 'bi';
        break;

      case 'people':
        return 'zu';
        break;

      case 'heart':
        return 'ke';
        break;

      case 'day':
        return 'ne';
        break;

      case 'corpse':
        return 'ro';
        break;

      case 'wood':
        return 'de';
        break;

      case 'fire':
        return 'zo';
        break;

      case 'earth':
        return 'tsu';
        break;

      case 'bamboo':
        return 'hi';
        break;

      case 'ten':
        return 'to';
        break;

      case 'big':
        return 'nu';
        break;

      case 'middle':
        return 'wa';
        break;

      case 'disaster':
        return 'wi';
        break;

      case 'gold':
        return 'gi';
        break;

      case 'female':
        return 'wi';
        break;

      case 'moon':
        return 'ba';
        break;

      case 'bow':
        return 'mu';
        break;

      case 'one':
        return 'wa';
        break;
    }
  }

  gold(word) { //Jin
    if(word.length === 1) return 'gu';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'to';
        break;

      case 'field':
        return 'po';
        break;

      case 'water':
        return 'mo';
        break;

      case 'mouth':
        return 'zo';
        break;

      case 'twenty':
        return 'pi';
        break;

      case 'predict':
        return 'ne';
        break;

      case 'mountain':
        return 'ze';
        break;

      case 'daggerAxe':
        return 'tsu';
        break;

      case 'people':
        return 'ho';
        break;

      case 'heart':
        return 'mo';
        break;

      case 'day':
        return 'ma';
        break;

      case 'corpse':
        return 'ka';
        break;

      case 'wood':
        return 'wi';
        break;

      case 'fire':
        return 'shi';
        break;

      case 'earth':
        return 'pe';
        break;

      case 'bamboo':
        return 'nu';
        break;

      case 'ten':
        return 'i';
        break;

      case 'big':
        return 'ri';
        break;

      case 'middle':
        return 'ki';
        break;

      case 'disaster':
        return 'ni';
        break;

      case 'gold':
        return 'bi';
        break;

      case 'female':
        return 'wi';
        break;

      case 'moon':
        return 'chi';
        break;

      case 'bow':
        return 'wa';
        break;

      case 'one':
        return 'ri';
        break;
    }
  }

  female(word) { //Nu
    if(word.length === 1) return 'yu';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'shi';
        break;

      case 'field':
        return 'ra';
        break;

      case 'water':
        return 'ka';
        break;

      case 'mouth':
        return 'po';
        break;

      case 'twenty':
        return 'chi';
        break;

      case 'predict':
        return 'gu';
        break;

      case 'mountain':
        return 'ga';
        break;

      case 'daggerAxe':
        return 'ri';
        break;

      case 'people':
        return 'be';
        break;

      case 'heart':
        return 'ki';
        break;

      case 'day':
        return 'i';
        break;

      case 'corpse':
        return 'mu';
        break;

      case 'wood':
        return 'i';
        break;

      case 'fire':
        return 'he';
        break;

      case 'earth':
        return 'hi';
        break;

      case 'bamboo':
        return 'i';
        break;

      case 'ten':
        return 'gi';
        break;

      case 'big':
        return 'e';
        break;

      case 'middle':
        return 'wi';
        break;

      case 'disaster':
        return 'bi';
        break;

      case 'gold':
        return 'ni';
        break;

      case 'female':
        return 'hi';
        break;

      case 'moon':
        return 'bi';
        break;

      case 'bow':
        return 'po';
        break;

      case 'one':
        return 'i';
        break;
    }
  }

  moon(word) { //Yue
    if(word.length === 1) return 'mi';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'ma';
        break;

      case 'field':
        return 'ro';
        break;

      case 'water':
        return 'po';
        break;

      case 'mouth':
        return 'po';
        break;

      case 'twenty':
        return 'po';
        break;

      case 'predict':
        return 'po';
        break;

      case 'mountain':
        return 'po';
        break;

      case 'daggerAxe':
        return 'po';
        break;

      case 'people':
        return 'po';
        break;

      case 'heart':
        return 'po';
        break;

      case 'day':
        return 'po';
        break;

      case 'corpse':
        return 'po';
        break;

      case 'wood':
        return 'po';
        break;

      case 'fire':
        return 'ko';
        break;

      case 'earth':
        return 'zo';
        break;

      case 'bamboo':
        return 'po';
        break;

      case 'ten':
        return 'mu';
        break;

      case 'big':
        return 'to';
        break;

      case 'middle':
        return 'ze';
        break;

      case 'disaster':
        return 'mo';
        break;

      case 'gold':
        return 'po';
        break;

      case 'female':
        return 'o';
        break;

      case 'moon':
        return 'zu';
        break;

      case 'bow':
        return 'pi';
        break;

      case 'one':
        return 'pi';
        break;
    }
  }

  bow(word) { //Gong
    if(word.length === 1) return 'mu';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'za';
        break;

      case 'field':
        return 'da';
        break;

      case 'water':
        return 'i';
        break;

      case 'mouth':
        return 'da';
        break;

      case 'twenty':
        return 'su';
        break;

      case 'predict':
        return 'e';
        break;

      case 'mountain':
        return 're';
        break;

      case 'daggerAxe':
        return 'ne';
        break;

      case 'people':
        return 'zo';
        break;

      case 'heart':
        return 'yo';
        break;

      case 'day':
        return 'ro';
        break;

      case 'corpse':
        return 'se';
        break;

      case 'wood':
        return 'ge';
        break;

      case 'fire':
        return 'o';
        break;

      case 'earth':
        return 'ho';
        break;

      case 'bamboo':
        return 'ro';
        break;

      case 'ten':
        return 'po';
        break;

      case 'big':
        return 'ne';
        break;

      case 'middle':
        return 'yo';
        break;

      case 'disaster':
        return 'do';
        break;

      case 'gold':
        return 'po';
        break;

      case 'female':
        return 'mo';
        break;

      case 'moon':
        return 'po';
        break;

      case 'bow':
        return 'i';
        break;

      case 'one':
        return 'a';
        break;
    }
  }

  one(word) { //Yi
    if(word.length === 1) return 'te';

    switch(cangjie[word[1].wide]) {
      case 'hand':
        return 'do';
        break;

      case 'field':
        return 'bi';
        break;

      case 'water':
        return 'ra';
        break;

      case 'mouth':
        return 'zo';
        break;

      case 'twenty':
        return 'za';
        break;

      case 'predict':
        return 'ha';
        break;

      case 'mountain':
        return 'i';
        break;

      case 'daggerAxe':
        return 'ni';
        break;

      case 'people':
        return 'ni';
        break;

      case 'heart':
        return 'ra';
        break;

      case 'day':
        return 'dzu';
        break;

      case 'corpse':
        return 'do';
        break;

      case 'wood':
        return 'i';
        break;

      case 'fire':
        return 'ma';
        break;

      case 'earth':
        return 'he';
        break;

      case 'bamboo':
        return 'pi';
        break;

      case 'ten':
        return 'ra';
        break;

      case 'big':
        return 'za';
        break;

      case 'middle':
        return 'ta';
        break;

      case 'disaster':
        return 'i';
        break;

      case 'gold':
        return 'ko';
        break;

      case 'female':
        return 'i';
        break;

      case 'moon':
        return 'ka';
        break;

      case 'bow':
        return 'bi';
        break;

      case 'one':
        return 'shi';
        break;
    }
  }
}

module.exports = Lantern;
module.exports.Lantern = Lantern;