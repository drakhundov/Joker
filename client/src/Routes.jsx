import { Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import JokePage from "./pages/JokePage.jsx";

export const routerParams = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Navigate to="/joke" /> },
      { path: "joke", element: <JokePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
];
