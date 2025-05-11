import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/error-page";
import PrivateLayout from "@/layout/PrivateLayout";
import Declarations from "@/pages/Declarations";
import DeclarationEdit from "@/pages/DeclarationEdit";
import Requests from "@/pages/requests/Requests";
import RequestEdit from "@/pages/requests/RequestEdit";
import PublicLayout from "@/layout/PublicLayout";
import Login from "@/pages/account/Login";
import Profile from "@/pages/profiles/Profile";
import Notiffication from "@/pages/notiffications/Notiffication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={"/connexion"} />,
          },
          {
            index: true,
            path: "/connexion",
            element: <Login />,
          },
        ],
      },
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={"/private/declarations"} />,
          },
          {
            path: "declarations",
            element: <Declarations />,
          },
          {
            path: "declarations/nouvelle-declaration",
            element: <DeclarationEdit />,
          },
          {
            path: "demandes",
            element: <Requests />,
          },
          {
            path: "demandes/nouvelle-demande",
            element: <RequestEdit />,
          },
          {
            path: "/private/profiles",
            element: <Profile />,
          },
          {
            path: "/private/notifications",
            element: <Notiffication />,
          },
        ],
      },
    ],
  },
]);

export { router };