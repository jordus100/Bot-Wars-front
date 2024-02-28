

function ProfileInfoTableButtons(props) {
    const { setState } = props;

    return (
        <div className="user-info-table-buttons-container">
            <button type="button" onClick={() => setState("stats")}>Stats</button>
            <button type="button" onClick={() => setState("rating")}>Rating</button>
            <button type="button" onClick={() => setState("bots")}>Bots</button>
            <button type="button" onClick={() => setState("games")}>Games Added</button>
            <button type="button" onClick={() => setState("tournaments")}>Tournaments Played</button>
        </div>
    );
}

export default ProfileInfoTableButtons;