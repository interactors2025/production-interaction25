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
import CoordinatorSection from "./Components/CoordinatorSection/CoordinatorSection";
import Schedule from "./Components/Schedule/Schedule";
import DeveloperList from "./Components/DeveloperList/DeveloperList";
import Teacher from "./Components/Teachers/Teacher";
import Form from "./Components/Form/Form";
import OtherForm from "./Components/others/form";

// A wrapper component to conditionally render Header and Navbar
const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is not "/register"
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";
  const isCoordinator = location.pathname === "/coordinator";

  return (
    <>
      {!isRegisterPage && !isLoginPage && !isCoordinator}
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
          <Route path="/coordinator" element={<CoordinatorSection />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/DeveloperList" element={<DeveloperList />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/other" element={<OtherForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
