const { pigIt } = require('../simple-pig-latin.js')

describe("Tests", () => {
  it.skip("test", () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
  });
});