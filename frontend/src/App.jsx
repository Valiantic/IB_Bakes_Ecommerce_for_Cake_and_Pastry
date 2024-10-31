
import './App.css'
import './index.css'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
