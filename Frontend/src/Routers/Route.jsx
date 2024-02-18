import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Home, About, Contact } from "../Components/index.js";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";
import Logout from "../Components/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
