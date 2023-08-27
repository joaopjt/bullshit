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
    this.phrase = this.phrase.split(/[.,!?]/gm);
  }

  translate() {

  }

  hand() { //Shou
    // default: (old mc donald had a fart, fart fart fart fart fart)

    switch(this.phrase) {
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

  field() { //Tian
    // default: eye

    switch(this.phrase) {
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

  water() { //Shui
    // default: too

    switch(this.phrase) {
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

  mouth() { //Kou
    // default: vinegar

    switch(this.phrase) {
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

  twenty() { //Nian
    // default: hand

    switch(this.phrase) {
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

  predict() { //Bo
    // default: in

    switch(this.phrase) {
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

  mountain() { //Shan
    // default: zo

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  daggerAxe() { //Ge
    // default: degree

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  people() { //Ren
    // default: eye

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  heart() { //Xin
    // default: dimple

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  day() { //Ri
    // default: picture

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  corpse() { //Shi
    // default: in

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  wood() { //Mu
    // default: oh

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  fire() { //Huo
    // default: hey

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  earth() { //Tu
    // default: ho

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  bamboo() { //Zhu
    // default: reactor

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  ten() { //Shi
    // default: dimple

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  big() { //Da
    // default: ma

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  middle() { //Zhong
    // default: vinegar

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  disaster() { //Nan
    // default: ru

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  gold() { //Jin
    // default: ingredient

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  female() { //Nu
    // default: hot water (👺)

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  moon() { //Yue
    // default: fruit

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  bow() { //Gong
    // default: nothing

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }

  one() { //Yi
    // default: hand

    switch(this.phrase) {
      case 'hand':
        return '';
        break;

      case 'field':
        return '';
        break;

      case 'water':
        return '';
        break;

      case 'mouth':
        return '';
        break;

      case 'twenty':
        return '';
        break;

      case 'predict':
        return '';
        break;

      case 'mountain':
        return '';
        break;

      case 'daggerAxe':
        return '';
        break;

      case 'people':
        return '';
        break;

      case 'heart':
        return '';
        break;

      case 'day':
        return '';
        break;

      case 'corpse':
        return '';
        break;

      case 'wood':
        return '';
        break;

      case 'fire':
        return '';
        break;

      case 'earth':
        return '';
        break;

      case 'bamboo':
        return '';
        break;

      case 'ten':
        return '';
        break;

      case 'big':
        return '';
        break;

      case 'middle':
        return '';
        break;

      case 'disaster':
        return '';
        break;

      case 'gold':
        return '';
        break;

      case 'female':
        return '';
        break;

      case 'moon':
        return '';
        break;

      case 'bow':
        return '';
        break;

      case 'one':
        return '';
        break;
    }
  }
}

module.exports = Lantern;
module.exports.Lantern = Lantern;