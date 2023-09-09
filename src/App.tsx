import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Signup/SIgnup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/ >} />
          <Route path="/signup" element={<SignUp/ >} />
          <Route path="/login" element={<Login/ >} />
          <Route path = "/profile" element={<Profile />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;