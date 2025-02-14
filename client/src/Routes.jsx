import Layout from "./Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import JokePage from "./pages/JokePage.jsx";

export const routerParams = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "about", element: <AboutPage /> },
      { path: "joke", element: <JokePage /> },
    ],
  },
];
