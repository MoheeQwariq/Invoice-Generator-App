import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "./screen/signUp";
import Login from "./screen/login";
import Navbar from "./components/navbar/navbar";
import CreateInvoice from "./screen/create-invoice/create-invoice";
import Sidebar from "./components/sidebar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && (
        <>
          <Sidebar />
          <Navbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CreateInvoice" element={isAuthenticated ? <CreateInvoice /> : <Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
};

export default App;
