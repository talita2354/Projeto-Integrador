import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Login from './Components/Pages/login';
import Register from './Components/Pages/register';
import Reset from './Components/Pages/reset-password';
import './global.css';
import Header from './Components/Header';


export default function App() {
  return (
    <BrowserRouter>
      {/* navebar */}
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
          <Route path='/reset-password' element={<Reset />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );

}
