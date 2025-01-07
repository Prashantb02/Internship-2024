import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Create = () => {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')

    const sendData = async (e) => {
        e.preventDefault()
        // console.log(name,weight)
        await axios.post('https://6777b12f80a79bf919029627.mockapi.io/yes/cake', { name: name, weight: weight })
        alert('Your Order has been placed successfully😊🎂')

    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Place Your Cake Order</h1>
      <form onSubmit={sendData} className="space-y-4">
        <div className="space-y-2">
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your cake name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter cake weight (in kg/gm)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
        >
          Place Order
        </button>
      </form>
    </div>
    )
}

export default Create