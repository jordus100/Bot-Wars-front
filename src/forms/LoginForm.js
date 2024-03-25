import './AddGameForm.scss'
import './Form.scss'
import React, { useState } from "react";
import {UserService} from "../services/UserService";

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UserService.loginUser(email, password)
        } catch (e) {
            setMessage('There was a problem with the registration.')
        }
    };

    return (
        <div className="add-game-form">
            <div className="form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
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
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            minLength="2" // change (just for development)
                            required
                        />

                    </div>
                    <div className="form-group actions">
                        <button type="submit" className="submit">Login</button>

                        <button onClick={() => window.history.back()}type="button" className="cancel">Cancel</button>
                    </div>
                </form>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default RegisterForm
