import React from 'react'
import { mount } from 'enzyme'

import App from './App'
import { findByTestAttr } from '../test/testUtils'
import GuessedWord from './GuessedWords'

const setup = (state = {}) => {
  const wrapper = mount(<App />)

  const inputBox = findByTestAttr(wrapper, 'input-box')
  inputBox.simulate('change', { targert: { value: 'train' } })
  const submitButton = findByTestAttr(wrapper, 'submit-button')
  submitButton.simulate('click', { preventDefault() {}})

  return wrapper
}

describe('no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    })
  })
  test('creates GuessedWords table with one row', () => {
    const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsRows).toHaveLength(1)
  })
})

describe('some words have guessed', () => {
  
})

describe('guess the secret word', () => {
  
})