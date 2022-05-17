import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Login from '../src/pages/Login/Login'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
