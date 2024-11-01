
// pages
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPasssword from './pages/ForgotPasssword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { AuthProvider } from './authentication/AuthContext';
import PrivateRoute from './authentication/PrivateRoute';

function App() {

  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>

      <Route path="/admin" element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
      <Route path="/customer" element={<PrivateRoute><CustomerDashboard/></PrivateRoute>} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
    </AuthProvider>
    </>
  )
}

export default App
