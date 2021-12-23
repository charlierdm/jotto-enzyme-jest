import React from 'react'
import propTypes from 'prop-types'

const GuessedWord = (props) => {
  let contents
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions' >
        Try to guess the secret word...
      </span>
    )
  }
  return (
    <div data-test='component-guessed-words'>
      { contents }
    </div>
  )
}

GuessedWord.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired
}

export default GuessedWord