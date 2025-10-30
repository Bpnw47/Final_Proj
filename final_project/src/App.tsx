import "./App.css";
import Navbar from "./components/Navbar";
import RoutingApp from "./components/RoutingApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <RoutingApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
