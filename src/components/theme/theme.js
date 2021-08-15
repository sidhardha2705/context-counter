import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  color: {
    white: "white",
    black: "black",
    pink: "hotpink",
    purple: "rebeccapurple",
  },
  button: {
    borderRadius: "20px",
    fontWeight: "400",
    drawBorder: function (color) {
      return `1px solid ${color}`;
    },
  },
});
