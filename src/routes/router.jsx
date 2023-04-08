import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import NoPage from "^/NoPage";
import App from "^/App";
import About from "^/About";
import Contact from "^/Contact";
import SingleUser from "../pages/SingleUser";
import AddUser from "^/AddUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NoPage />,
    children: [
      {
        path: "/",
        element: <App />,
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
        path: "/users/:id",
        element: <SingleUser />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
]);

export default router;
