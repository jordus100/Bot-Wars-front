import './TournamentsList.scss';
import DeleteTournamentButton from './DeleteTournamentButton';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function TournamentsList({ tournaments, isAuthenticated }) {
    const navigate = useNavigate();

    const handleAddTournamentClick = () => {
        navigate('/tournaments/add');
    };

    const handleTournamentClick = (tournamentId) => {
        navigate(`/tournaments/details/${tournamentId}`);
    };
    
    const listItems = tournaments.map(tournament => (
        <div key={tournament.id} className="menu-btns game-list-element btn">
            <button 
                className="game-name color-primary-3 btn"
                onClick={() => handleTournamentClick(tournament.id)}
            >
                {tournament.name}
            </button>
            <DeleteTournamentButton tournamentId={tournament.id}/>
        </div>
    ));

    return (
        <div className="tournaments-container">
            <h1>Tournaments</h1>
            <div className="menu-btns container-list">
                <div className="list">
                    {listItems}

                    {isAuthenticated ? (
                        <div className="menu-btns game-list-element btn">
                            {/* Button to add tournament */}
                            <button 
                                className="game-name add-game-btn color-primary-3" 
                                onClick={handleAddTournamentClick}
                            >
                                Dodaj turniej
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(TournamentsList);
