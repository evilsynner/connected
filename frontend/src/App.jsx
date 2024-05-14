import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import IndexPage from "./components/IndexPage";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<IndexPage />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
