import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title}) => {
  const btnClick = (e) => {
    console.log(e)
  }
  
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button color="black" text="Add" onClick={btnClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const headingStyle = {
  color: "red", backgroundColor: "black"
}

export default Header