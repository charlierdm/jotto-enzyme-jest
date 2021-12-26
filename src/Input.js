import React, { useState } from "react"
import propTypes from "prop-types"

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('')
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
        <button data-test='submit-button' type="submit" >Submit</button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: propTypes.string.isRequired
}

export default Input