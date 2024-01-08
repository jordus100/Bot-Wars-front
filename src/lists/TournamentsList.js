import './List.scss';
import DeleteTournamentButton from './DeleteTournamentButton';
import {Link, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';

function TournamentsList({ tournaments, isAuthenticated }) {
    const navigate = useNavigate();

    const handleTournamentClick = (tournamentId) => {
        navigate(`/tournaments/details/${tournamentId}`);
    };
    
    const listItems = tournaments.map(tournament => (
        <div key={tournament.id} className="menu-btns list-element btn">
            <button 
                className="item-name color-primary-3 btn"
                onClick={() => handleTournamentClick(tournament.id)}
            >
                {tournament.name}
            </button>
            <DeleteTournamentButton tournamentId={tournament.id}/>
        </div>
    ));

    return (
        <div className="list">
            <h1>Tournaments</h1>
            <div className="menu-btns container-list">
                <div className="item-list">
                    {isAuthenticated ? (
                        <div className="menu-btns list-element btn">
                            <Link className="item-name add-btn color-primary-3" to="/tournaments/add">Dodaj turniej</Link>
                        </div>
                    ) : (<></>)}
                    {listItems}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(TournamentsList);
