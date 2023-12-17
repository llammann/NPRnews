import "./App.css";
// import UserNavbar from "./layout/UserNavbar";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routes } from "./routes";

const router = createBrowserRouter(Routes);
function App() {
  return (
    <>
      {/* <UserNavbar /> */}
      {/* <h1>Salamamaljknk;j</h1> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
