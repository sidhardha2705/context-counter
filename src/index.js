import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./components/theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
