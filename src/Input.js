import React, { useState } from "react"
import propTypes from "prop-types"

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('')
  
  if (success) {
    return <div data-test='component-input' />
  } else {
    return (
      <div data-test='component-input'>
        <form className='input-form'>
          <input
            data-test='input-box'
            className="input-box"
            type='text'
            placeholder="enter guess"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
          />
          <button 
            data-test='submit-button' 
            type="submit" 
            onClick={(e) => {
              e.preventDefault()
              setCurrentGuess('')
              }
            }
          >
          Submit
          </button>
        </form>
      </div>
    )
  }
}

Input.propTypes = {
  secretWord: propTypes.string.isRequired
}

export default Input