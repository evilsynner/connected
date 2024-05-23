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

// import useAuthStore from "./stores/authStore";
// import isTokenExpired from "./utils/jwt";

// const { accessToken, refreshAccessToken, isAuthenticated } = useAuthStore((state) => ({
//     accessToken: state.accessToken,
//     refreshAccessToken: state.refreshAccessToken,
//     isAuthenticated: state.isAuthenticated,
//   }));


// useEffect(() => {
//     const interval = setInterval(() => {
//       if (isTokenExpired(accessToken)) {
//         refreshAccessToken();
//       }
//     }, 4 * 60 * 1000);
//     return () => clearInterval(interval);
//   }, [accessToken, refreshAccessToken]);


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
