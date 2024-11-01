
// pages
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPasssword from './pages/ForgotPasssword';
import ResetPassword from './pages/ResetPassword';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
