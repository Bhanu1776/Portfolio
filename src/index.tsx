import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";
import {Analytics} from '@vercel/analytics/react'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = {
  colors: {
    bg: "#0000",
    heading: "rgb(24 24 29)",
    text: "rgb(24 24 29)",
    black: " #212529",
  },
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <App />
    </ThemeProvider>
    <Analytics />
  </React.StrictMode>
);

reportWebVitals(console.log);
