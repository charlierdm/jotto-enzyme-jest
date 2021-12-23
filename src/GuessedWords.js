import React from 'react'
import propTypes from 'prop-types'

const GuessedWord = (props) => {
  return (
    <div />
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