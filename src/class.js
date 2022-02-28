class testingClass {
  constructor(string) {
    this._string = string;
  }
  sayHello = () => {
    return `Hello, ${this._string}!`
  };

  uppercase = () => {
    return this._string.toUpperCase()
  };

  lowercase = () => {
    return this._string.toLowerCase()
  };

  countCharacters = () => {
    return this._string.length
  };

  firstCharacter = () => {
    return this._string.charAt(0)
  };

  firstCharacters = (n) => {
    return this._string.substr(0, n)
  };
}

module.exports = {
  testingClass,
};
