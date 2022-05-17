import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Login from '../src/pages/Login/Login'
import Appointment from './pages/Appointment/Appointment';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
