module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  // update getSecretWord return value when Redux / Context is implemented
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party'))
}