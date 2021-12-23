import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWords: 'train', letterMatchCount: 3 }]
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw a warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

test('renders without error', () => {

})