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
       
        <div className="create-container">
      <h1 className="create-title">Place Your Cake Order</h1>
      <form onSubmit={sendData} className="create-form">
        <div>
          <input
            className="form-input"
            placeholder="Enter your cake name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-input"
            placeholder="Enter cake weight (in kg/gm)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
    </div>
    )
}

export default Create