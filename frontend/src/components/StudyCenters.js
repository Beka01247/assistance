// src/components/StudyCenters.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudyCenters() {
    const [centers, setCenters] = useState([]);
    const [newCenterName, setNewCenterName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStudyCenters();
    }, []);

    const fetchStudyCenters = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:4010/api/user/study-centers', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCenters(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch study centers:", error);
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold">Study Centers</h1>
            {loading ? (
                <p>Loading study centers...</p>
            ) : (
                <ul>
                    {centers.map(center => (
                        <li key={center.id}>{center.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default StudyCenters;
