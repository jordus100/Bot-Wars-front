// src/Tournaments/AddTournamentForm.js
import React, { useState } from 'react';
import './Form.scss';

function AddTournamentForm() {
    // state hooks
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [gameType, setGameType] = useState('');
    const [playerLimit, setPlayerLimit] = useState('');
    const [date, setDate] = useState('');
    const [restrictions, setRestrictions] = useState([]);

    // Handle form submissions and updates here

    return (
        <div className="form">
            <h1>Dodaj nowy turniej</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <input 
                        type="text" 
                        placeholder="Tytuł (max 30 znaków)"
                        id="title" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        maxLength="30"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Opis</label>
                    <textarea 
                        id="description" 
                        placeholder="Opis (max 200 znaków)"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        maxLength="200"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gameType">Typ Gry</label>
                    <select 
                        id="gameType" 
                        value={gameType}
                        onChange={e => setGameType(e.target.value)}
                    >
                        {/* Map through types of games here */}
                    </select>
                </div>

                <div className="form-group short-input">
                    <label htmlFor="playerLimit">Limit Graczy</label>
                    <input 
                        type="number" 
                        id="playerLimit" 
                        value={playerLimit}
                        onChange={e => setPlayerLimit(e.target.value)}
                    />
                </div>

                <div className="form-group short-input">
                    <label htmlFor="date">Data Rozgrywki</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>

                <div className="form-group short-input">
                    <label htmlFor="image">Zdjęcie</label>
                    <input 
                        type="file" 
                        id="image"
                    />
                </div>

                {/* Add logic for restrictions if needed */}
                
                <div className="form-group actions">
                    <button type="submit" className="submit">Dodaj turniej</button>
                    <button type="button" className="cancel">Anuluj</button>
                </div>
            </form>
        </div>
    );
}

export default AddTournamentForm;
