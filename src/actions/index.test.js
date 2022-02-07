import moxios from "moxios"

import {getSecretWord} from './'

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'party'
      })
    })
    // update to test app in Redux / Context sections

    // return function call so that promise resolves before the test has finished running
    return getSecretWord()
      .then((secretWord) => {
        expect(secretWord).toBe('party')
      })
    // call the assertion in the .then() callback
  })
})