import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './Components/Header';


export default function App() {
  return (
    <BrowserRouter>
      {/* navebar */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}