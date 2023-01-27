import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AblilitiesPage from "./components/AblilitiesPage";
import ErrorPage from "./components/ErrorPage";
import PokemonPage from "./components/PokemonPage";
import ViewPokemon from "./components/ViewPokemon";
import HomePage from "./HomePage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PokemonPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "viewdetails/:nameOrId",
        element: <ViewPokemon />,
        errorElement: <ErrorPage />,
      },
      {
        path: "abilities",
        element: <AblilitiesPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
