import './List.scss'
import DeleteGameButton from './DeleteGameButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../User/actions';
function GamesList({games, isAuthenticated, user, login, logout }) {
// function GamesList({games}) {
    const listItems = games.map(game => {
        return (
            <div key = {game.id} className="menu-btns list-element btn">
                <button className="item-name color-primary-3 btn">{game.name}</button>
                <DeleteGameButton gameId = {game.id}/>
            </div>
        )
    })
    return (
        <div className="list">
            <h1>Games</h1>
            <div className="menu-btns container-list">
                <div className="item-list">
                {isAuthenticated ? (
                    <div className="menu-btns list-element btn">
                        <Link className="item-name add-btn color-primary-3" to="/games/add">Dodaj grę</Link>
                    </div>
                ) : (<></>)}
                    {listItems}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  });
  
const mapDispatchToProps = {login,logout,};

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
