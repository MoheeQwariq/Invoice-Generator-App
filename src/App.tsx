import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import { Sidebar } from "./components/sidebar/sidebar.component"

import CreateInvoice from "./Pages/create-invoice/create-invoice";

function App() {
  return <div className="App">
 <Sidebar/>
    <Navbar/>
    <CreateInvoice/>
  </div>;
}

export default App;
