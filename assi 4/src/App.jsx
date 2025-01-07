import { useState } from 'react'
import './App.css'
//import { BrowserRouter } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import {  Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 py-8">
    <nav className="bg-white shadow-lg mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-purple-600">Sweet Delights</h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600 transition duration-200"
            >
              View Orders
            </Link>
            <Link
              to="/create"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200"
            >
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
