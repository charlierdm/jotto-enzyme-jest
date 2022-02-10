import {mount} from "enzyme"
import {findByTestAttr, storeFactory} from '../test/testUtils'
import App from './App'

import {getSecretWord as mockGetSecretWord} from "./actions"
import { Provider } from "react-redux"

// activate global mock to make sure getSecretWord doesn't make a network call
jest.mock('./actions')

const setup = () => {
  // use mount because useEffect isn't called with shallow
  const store = storeFactory()
  return mount(<Provider store={store}><App /></Provider>)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1)
})

describe('get secret word from api', () => {
  beforeEach(() => { 
    mockGetSecretWord.mockClear()
  })
  test('get secret word on app mount', () => {
    const wrapper = setup()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup()
    mockGetSecretWord.mockClear()
    // use setProps because update() does not trigger useEffect
    wrapper.setProps()

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
  })
})