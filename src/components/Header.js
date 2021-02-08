import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title}) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button color="red" text="Add"/>
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