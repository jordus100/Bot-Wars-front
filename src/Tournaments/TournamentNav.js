import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './TournamentNav.scss';

function TournamentNav() {
    return (
        <>
            <div className="user-info-strip">
                <div className="userData">
                    <Link to="/">  <span className="username">Username</span> </Link>
                    <span className="score">1234</span>
                </div>
                <div className="icons">
                    {/* <i className="icon-settings"></i> */}
                    <span className="score">set</span>
                </div>
            </div>
            <nav className="tournament-nav">
                <NavLink exact className="nav-item" activeClassName="active" to="/tournaments/home">Tournaments</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/tournaments/leaderboard">Leaderboard</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/tournaments/add">Add Tournament</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/tournaments/help">Help</NavLink>
                <NavLink exact className="nav-item" activeClassName="active" to="/">Home</NavLink>

            </nav>
        </>
    );
}

export default TournamentNav;
