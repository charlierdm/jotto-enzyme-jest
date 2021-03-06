import React from 'react'
import propTypes from 'prop-types'

const Congrats = ({ success }) => {
    if (success) {
      return (
        <div data-test='component-congrats' className='congrats'>
          <span data-test='congrats-message'>
            Congratulations! You guessed the word!
          </span>
        </div>
      )
    } else {
      return (
        <div data-test='component-congrats' />
      )
    }
}

Congrats.propTypes = {
  success: propTypes.bool.isRequired
}

export default Congrats