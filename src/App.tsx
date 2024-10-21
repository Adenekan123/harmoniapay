import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Signin, SignUp } from "./routes/auth";
import { AuthLayout, DashboardLayout } from "./routes/_layouts";
import Dashboard from "./routes/dashboard";
import Account from "./routes/accounts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route index path="/" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Account />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
