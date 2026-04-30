import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { light } from "../scss/MaterialTheme";

const App = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));
  // Socket.io, Redux, Mui ....
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
