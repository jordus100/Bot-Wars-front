import './TournamentDetails.scss'
import { getListOfTournaments } from './getListOfTournaments';
import { useParams } from 'react-router-dom';

function TournamentDetails() {

    const { tournamentId } = useParams();
    const tournament = getListOfTournaments().find(t => t.id === parseInt(tournamentId));

    if (!tournament) {
        return <div>Tournament not found</div>;
    }
    
    // alert(tournament)

    return (
        <div className="tournamentWrapper">
            <p>Szczegóły Turnieju</p>
            <div className="tournamentDetails">
                <div className="details">
                    <p>Nazwa: {tournament.name}</p>
                    <p>Liczba uczestników: {tournament.participantsAmount}</p>
                    <p>Max liczba uczestników: {tournament.maxParticipants}</p>
                    <p>Data: {tournament.date}</p>
                    <p>Ograniczenia: {tournament.limitations}</p>
                    <p>Status: {tournament.state}</p>
                </div>
                {/* <img className="tournamentImage" src="" alt=""></img> */}
                <div className="tournamentImage"></div>
            </div>
            <p className="tournamentDescription">Opis: {tournament.description}</p>
        </div>
    );
}
export default TournamentDetails;
