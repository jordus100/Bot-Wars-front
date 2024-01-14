import './AddGameForm.scss'
import './Form.scss'
import React, {useState} from "react";

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

    return (
        <div className="add-game-form">
            <div className="form">
                <h1>Register</h1>
                <form>
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
                            onChange={handlePasswordChange}
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