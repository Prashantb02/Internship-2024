import React, { useState,useEffect } from 'react'
const Update = ()=>{
const [name,setName]=useState
const { id } = useParams();
const navigate = useNavigate();
useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get(`https://6777b12f80a79bf919029627.mockapi.io/yes/cake/${id}`);
      setName(res.data.name);
      setWeight(res.data.weight);
    };
    fetchOrder();
  }, [id]);


    const updateData= async(e)=>{
        e.preventDefault()
        // console.log(name,weight)
//         await axios.post('https://6777b12f80a79bf919029627.mockapi.io/yes/cake',{name:name,weight:weight})
// alert('apka order place ho gya h👍')
    alert('Order updated successfully! 🎂');
    navigate('/');

    }
    return(
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Update Order</h1>
      <form onSubmit={updateData} className="space-y-4">
        <div className="space-y-2">
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            placeholder="Enter your cake name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            placeholder="Enter cake weight (in kg/gm)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
        >
          Update Order
        </button>
      </form>
    </div>
    )
}

export default Update