import react from "react"
import propTypes from "prop-types"

const Input = ({ secretWord }) => {
  return (
    <div data-test='component-input'>
    </div>
  )
}

Input.propTypes = {
  secretWord: propTypes.string.isRequired
}

export default Input