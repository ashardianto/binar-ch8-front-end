import React, { useRef } from "react";

import { Table, Button } from "react-bootstrap";
import "./listPlayer.css";

export default function ListPlayer(props) {
  console.log(props);

  const inputEl = useRef("");

  const getSearchPlayer = () => {
    console.log(inputEl.current.value);

    props.searchHandler(inputEl.current.value);
  };
  return (
    <div className="table--container">
      <div className="search--player">
        <div className="search--input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search By Username, Email, Etc"
            className="input--player"
            value={props.searchPlayer}
            onChange={getSearchPlayer}
          />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.players.length > 0 ? (
            props.players.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.experience}</td>
                <td>{player.level}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      props.editPlayerId(player);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Player</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
