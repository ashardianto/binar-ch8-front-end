import './App.css';
import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPlayer from './components/addPlayer/addPlayer';
import ListPlayer from './components/listPlayer/listPlayer';
import EditPlayer from './components/editPlayer/editPlayer';

function App() {

  const playerData = [
    {
      id: 1,
      username: "johnBonham",
      email: "johnbonham@gmail.com",
      experience: "Expert",
      level: 66
    },
    {
      id: 2,
      username: "brandonFlowers",
      email: "brandonFlowers@gmail.com",
      experience: "Expert",
      level: 212
    },
    {
      id: 3,
      username: "derekTrucks",
      email: "derekTrucks@gmail.com",
      experience: "Beyond Expert",
      level: 666
    },
  ];

  const [players, setPlayers] = useState(playerData)

  const [searchPlayer, setSearchPlayer] = useState("")

  const [searchResults, setSearchResults] = useState([])

  const searchHandler = (searchPlayer) => {
    setSearchPlayer(searchPlayer)
    if (searchHandler !== "") {
      const newPlayerList = players.filter((player) => {
        return Object.values(player).join("").toLowerCase().includes(searchPlayer.toLowerCase())
      })
      setSearchResults(newPlayerList);
    }
    else {
      setSearchResults(players)
    }
  }

  const initialForm = {
    id: null,
    username: "",
    email: "",
    experience: "",
    level: ""
  }

  const addPlayer = (player) => {
    player.id = players.length + 1;
    setPlayers([...players, player]);
  };

  const [currentPlayer, setCurrentPlayer] = useState(initialForm)

  const [editing, setEditing] = useState(false)

  const editPlayerId = (player) => {
    setEditing(true);

    setCurrentPlayer({
      id: player.id,
      username: player.username,
      email: player.email,
      experience: player.experience,
      level: player.level,
    });
  };

  const updatePlayer = (id, playerupdate) => {
    setPlayers(
      players.map((player) => (player.id === id ? playerupdate : player))
    );
    setEditing(false);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>React Form</h1>
        {editing ? (
          <Fragment>
            <h2>Edit Player</h2>
            <EditPlayer
              editing={editing}
              setEditing={setEditing}
              currentPlayer={currentPlayer}
              updatePlayer={updatePlayer}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add Player</h2>
            <AddPlayer addPlayer={addPlayer} />
          </Fragment>
        )}


        <h2>List Player</h2>
        <ListPlayer players={searchPlayer.length < 1 ? players : searchResults} editPlayerId={editPlayerId} searchPlayer={searchPlayer} searchHandler={searchHandler} />
      </header>
    </div>
  );
}

export default App;
