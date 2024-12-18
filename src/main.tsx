import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </HashRouter>
);
