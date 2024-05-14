import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import IndexPage from "./components/IndexPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<IndexPage />} />
      <Route path="accounts/">
        <Route path="login/" element={<LoginForm />} />
        <Route path="register/" element={<RegistrationForm />} />
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
