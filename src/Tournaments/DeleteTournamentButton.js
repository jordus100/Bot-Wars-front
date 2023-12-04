import React from 'react';

class DeleteTournamentButton extends React.Component {
  handleClick = (gameId) => {
    // fetch('https://your-api-endpoint.com/data', {
    //   method: 'GET', 
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle the data from the response
    //   console.log(data);
    // })
    // .catch(error => {
    //   // Handle errors
    //   console.error('Error:', error);
    // });
    console.log('usuwamy gre o id: ' + gameId)
  };

  render() {
    return (
        <div className="del-btn color-primary-3" onClick={() => this.handleClick(this.props.gameId)}>Usuń turniej</div>    );
  }
}

export default DeleteTournamentButton;