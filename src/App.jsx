import  './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {Login} from './Login';
import {SzallasList}  from './SzallasList';
import {Logout} from './Logout';

export const App = () => {

  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <div className='navbar-brand'>SzallasJWT</div>
          <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' 
          data-bs-target='#navbarNav'
          arial-controls='navbarNav'
          arial-expanded='false'
          arial-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span> 
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to={"/"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>Bejelentkezés</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to={"/SzallasList"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>Szállás lista</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to={"/Logout"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>Kijelentkezés</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/szallasok" element={<SzallasList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </Router>
  )
}

