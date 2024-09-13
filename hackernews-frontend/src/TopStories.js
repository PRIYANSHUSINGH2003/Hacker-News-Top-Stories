import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TopStories.css';

const TopStories = () => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                // Set loading state
                setLoading(true);
                const response = await axios.get('http://localhost:8000/top-stories', { timeout: 10000 });
                console.log(response);
                
                // Check if data exists
                if (response.data && Array.isArray(response.data)) {
                    setStories(response.data);
                    setError('');
                } else {
                    setError("Invalid data format received from the API.");
                }
            } catch (err) {
                // setError("There was an error fetching the stories.");
                console.error("Error fetching stories:", err);
                if (err.response) {
                    console.error("Server responded with status:", err.response.status);
                    console.error("Response data:", err.response.data);
                } else if (err.request) {
                    console.error("Request made but no response received", err.request);
                } else {
                    console.error("Error setting up the request", err.message);
                }
            } finally {
                setLoading(false);  // Stop loading indicator
            }
        };

        fetchStories();
    }, []);

    return (
        <div className="top-stories-container">
            <h1 className="title">Top 10 Hacker News Stories</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <ul className="stories-list">
                {stories.map((story, index) => (
                    <li key={index} className="story-item">
                        <a className="story-title" href={story.url} target="_blank" rel="noopener noreferrer">
                            {story.title}
                        </a>
                        <div className="story-details">
                            <p className="story-author">Author: <span>{story.author}</span></p>
                            <p className="story-score">Score: <span>{story.score}</span></p>
                            <p className="story-time">Time: <span>{story.time}</span></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopStories;