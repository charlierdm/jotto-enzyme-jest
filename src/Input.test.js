import react from "react";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from 'enzyme'
import Input from './Input'

const setup = () => shallow(<Input />)

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
})