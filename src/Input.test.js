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

const setup = (success=false, secretWord='party') => {
  return shallow(<Input success={success} secretWord={secretWord} />)
}

describe('render', () => {

  describe('success is true', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup(true)
    })

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('the input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false)
    })

    test('the submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(false)
    })
  })

  describe('success is false', () => {
    let wrapper
    
    beforeEach(() => {
      wrapper = setup(false)
    })

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('the input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(true)
    })

    test('the submit button shows', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(true)
    })
  })
})

test('it does not give a warning when passed the correct props', () => {
  checkProps(Input, { secretWord: 'party' })
})

describe('state controlled input field', () => {
  let wrapper

  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    wrapper = setup()
  })

  test('state updates with value of the input box upon change', () => {  
    const inputBox = findByTestAttr(wrapper, 'input-box')
    const mockEvent = { target: { value: 'train' }}
    inputBox.simulate('change', mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('the input box is cleared upon clicking the submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault: () => {}})
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1)
  })
})