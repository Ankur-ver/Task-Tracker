
//Login Page (authenticate through localstorage)

import React, { useState } from 'react';
import { saveToLocalStorage } from '../utils/localstorage';
import '../styles/Login.css';

export default function Login({ setUsername }) {
  const [name, setName] = useState('');
//handlelogin function (helps in storing username for temporary)
  const handleLogin = () => {
    if (name.trim()) {
      saveToLocalStorage('username', name);
      setUsername(name);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box" > 
        <h1>Welcome!</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}