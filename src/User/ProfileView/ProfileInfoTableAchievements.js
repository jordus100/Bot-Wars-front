

function ProfileInfoTableAchievements(props) {
    const {playerId} = props;

    return (
        <table>
            <tr>
                <th>achievements</th>
            </tr>
            <tr>
                <td>{playerId}</td>
            </tr>
        </table>
    );
}

export default ProfileInfoTableAchievements;