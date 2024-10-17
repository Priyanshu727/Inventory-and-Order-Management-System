import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Call your logout function (clear tokens, etc.)
        onLogout();
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-lg font-bold">Inventry App</Link>
                    <Link to="/orders" className="hover:underline">Orders</Link>
                    <Link to="/products" className="hover:underline">Products</Link>
                </div>
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <button onClick={handleLogout} className="hover:underline">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="hover:underline">Register</Link>
                            <Link to="/login" className="hover:underline">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
