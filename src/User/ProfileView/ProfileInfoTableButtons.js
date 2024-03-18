import "./ProfileView.css";

function ProfileInfoTableButtons(props) {
    const { setState } = props;

    return (
        <div className="user-info-table-buttons-container">
            <button type="user-info-table-button" onClick={() => setState("stats")}>Stats</button>
            <button type="user-info-table-button" onClick={() => setState("rating")}>Rating</button>
            <button type="user-info-table-button" onClick={() => setState("bots")}>Bots</button>
            <button type="user-info-table-button" onClick={() => setState("games")}>Games Added</button>
            <button type="user-info-table-button" onClick={() => setState("tournaments")}>Tournaments Played</button>
        </div>
    );
}

export default ProfileInfoTableButtons;