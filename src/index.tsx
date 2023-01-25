import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewPokemon from "./components/ViewPokemon";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ViewPokemonByIdOrName from "./components/ViewPokemonByIdOrName";
import PokemonPage from "./PokemonPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PokemonPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "viewdetails/",
        element: <ViewPokemon />,
        errorElement: <ErrorPage />,
      },
      {
        path: "viewdetails/:nameOrId",
        element: <ViewPokemonByIdOrName />,
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
