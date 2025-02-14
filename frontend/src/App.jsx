import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";  // Import Login Page
import Signup from "./pages/Signup"; // Import Signup Page
import Navbar from "./components/Navbar"; // Ensure Navbar is imported
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Navbar /> 
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Projects />
              {/* <Testimonials /> */}
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
