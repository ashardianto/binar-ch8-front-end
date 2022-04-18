import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./addPlayer.css";

export default function AddPlayer(props) {
  const initialForm = {
    id: null,
    username: "",
    email: "",
    experience: "",
    level: "",
  };

  const [player, setPlayer] = useState(initialForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPlayer({ ...player, [name]: value });
  };

  console.log(player);

  return (
    <Form
      className="player"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !player.username ||
          !player.email ||
          !player.experience ||
          !player.level
        )
          return;

        props.addPlayer(player);
        setPlayer(initialForm);
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
