// src/components/NaturalDisasters.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NaturalDisasters() {
    const [disasters, setDisasters] = useState([]);
    const [newDisasterName, setNewDisasterName] = useState('');
    const [newDisasterDate, setNewDisasterDate] = useState('');
    const [newDisasterDesc, setNewDisasterDesc] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchDisasters();
    }, []);

    const fetchDisasters = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:4010/api/user/disasters', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setDisasters(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch disasters:", error);
            setLoading(false);
        }
    };

    const handleAddDisaster = async (event) => {
        event.preventDefault();
        if (!newDisasterName) return;

        try {
            const response = await axios.post('http://localhost:4010/api/user/disaster/add-disaster', {
                name: newDisasterName,
                description: newDisasterDate,
                date_occurred: newDisasterDate
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            setDisasters([...disasters, response.data]); // Assuming the backend returns the added disaster
            setNewDisasterName(''); // Reset input after submission
            fetchDisasters();
        } catch (error) {
            console.error("Failed to add disaster:", error);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold">Natural Disasters</h1>
            {loading ? (
                <p>Loading disasters...</p>
            ) : (
                <ul>
                    {disasters.map(disaster => (
                        <li key={disaster.id}>{disaster.name}</li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleAddDisaster}>
                <input
                    type="text"
                    value={newDisasterName}
                    onChange={(e) => setNewDisasterName(e.target.value)}
                    className="mt-3 block w-full px-4 py-2 border rounded-md shadow-sm"
                    placeholder="New disaster name"
                />
                <input
                    type="text"
                    value={newDisasterDesc}
                    onChange={(e) => setNewDisasterDesc(e.target.value)}
                    className="mt-3 block w-full px-4 py-2 border rounded-md shadow-sm"
                    placeholder="New disaster description"
                />
                <input
                    type="date"
                    value={newDisasterDate}
                    onChange={(e) => setNewDisasterDate(e.target.value)}
                    className="mt-3 block w-full px-4 py-2 border rounded-md shadow-sm"
                    placeholder="New disaster date"
                />
                <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add Disaster
                </button>
            </form>
        </div>
    );
}

export default NaturalDisasters;
