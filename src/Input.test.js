import react from "react";
import { checkProps, findByTestAttr } from "../test/testUtils";
import { shallow } from 'enzyme'
import Input from './Input'
import React from "react";

const mockSetCurrentGuess = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialGuess) => [initialGuess, mockSetCurrentGuess] 
}))

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
})

test('it does not give a warning when passed the correct props', () => {
  checkProps(Input, { secretWord: 'party' })
})

describe('state controlled input field', () => {
  let wrapper
  let inputBox
  let mockEvent

  beforeEach(() => {
    wrapper = setup()
    inputBox = findByTestAttr(wrapper, 'input-box')
    mockEvent = { target: { value: 'train' }}
    inputBox.simulate('change', mockEvent)
  })

  test('state updates with value of the input box upon change', () => {  
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('the input box is cleared upon clicking the submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click')
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})