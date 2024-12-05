import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import PrivateLayout from "../layout/PrivateLayout";
import Declarations from "../pages/Declarations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            path: "declarations",
            element: <Declarations />,
          },
        ],
      },
    ],
  },
]);

export { router };