import "./App.css";
import Navbar from "./components/Navbar";
import RoutingApp from "./components/RoutingApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen min-h-screen overflow-x-hidden bg-gray-50">
        <Navbar />
        <RoutingApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
