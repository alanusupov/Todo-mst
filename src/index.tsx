import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TaskStore from "./models/TaskStore";

const store = TaskStore.create({});
// makeInspectable(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
