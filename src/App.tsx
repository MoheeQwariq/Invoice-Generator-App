
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screen/LoginPage/LoginPage";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
      
            </Routes>
        </Router>
    );
};

export default App;