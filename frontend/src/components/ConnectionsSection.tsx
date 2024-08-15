import React from 'react';

const ConnectionsSection: React.FC = () => {
    const connections = ["Usuario2", "Usuario3", "Usuario4"];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Conexiones Activas</h2>
            <ul className="space-y-2">
                {connections.map((connection, index) => (
                    <li key={index} className="p-3 bg-gray-700 rounded-lg shadow">
                        {connection}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConnectionsSection;
