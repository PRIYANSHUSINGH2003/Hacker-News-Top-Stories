import React from 'react';
import TopStories from './TopStories'; // Import your TopStories component
import './App.css'; // Import the CSS file

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <h1 className="app-title">Hacker News Top Stories</h1>
                    </div>
                </nav>
            </header>
            <main className="app-main">
                <TopStories />
            </main>
        </div>
    );
}

export default App;
