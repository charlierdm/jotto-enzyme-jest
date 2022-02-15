import moxios from "moxios"

import {storeFactory} from '../../test/testUtils'

import {getSecretWord} from './'

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('secretWord is returned', () => {
    const store = storeFactory()
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'party'
      })
    })
    // return function call so that promise resolves before the test has finished running
    return store.dispatch(getSecretWord())
      .then(() => {
        const secretWord = store.getState().secretWord
        expect(secretWord).toBe('party')
      })
    // call the assertion in the .then() callback
  })
})