import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Read = ()=>{
const [orders,setOrders]= useState([])

const getData = async()=>{
    const res = await axios.get('https://6777b12f80a79bf919029627.mockapi.io/yes/cake')
    //console.log(res.data)
    setOrders(res.data)
}

useEffect(()=>{
getData()
},[])

const deleted = async(id)=>{
    if (window.confirm('Are you sure you want to delete this order?')) {
        await axios.delete(`https://6777b12f80a79bf919029627.mockapi.io/yes/cake/${id}`);
        getData();
    }
}




    return(
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Current Orders</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Cake</th>
              <th className="px-6 py-3 text-left">Weight</th>
              <th className="px-6 py-3 text-center" colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.name}</td>
                <td className="px-6 py-4">{order.weight}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => navigate(`/update/${order.id}`)}
                    className="text-blue-600 hover:text-blue-800 px-2"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-600 hover:text-red-800 px-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Read