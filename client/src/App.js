import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Profile from "./components/Profile";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={ <div> <Navbar/> <Dashboard/> </div> } />
        <Route path="/profile" element={<div> <Navbar/> <Profile /> </div>} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;