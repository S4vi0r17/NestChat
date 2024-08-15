import React, { useState } from 'react';

const MessagesSection: React.FC = () => {
    const user = "Usuario1"; // Usuario actual
    const [messages, setMessages] = useState([
        { user: "Usuario1", message: "Hola, ¿cómo estás?" },
        { user: "Usuario2", message: "Todo bien, ¿y tú?" }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { user, message: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto mb-4">
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.user === user ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-xs p-3 rounded-lg shadow-md ${msg.user === user ? 'bg-indigo-600' : 'bg-gray-700'}`}>
                                <p>{msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 p-3 rounded-lg bg-gray-800 border-none focus:ring-2 focus:ring-indigo-500 mr-2"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-500 transition"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default MessagesSection;
