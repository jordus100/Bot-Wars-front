import { useEffect, useState} from 'react';
import './App.scss'
import User from "./User/User";
import {Link} from "react-router-dom";
import About from './about';

function Content(mode) {
    if (mode === 'home') {
        return <div>Home</div>
    } else if (mode === 'tournaments') {
        return <div>Tournaments</div>
    } else if (mode === 'games') {
        return <div>Games</div>
    } else if (mode === 'about') {
        return <About/>
    } else {
        return <div>Home</div>
    }

}

function App(props) {
    const {mode} = props
    const [content, setContent] = useState('home')

    useEffect(() => {
        setContent(Content(mode))
    }, [mode])

    return (
        <div className="app">
            <div className='topper'>
                <div className="title">
                    <h1>Bot-Wars</h1>
                    <div className="login-btns">
                        <User isLoggedIn={false}/>
                    </div>
                </div>
                <div className="menu-btns">
                    <div className="menu-btn">
                        <Link to="/" replace={true}>
                            <button className="btn">Home</button>
                        </Link>
                    </div>
                    <div className="menu-btn">
                        <Link to="/tournaments" replace={true}>
                            <button className="btn">Tournaments</button>
                        </Link>
                    </div>
                    <div className="menu-btn">
                        <Link to="/games" replace={true}>
                            <button className="btn">Games</button>
                        </Link>
                    </div>
                    <div className="menu-btn">
                        <Link to="/about" replace={true}>
                            <button className="btn">About</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}

export default App
