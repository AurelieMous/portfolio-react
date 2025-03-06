import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./provider";

import "./styles/globals.css";
import { MediaQueryProvider } from "./context/mediaQueryContext";
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Provider>
        <MediaQueryProvider>
          <App />
        </MediaQueryProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
