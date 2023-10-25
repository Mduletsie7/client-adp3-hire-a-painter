import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AdminPage from "./pages/Admin";
import Hire from "./pages/Hire";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import ManagePainters from "./pages/ManagePainters";
import AddPainter from "./pages/AddPainter";
import Form from "./components/Form";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";


const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "hire",
      element: <Hire />,
    },
    {
      path: "admin",
      element: <AdminPage />,
    },
    {
      path: "managePainters",
      element: <ManagePainters />,
    },
    {
      path: "addPainter",
      element: <Form />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default Main;
