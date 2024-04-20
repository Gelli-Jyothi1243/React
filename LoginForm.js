import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const [showForm, setShowForm] = useState(false); // Track form visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user details from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === email && userData.password === password) {
      console.log('Login successful');
      setLoggedIn(true); // Update login status
      setShowForm(true); // Show the form after successful login
      // Clear the login fields
      setEmail('');
      setPassword('');
    } else {
      console.log('Email or password incorrect');
      // Handle incorrect email or password
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, including file upload
    console.log('Form submitted');
  };

  return (
    <div>
      
      {!loggedIn && (
        <form onSubmit={handleLogin}>
          <div>
          <h2>Login</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {!loggedIn && (
        <div>
          <Link to="/register">Register</Link>
        </div>
      )}
      
      {showForm && (
        <form onSubmit={handleSubmit}>
            <h1>Submit Form</h1>
          <div>
            <label>Email:</label>
            <input type="text" />
          </div>
          <div>
            <label>Full Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone No:</label>
            <input type="text" />
          </div>
          <div>
            <label>Password:</label>
            <input type="p" />
          </div>
          <div>
            <label>Upload File:</label>
            <input type="file" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
