import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Restaurants from "./components/pages/restaurants";
import Register from "./components/pages/register";
import Login from "./components/pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/restaurant" element={<Restaurants />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
