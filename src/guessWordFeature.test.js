import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'

import App from './App'
import {findByTestAttr} from '../test/testUtils'

import {storeFactory} from '../test/testUtils'

// activate global mock to make sure getSecretWord doesn't make a network call
jest.mock('./actions')

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>)

  const inputBox = findByTestAttr(wrapper, 'input-box')
  inputBox.simulate('change', { target: { value: 'train' } })
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
  let wrapper
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
    })
  })
  test('creates a GuessedWords table with 2 rows', () => {
    const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsRows).toHaveLength(2)
  })
})

describe('guess the secret word', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{guessedWord: 'part', letterMatchCount: 4}]
    })
  // add value to input
  const inputBox = findByTestAttr(wrapper, 'input-box')
  inputBox.simulate('change', {target: {value: 'party'}})
  // submit secret word
  const submitButton = findByTestAttr(wrapper, 'submit-button')
  submitButton.simulate('click', {preventDefault() {}})
  })
  test('adds row to guessedWords table', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordRows).toHaveLength(3)
  })
  test('displays congrats component', () => {
    const congrats = findByTestAttr(wrapper, 'component-congrats')
    expect(congrats.text().length).toBeGreaterThan(0)
  })
  test('does not display input component', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.exists()).toBe(false)

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.exists()).toBe(false)
  })
})