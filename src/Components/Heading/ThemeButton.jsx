import React from "react";
import { Button } from "react-bootstrap";

function ThemeButton(props) {
  function handleClick() {
    if (props.isDark) {
      props.onClick(false);
    } else {
      props.onClick(true);
    }
  }
  return (
    <Button
      className="themeButton"
      variant={props.isDark ? "light" : "dark"}
      size="sm"
      onClick={handleClick}
    >
      {props.isDark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default ThemeButton;
