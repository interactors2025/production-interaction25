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
import Admin from "./Components/Admin/Admin";
import AdminDashboard from "./Components/Admin/AdminDashboard";

const Layout = ({ children }) => {
  const location = useLocation();

  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isRegisterPage && !isLoginPage}
      {!isRegisterPage && !isLoginPage && <Navbar />}

      {children}
      {<Footer />}
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
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
