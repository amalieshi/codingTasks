import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// Importing the components
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
// Import the ThemeProvider
import { ThemeProvider } from "./ThemeContext";

// Create a browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  
]);
// Render the router wrapped in the ThemeProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the router in ThemeProvider */}

    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);