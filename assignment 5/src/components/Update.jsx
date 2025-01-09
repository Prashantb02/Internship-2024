import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Update = () => {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await axios.get(`https://6777b12f80a79bf919029627.mockapi.io/yes/cake/${id}`);
                setName(res.data.name);
                setWeight(res.data.weight);
            } catch (error) {
                console.error('Error fetching order:', error);
                alert('Error loading order details');
            }
        };
        fetchOrder();
    }, [id]);

    const updateData = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://6777b12f80a79bf919029627.mockapi.io/yes/cake/${id}`, {
                name: name,
                weight: weight
            });
            alert('Order updated successfully! 🎂');
            navigate('/');
        } catch (error) {
            console.error('Error updating order:', error);
            alert('Error updating order');
        }
    };

    return (
        <div className="update-container">
            <h1 className="update-title">Update Order</h1>
            <form onSubmit={updateData} className="update-form">
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Enter your cake name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Enter cake weight (in kg/gm)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="update-button"
                >
                    Update Order
                </button>
            </form>
        </div>
    );
};

export default Update;