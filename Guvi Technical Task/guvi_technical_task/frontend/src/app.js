import logo from '../src/assets/logo.svg';
import '../src/css/app.css';
import Header from '../src/jsx/header';
import Home from '../src/jsx/home';
import Dashboard from '../src/jsx/dashboard';
import Login from '../src/jsx/login';
import Signup from './jsx/signup';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
function App() {
	const user = localStorage.getItem("token");

  return (
     <Router>
  <div className='container'>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  </div>
  </Router>
  );
}

export default App;
