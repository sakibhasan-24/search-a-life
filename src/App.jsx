import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Statitistics from "./components/Statitistics";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "/statistics", element: <Statitistics /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
