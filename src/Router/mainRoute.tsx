import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Resetpassword from "../Pages/Auth/ResetPassword";
import ChangePassword from "../Pages/Auth/ChangePassword";
import MessagePage from "../Pages/screen/MessagePage";
import AlternatePage from "../Pages/screen/AlternatePage";
import NewProfile from "../components/alternate/NewProfile";
import Settings from "../components/alternate/Settings";
import Projects from "../components/alternate/Projects";
import Campaign from "../components/alternate/Campaign";
import CheckOut from "../components/alternate/Checkout";
import CheckOutPage from "../components/alternate/CheckOutPage";
import ErrorScreen from "../error/js/Error";
import DetailedScreen from "../Pages/screen/DetailedScreen";
import PrivateRouter from "./PrivateRouter";

export const mainRoute = createBrowserRouter([
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <NewProfile />,
      },
      {
        index: true,
        path: "/profile/settings",
        element: <Settings />,
      },
      {
        index: true,
        path: "/profile/projects",
        element: <Projects />,
      },
      {
        index: true,
        path: "/profile/launch",
        element: <Campaign />,
      },
    ],
  },
  {
    path: "/",
    element: <AlternatePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:token/verify",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
  {
    path: "/change-user-password",
    element: <ChangePassword />,
  },
  {
    path: "/:token/reset-user-password",
    element: <ChangePassword />,
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
  {
    path: "/check-out-page",
    element: <CheckOutPage />,
  },
  {
    path: "*",
    element: <ErrorScreen />,
  },
  {
    path: "/detailed",
    element: <DetailedScreen />,
  },
]);
