import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/globalStyle";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
