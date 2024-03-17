import React, { useState, useEffect } from "react";
import {PointsService} from "./services/PointsService";
function Leaderboard({isAuthenticated, user, login, logout }) {

    const [leaderboardsList, setLeaderboardsList] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchLeaderboardsData = async () => {
            try {
                const gl = await PointsService.getLeaderboards();
                setLeaderboardsList(gl.data.data);
            } catch (e) {
                setMessage('There was a problem with fetching leaderboards data.');
            }
        };

        fetchLeaderboardsData();
    }, []); 

    return (
        <div className="list">
            <h1>Leaderboard</h1>
            {console.log(leaderboardsList)}
            {leaderboardsList.map((player, index) => (
                        <div key={index} className="">
                            <div className="item-name color-primary-3">Gracz: {player.login} Punkty: {player.points}</div>
                        </div>
                    ))}
            <p>{message}</p>
        </div>
    );
}

export default Leaderboard;
