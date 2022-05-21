import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Login from '../src/pages/Login/Login'
import Appointment from './pages/Appointment/Appointment';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/DashBoard/DashBoard';
import MyAppointments from './pages/DashBoard/MyAppointments';
import MyReview from './pages/DashBoard/MyReview';
import MyHistory from './pages/DashBoard/MyHistory';
import RequireAdmin from './pages/Login/RequireAdmin';
import Users from './pages/DashBoard/Users';
import AddDoctor from './pages/DashBoard/AddDoctor';
import ManageDoctor from './pages/DashBoard/ManageDoctor';
import Payment from './pages/DashBoard/Payment';

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
        <Route path="dashboard" element={<RequireAuth><DashBoard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctor/></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
