import React, { useContext } from "react";
import { CounterContext } from "../../store/store";
import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../ui-components/button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { DecreaseCount, IncreaseCount } from "../../store/actions/actions";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "2rem 0",
  },
}));

function Counter() {
  const { count, counterDispatch } = useContext(CounterContext);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ButtonComponent
        onClick={() => {
          counterDispatch(DecreaseCount());
        }}
        icon={<RemoveIcon />}
        type="normal"
      >
        Decrement
      </ButtonComponent>
      <Typography variant="overline">Counter: {count}</Typography>
      <ButtonComponent
        onClick={() => {
          counterDispatch(IncreaseCount());
        }}
        icon={<AddIcon />}
        type="primary"
      >
        Increment
      </ButtonComponent>
    </div>
  );
}

export default Counter;
