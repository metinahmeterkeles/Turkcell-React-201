import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/dashboards/Home";
import Users from "./pages/dashboards/Users";
import Contact from "./pages/dashboards/contact";

import "./App.css";
import UserDetail from "./pages/dashboards/UserDetail";
import Login from "./pages/auth/Login";
import DashboardLayout from "./layout/Dashboard";
import AuthLayout from "./layout/Auth";
import Register from "./pages/auth/Register";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
