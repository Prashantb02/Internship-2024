import { useState } from 'react'
import './App.css'
//import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
//import {  Routes, Route} from 'react-router-dom'
//import { Link } from 'react-router-dom'
function App() {
  

  return (
      <div className="main-container">
        <nav className="nav-container">
          <div className="nav-content">
            <div className="nav-flex">
              <h1 className="nav-title">Sweet Delights</h1>
              <div className="nav-links">
                <Link to="/" className="nav-link">
                  View Orders
                </Link>
                <Link to="/create" className="nav-button">
                  New Order
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
  )
}

export default App
