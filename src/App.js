import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div
      className="container"
      style={{
        backgroundColor: '#f0f0f0', // Daha açık bir arka plan
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <header className="header" style={{ marginTop: '30px' }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>Hello, I'm Hasan 👋</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>My first web project developed with React</p>
      </header>

      <main className="main-content" style={{ padding: '20px' }}>
        <div className="image-wrapper" style={{ marginBottom: '20px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/hasan.jpg`}
            alt="Hasan"
            className="profile-img"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '5px solid #fff',
            }}
          />
        </div>
        <p style={{ fontSize: '1.1rem', color: '#333' }}>
          This page is completely mine and was created from scratch.
        </p>

        <button
          onClick={incrementCount}
          className="btn"
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Click me
        </button>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          You clicked the button {count} times.
        </p>

        <a
          href="https://github.com/hasan-aydinoglu?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn link-btn"
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#008CBA',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#007bb5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#008CBA'}
          >
            Go to my GitHub
          </button>
        </a>
      </main>

      <footer className="footer" style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Designed and built by Hasan Aydınoglu
        </p>
      </footer>
    </div>
  );
}
