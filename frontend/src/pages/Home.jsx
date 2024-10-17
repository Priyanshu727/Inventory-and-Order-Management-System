import React, { useEffect, useState } from 'react';

const Home = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                // Direct API call for workouts
                const ordersRes = await fetch('http://localhost:8081/api/order', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const ordersData = await ordersRes.json();

                // Direct API call for goals
                const productsRes = await fetch('http://localhost:8081/api/products', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const productsData = await productsRes.json();

                setOrders(ordersData);
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 mt-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome to Inventery and Order Management</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-10">
                <h2 className="text-2xl font-semibold mb-4">Order</h2>
                {orders.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                        {orders.map((orders) => (
                            <li key={orders._id} className="text-lg text-gray-700">{orders.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No orders available</p>
                )}
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Products</h2>
                {products.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                        {products.map((goal) => (
                            <li key={products._id} className="text-lg text-gray-700">{products.description}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No products available</p>
                )}
            </div>
        </div>
    );
};

export default Home;
