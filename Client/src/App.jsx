import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import SignIn from './Components/Pages/login';
import SignUp from './Components/Pages/SignUp';
import Profile from './Components/Pages/reset-password';
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
          <Route path='/reset-password' element={<Profile />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );

}
