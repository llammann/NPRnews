import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redux
import { store } from "./redux/store/Store.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
 <>
  <Provider store={store}>
    <App />
  </Provider>
 </>
);
