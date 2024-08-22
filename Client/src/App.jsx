import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Profile from './Components/Pages/Profile';
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
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sing up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );

}
