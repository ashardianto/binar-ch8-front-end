import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function EditPlayer(props) {
  const [player, setPlayer] = useState(props.currentPlayer);

  useEffect(() => {
    setPlayer(props.currentPlayer);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPlayer({ ...player, [name]: value });
  };

  return (
    <Form
      className="player"
      onSubmit={(e) => {
        e.preventDefault();
        props.updatePlayer(player.id, player);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          name="username"
          value={player.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Player Email"
          name="email"
          value={player.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Player Experience"
          name="experience"
          value={player.experience}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Player Level</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Player Level"
          name="level"
          value={player.level}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
