import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error.data);

  return (
    <div className="">
      <h1 className="">{error.status}</h1>
      <h1 className="">{error.data}</h1>
    </div>
  );
}
