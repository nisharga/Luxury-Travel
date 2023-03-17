import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "<ErrorPage />",
    children: [
      {
        path: "contacts/:contactId",
        element: "<Contact />",
      },
    ],
  },
]);

export default Router;
