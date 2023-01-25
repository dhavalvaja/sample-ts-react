import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error.data);

  return (
    <div className="container">
      <h1 className="alert alert-danger text-center">{error.status}</h1>
      <h1 className="alert alert-danger text-center">{error.data}</h1>
    </div>
  );
}
