// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/pages/register.tsx";
import Login from "./components/pages/login.tsx";

function App() {
  return (
    // <BrowserRouter>
    //   <Register />
    //   {/* <Login /> */}
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
