import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routing";

function App() {
  const router = createBrowserRouter(routes, { basename: "/rtk-store-login" });

  return <RouterProvider router={router} />;
}

export default App;
