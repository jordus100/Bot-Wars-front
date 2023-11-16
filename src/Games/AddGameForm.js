import './AddGameForm.scss'

function AddGameForm() {
    return (
        <div className="add-game-form">
        <h1>Add a new type of game</h1>
        <div>
            <form>
               <label htmlFor="gameName">Name:</label>
               <br></br>
               <input type="text" id="gameName"></input>
               <br></br>
               <label htmlFor="gameDesc">Game description:</label>
               <br></br>
               <textarea id="gameDesc" cols="40" rows="5"></textarea>
               <label htmlFor="gameFile">Game files (in .zip)</label>
               <br></br>
               <input type="file" id="gameFile" accept=".zip"></input>
                <br></br>
                <button type="submit" className="submit">Add new game</button>
                <button className="cancel">Cancel</button>
            </form>
            <p>
                Here you can add a new type of a Bot Wars game to the system.<br></br>
                Following game files must be in the zip archive:<br></br>
                <ul>
                    <li>The main game program must be a valid Linux executable and must be named: <i>game</i></li>
                    <li>File defining game interface for bots, named: <i>interface</i></li>
                    <li>Text file defining possible numbers of players containing a list of numbers
                        separated by commas, named: <i>interface</i></li>
                </ul>
            </p>
        </div>
        </div>
    )
}

export default AddGameForm