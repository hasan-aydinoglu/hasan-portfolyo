import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/lion-logo.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <header className="header">
        <h1>Hello, I'm Hasan 👋</h1>
        <p>My first web project developed with React</p>
      </header>

      <main className="main-content">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/hasan.jpg`} alt="Hasan" className="profile-img" />
        </div>
        <p>This page is completely mine and was created from scratch.</p>

        <button onClick={incrementCount} className="btn">
          Click me
        </button>
        <p>You clicked the button {count} times.</p>

        <a
          href="https://github.com/hasan-aydinoglu?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn link-btn">Go to my GitHub</button>
        </a>
      </main>

      <footer className="footer">
        <p>Designed and built by Hasan Aydınoglu</p>
      </footer>
    </div>
  );
}
