import logo from './logo.svg';
import './App.css'

function App() {
    return (
        <body>
        <div id="title">
            <div className="title">
                <h1>Bot-Wars</h1>
            </div>
            <div className="container">
                <div className="login">
                    <div className="col-6">
                        <a href="login.html">
                            <button className="btn">Login</button>
                        </a>
                    </div>
                    <div className="col-6">
                        <a href="register.html">
                            <button className="btn">Register</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="menu-bar" className="container">
            <div className="col-3">
                <a href="index.html">
                    <button className="btn">Home</button>
                </a>
            </div>
            <div className="col-3">
                <a href="leaderboard.html">
                    <button className="btn">Leaderboard</button>
                </a>
            </div>
            <div className="col-3">
                <a href="games/games">
                    <button className="btn">Rules</button>
                </a>
            </div>
            <div className="col-3">
                <a href="about.html">
                    <button className="btn">About</button>
                </a>
            </div>
        </div>
        </body>
    )
}

export default App
