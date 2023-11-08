import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
