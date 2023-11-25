import './App.scss'
import User from "./User/User";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <div id="title">
                <div className="title">
                    <h1>Bot-Wars</h1>
                </div>
                <div className="menu-container">
                    <User isLoggedIn={false}/>
                </div>
            </div>
            <div id="menu-bar" className="container">
                <div className="col-3">
                    <Link to="index.html">
                        <button className="btn">Home</button>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="tournaments/add">
                        <button className="btn">Tournaments</button>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="games">
                        <button className="btn">Games</button>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="about.html">
                        <button className="btn">About</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default App
