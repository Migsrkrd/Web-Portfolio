import reactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import AboutMe from "./pages/aboutMe.jsx";
import Contact from "./pages/contact.jsx";
import Resume from "./pages/resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

reactDOM
  .createRoot(document.getElementById("root"))
  .render(<RouterProvider router={router} />);
