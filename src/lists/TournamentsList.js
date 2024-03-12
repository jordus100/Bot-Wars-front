import './TournamentList.scss';
import DeleteTournamentButton from './DeleteTournamentButton';
import TournamentNav from '../Tournaments/TournamentNav';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function TournamentsList({ tournaments, isAuthenticated }) {
    const navigate = useNavigate();
    const currentDate = new Date();
    const upcomingTournaments = tournaments.filter(t => {
      const tournamentDate = new Date(t.date);
      return tournamentDate > currentDate;
    });
    const pastTournaments = tournaments.filter(t => {
      const tournamentDate = new Date(t.date);
      return tournamentDate <= currentDate;
    });;

    const TournamentItem = ({ tournament }) => (
        <div className="tournament-item" onClick={() => handleTournamentClick(tournament.id)}>
            <div className="tournament-detail">{tournament.name}</div>
            <div className="tournament-detail">{tournament.author}</div>
            <div className="tournament-detail">{tournament.date}</div>
            <div className="tournament-detail">
                <DeleteTournamentButton tournamentId={tournament.id} />
            </div>
        </div>
    );

    const handleTournamentClick = (tournamentId) => {
        navigate(`/tournaments/details/${tournamentId}`);
    };

    return (
        <div className="tournaments-container">

            <TournamentNav /> 
            
            {isAuthenticated && (
                <Link to="/tournaments/add" className="add-tournament-btn">Add Tournament</Link>
            )}
            <div className="tournaments-box">
                <h3>Upcoming Tournaments</h3>

                <div className="tournament-headers">
                    <span className="header-detail">Name</span>
                    <span className="header-detail">Author</span>
                    <span className="header-detail">Date</span>
                    <span className="header-detail">Action</span>
                </div>

                <div className="tournaments-content">
                    {upcomingTournaments.map(tournament => (
                        <TournamentItem key={tournament.id} tournament={tournament} />
                    ))}
                </div>
                <h3>Past Tournaments</h3>
                <div className="tournament-headers">
                    <span className="header-detail">Name</span>
                    <span className="header-detail">Author</span>
                    <span className="header-detail">Date</span>
                    <span className="header-detail">Action</span>
                </div>

                <div className="tournaments-content">
                    {pastTournaments.map(tournament => (
                        <TournamentItem key={tournament.id} tournament={tournament} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(TournamentsList);
