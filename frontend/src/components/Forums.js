// src/components/Forums.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comment from '../assets/comment';

function Forums() {
    const [forums, setForums] = useState([]);
    const [newForumName, setNewForumName] = useState('');
    const [newForumDesc, setNewForumDesc] = useState('');
    const [loading, setLoading] = useState(false);
    const userId = localStorage.getItem('userId');  // Assuming the user's ID is stored in localStorage

    useEffect(() => {
        fetchForums();
    }, []);

    const fetchForums = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:4010/api/user/forums', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setForums(response.data);  // Assuming the data is an array of forums
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch forums:", error);
            setLoading(false);
        }
    };

    const handleAddForum = async (event) => {
        event.preventDefault();
        if (!newForumName || !newForumDesc) return;

        try {
            const response = await axios.post('http://localhost:4010/api/user/add-forum', {
                title: newForumName,
                description: newForumDesc,
                user_id: userId
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.data) { 
                setForums([...forums, response.data]);
                setNewForumName('');
                setNewForumDesc('');
            }
            fetchForums();
        } catch (error) {
            console.error("Failed to add forum:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Forums</h1>
            {loading ? (
                <p>Loading forums...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {forums.map(forum => (
                        <div key={forum.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{forum.title}</h3>
                                <p className="text-gray-600">{forum.description}</p>
                            </div>
                            <div className="ml-4">
                                <Comment id={forum.id} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <form onSubmit={handleAddForum}>
                <input
                    type="text"
                    value={newForumName}
                    onChange={(e) => setNewForumName(e.target.value)}
                    className="mt-3 block w-full px-4 py-2 border rounded-md shadow-sm"
                    placeholder="Enter new forum title"
                />
                <input
                    type="text"
                    value={newForumDesc}
                    onChange={(e) => setNewForumDesc(e.target.value)}
                    className="mt-3 block w-full px-4 py-2 border rounded-md shadow-sm"
                    placeholder="Enter new forum description"
                />
                <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Create Forum
                </button>
            </form>
        </div>
    );
}

export default Forums;
