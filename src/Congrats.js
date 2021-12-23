import React from 'react'

export default function Congrats({ success }) {
    if (success) {
      return (
        <div data-test='component-congrats'>
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