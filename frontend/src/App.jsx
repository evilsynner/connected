import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<h1>Hello friend</h1>} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
