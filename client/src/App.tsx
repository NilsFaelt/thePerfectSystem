import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
