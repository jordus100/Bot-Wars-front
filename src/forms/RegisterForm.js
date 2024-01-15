import './AddGameForm.scss'
import './Form.scss'
import React, { useState } from "react";

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

        // Check if passwords match and update passwordsMatch state
        setPasswordsMatch(e.target.value === repeatPassword);
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);

        // Check if passwords match and update passwordsMatch state
        setPasswordsMatch(e.target.value === password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Construct the request payload
        const payload = {
            email: email,
            login: name,
            password: password,
            roleId: 1,
            isBanned: false,
            points: 0
        };

        try {
            const response = await fetch('http://localhost:8080/api/Player/register', { // !!!! << solution IMPORTANT CROS PROBLEM !!!!
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const contentType = response.headers.get('content-type');

            if (response.ok) {
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    const data = await response.json();
                    console.log('User registered:', data);
                    // Handle success here
                } else {
                    const text = await response.text();
                    console.error('Non-JSON response received:', text);
                    // Handle non-JSON responses here, possibly an HTML error page
                }
            } else {
                // Non-2xx response, handle error
                const errorText = await response.text();
                console.error('Registration error:', errorText);
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Network error or other issue:', error);
            alert('Registration failed due to a network error or server issue.');
        }
    };

    return (
        <div className="add-game-form">
            <div className="form">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your username"
                            maxLength="30"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    <div className="form-group ">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange} // Not the best way to handle those passwords :/
                            placeholder="Enter your password"
                            minLength="8" // Set minimum length for password
                            required
                        />

                    </div>

                    <div className="form-group ">
                        <label htmlFor="repeatPassword">Repeat password</label>
                        <input
                            type="password"
                            id="repeatPassword"
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                            placeholder="Repeat your password"
                            required
                        />

                    </div>

                    {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}

                    <div className="form-group actions">
                        {passwordsMatch && <button type="submit" className="submit">Register</button>}

                        <button type="button" className="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm