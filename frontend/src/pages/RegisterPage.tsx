import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [jwt, setJwt] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (jwt) {
            navigate('/chat');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Registro</h1>
                <input
                    type="text"
                    value={jwt}
                    onChange={(e) => setJwt(e.target.value)}
                    placeholder="Ingresa tu JWT"
                    className="w-full p-3 rounded-lg bg-gray-700 border-none mb-4 focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={handleRegister}
                    className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-500 transition"
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
