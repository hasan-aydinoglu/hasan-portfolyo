import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // Butona tıklandığında sayıyı artıran fonksiyon
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="container">
      <header className="header">
        <h1>Hello, I'm Hasan 👋</h1>
        <p>My first web project developed with React</p>
      </header>

      <main className="main-content">
        <div className="image-wrapper">
          <img src="/images/hasan.jpg" alt="Hasan" className="profile-img" />
        </div>
        <p>This page is completely mine and was created from scratch.</p>
        <button onClick={incrementCount} className="btn">
          Click me
        </button>
        <p>You clicked the button {count} times.</p>
      </main>

      <footer className="footer">
        <p>Designed and built by Hasan Aydınoglu</p>
      </footer>
    </div>
  );
}
