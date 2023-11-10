import './GamesList.css'
import DeleteGameButton from './DeleteGameButton';
function GamesList({games}) {
    const listItems = games.map(game => {
        return (
            <div key = {game.id} className="container game-list-element btn">
                <div className="game-name">{game.name}</div>
                <DeleteGameButton gameId = {game.id}/>
            </div>
        )
    })
    return (
        <div className="container container-list">
            <div className="list">
                <div className="container game-list-element btn">
                    {/* hyperlink to addGame form */}
                    <a className="game-name" href="../">Dodaj grę 
                </a>
            </div>
                {listItems}
            </div>
        </div>
    )
}

export default GamesList