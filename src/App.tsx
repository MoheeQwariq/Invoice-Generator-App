import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./screen/signUp";
import Login from "./screen/login";
import CreateInvoice from "./screen/createInvoice";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import CardList from "./screen/invoicesList";
import { useUserContext } from "./provider";

const App = () => {
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Router>
      {state.loggedInUser && (
        <>
          <Sidebar onLogout={handleLogout} />
          <Navbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/CreateInvoice"
          element={
            state.loggedInUser ? <CreateInvoice /> : <Navigate to="/Login" />
          }
        />
        <Route
          path="/CardList"
          element={state.loggedInUser ? <CardList /> : <Navigate to="/Login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
