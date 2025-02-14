import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import SignUp from "./screen/signUp";
import Login from "./screen/login";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import CreateInvoice from "./screen/create-invoice/create-invoice";

import CardList from "./screen/invoicesList/invoiceList";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && (
        <>
          <Sidebar onLogout={handleLogout} />
          <Navbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route
          path="/Login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/SignUp"
          element={<SignUp onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/CreateInvoice"
          element={
            isAuthenticated ? <CreateInvoice /> : <Navigate to="/Login" />
          }
        />

        <Route
          path="/CardList"
          element={
            isAuthenticated ? <CardList /> : <Navigate to="/Login" />
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
