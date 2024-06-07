// src/components/EventModal.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Modal = ({ isOpen, onClose, id }) => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:4010/api/user/forum/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMessages(response.data);
        } catch (error) {
            console.error("Failed to fetch messages:", error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchMessages();
        }
    }, [id, isOpen]); // Include id and isOpen in the dependency array

    return isOpen && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-lg">&times;</button>
                <ul>
                    {messages.map(message => (
                        <li key={message.id}>
                            <div>{message.content}</div> {/* Corrected from messages.content to message.content */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
