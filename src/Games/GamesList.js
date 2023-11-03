import './GamesList.css'
function GamesList({games}) {
    const listItems = games.map(game => {
        return (
            <div className="container game-list-element btn">
                {game.name}
            </div>
        )
    })
    return (
        <div className="container container-list">
            <div className="list">
                {listItems}
            </div>
        </div>
    )
}

export default GamesList