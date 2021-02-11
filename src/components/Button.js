import PropTypes from "prop-types";

const Button = ( { color, text, btnClick} ) => {
  
  
  return (
  <button onClick={btnClick} style={{backgroundColor: color}} className="btn">{text}</button>
  )
}

Button.defaultProps = {
  color: "steelblue",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button;