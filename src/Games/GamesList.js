import './GamesList.scss'
import DeleteGameButton from './DeleteGameButton';
function GamesList({games}) {
    const listItems = games.map(game => {
        return (
            <div key = {game.id} className="container game-list-element btn">
                <button className="game-name color-primary-3 btn">{game.name}</button>
                <DeleteGameButton gameId = {game.id}/>
            </div>
        )
    })
    return (
        <div>
        <div className="games-container">
            <h1>Games</h1>
            <div className="container container-list">
                <div className="list">
                    <div className="container game-list-element btn">
                        <a className="game-name add-game-btn color-primary-3" href="/games/add">Dodaj grę
                    </a>
                </div>
                    {listItems}
                </div>
            </div>
        </div>
    </div>
    )
}

export default GamesList