import React from 'react';
import ConnectionsSection from '../components/ConnectionsSection';
import MessagesSection from '../components/MessagesSection';

const ChatPage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
                <ConnectionsSection />
            </div>
            <div className="flex-1 bg-gray-900 p-4 flex flex-col">
                <MessagesSection />
            </div>
        </div>
    );
};

export default ChatPage;
