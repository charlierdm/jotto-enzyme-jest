import react from "react";
import { checkProps, findByTestAttr } from "../test/testUtils";
import { shallow } from 'enzyme'
import Input from './Input'

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