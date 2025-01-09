import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Read.css';

const Read = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        const res = await axios.get('https://6777b12f80a79bf919029627.mockapi.io/yes/cake');
        setOrders(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            await axios.delete(`https://6777b12f80a79bf919029627.mockapi.io/yes/cake/${id}`);
            getData();
        }
    };

    return (
        <div className="read-container">
            <h1 className="read-title">Current Orders</h1>
            <div className="table-container">
                <table className="orders-table">
                    <thead className="table-header">
                        <tr>
                            <th>Order ID</th>
                            <th>Cake</th>
                            <th>Weight</th>
                            <th colSpan="2" className="actions-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.name}</td>
                                <td>{order.weight}</td>
                                <td className="actions-cell">
                                    <button
                                        onClick={() => navigate(`/update/${order.id}`)}
                                        className="edit-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="actions-cell">
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        className="delete-button"
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
    );
};

export default Read;