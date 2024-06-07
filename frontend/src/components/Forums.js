// src/components/Forums.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comment from '../assets/comment';

function Forums() {
    const [forums, setForums] = useState([]);
    const [newForumName, setNewForumName] = useState('');
    const [loading, setLoading] = useState(false);

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
        if (!newForumName) return;

        try {
            const response = await axios.post('http://localhost:4010/api/user/add-forum', {
                name: newForumName
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.data) {  // Check response has data
                setForums([...forums, response.data]); // Add new forum to list
                setNewForumName(''); // Clear form field
            }
        } catch (error) {
            console.error("Failed to add forum:", error);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold">Forums</h1>
            {loading ? (
                <p>Loading forums...</p>
            ) : (
                <ul>
                    {forums.map(forum => (
                        <li key={forum.id}>
                            {/* <Link to={`/forums/${forum.id}`}>{forum.name}</Link> */}
                            <div className='flex gap-4'>
                              {forum.title}
                              <Comment id={forum.id} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleAddForum}>
                <input
                    type="text"
                    value={newForumName}
                    onChange={(e) => setNewForumName(e.target.value)}
                    className="mt-3 block w-full px-4 py-2 border rounded-md shadow-sm"
                    placeholder="Enter new forum name"
                />
                <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add Forum
                </button>
            </form>
        </div>
    );
}

export default Forums;
