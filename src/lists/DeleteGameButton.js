import React from 'react';
import {GameService} from "../services/GameService";

class DeleteGameButton extends React.Component {
  handleClick = async (gameId) => {
    
    try {
      console.log('usuwamy gre o id: ' + gameId)
      const response = await GameService.deleteGame(gameId);
      console.log(response)
    } catch (e) {
        console.log(e);
    }
  };

  render() {
    return (
        <div className="del-btn color-primary-3" onClick={() => this.handleClick(this.props.gameId)}>Usuń gre</div>
    );
  }
}

export default DeleteGameButton;