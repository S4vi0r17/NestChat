import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/" element={<Navigate to="/register" />} />
            </Routes>
        </Router>
    );
};

export default App;
