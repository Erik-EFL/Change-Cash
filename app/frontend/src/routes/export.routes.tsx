import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Home from '../pages/Home/index';
import Dashboard from '../pages/dashBoard';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register  />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
