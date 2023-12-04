import './TournamentDetails.scss'

function TournamentDetails({tournament}) {
    
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
