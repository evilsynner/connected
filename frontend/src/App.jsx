import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import IndexPage from "./components/IndexPage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<IndexPage />} />
      <Route path="accounts/">
        <Route path="login/" element={<LoginForm />} />
        <Route path="register/" element={<RegistrationForm />} />
      </Route>
      <Route path="home/"
        element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
