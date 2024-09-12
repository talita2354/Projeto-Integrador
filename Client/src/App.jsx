import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Dashboard from './Components/Pages/dashboard.jsx';
import Login from './Components/Pages/login';
import Register from './Components/Pages/register';
import Reset from './Components/Pages/reset-password';
import './global.css';
import Header from './Components/Header';
import Professional from './Components/Pages/professional';
import Developer from './Components/Pages/developer.jsx';
import Project from './Components/Pages/project';


export default function App() {
  return (
    <BrowserRouter>
      {/* navebar */}
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/reset-password' element={<Reset />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/professional' element={<Professional/>} />
          <Route path='/developer' element={<Developer/>} />
          <Route path='/project' element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );

}
