import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Home, About, Contact, Shop , Blog} from "../Components/index.js";

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
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ],
  },
]);

export default router;
