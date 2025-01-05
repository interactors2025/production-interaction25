import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Login from "./Components/Login/Login";
import Schedule from "./Components/Schedule/Schedule";
import DeveloperList from "./Components/DeveloperList/DeveloperList";
import Teacher from "./Components/Teachers/Teacher";
import OtherForm from "./Components/others/form";
import AdminLogin from "./Components/AdminDashboard/LoginAdmin";
import Dashboard from "./Components/AdminDashboard/Dashboard";
import ProtectedRoute from "./Components/AdminDashboard/ProtectedRoute";

const Layout = ({ children }) => {
  const location = useLocation();

  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";
  const isAdminLogin = location.pathname === "/adminlogin";
  const isAdminDashboard = location.pathname === "/admindashboard";

  return (
    <>
      {!isRegisterPage && !isLoginPage}
      {!isRegisterPage &&
        !isLoginPage &&
        !isAdminLogin &&
        !isAdminDashboard && <Navbar />}

      {children}
      {!isRegisterPage &&
        !isLoginPage &&
        !isAdminLogin &&
        !isAdminDashboard && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/DeveloperList" element={<DeveloperList />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/form" element={<OtherForm />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
