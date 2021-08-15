import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//Gives a rounded button as a base
const ButtonBase = withStyles(({ button }) => ({
  root: {
    borderRadius: button.borderRadius,
    fontWeight: button.fontWeight,
  },
}))(Button);

//Takes out color, button from theme object
const useStyles = makeStyles(({ color, button }) => ({
  normal: {
    backgroundColor: color.white,
    border: button.drawBorder(color.black),
    "&:hover": {
      backgroundColor: color.black,
      color: color.white,
    },
  },
  primary: {
    backgroundColor: color.pink,
    color: color.white,
    border: button.drawBorder("transparent"),
    "&:hover": {
      backgroundColor: color.purple,
    },
  },
}));

const ButtonComponent = ({ type, children, icon, onClick }) => {
  const classes = useStyles();

  return (
    <ButtonBase
      onClick={onClick}
      startIcon={icon}
      className={classes[type]}
      variant="outlined"
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonComponent;
