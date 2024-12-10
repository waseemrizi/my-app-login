import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add authentication logic here
    };

    const handleSignup = () => {
        alert('Redirecting to Signup Page...');
        // Add redirection logic here, e.g., React Router
        // history.push('/signup');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            {/* Signup Button */}
            <div className="signup-section">
                <p>Don't have an account?</p>
                <button
                    className="signup-button"
                    onClick={handleSignup}
                >
                    Signup
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
