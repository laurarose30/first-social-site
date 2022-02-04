import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

// this is the state we start at
function Post(props) {
  const [state, setState] = useState({
    id: "",
    task: "",
    completed: false,
  });

  // on submit runs this function, where e means event
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(state);
    //  message from toastr
    toastr.success("added to list!");
    setState({
      id: "",
      task: "",
      completed: false,
    });
  };

  const handleChange = (event) => {
    // a shallow copy of newState
    const newState = { ...state };
    if (event.target.name === "completed") {
      newState[event.target.name] = !state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    setState(newState);
  };

  return (
    <div className="postContainer">
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="id"
            type="text"
            value={state.id}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="postText">
          <Form.Label>Your Post</Form.Label>
          <Form.Control
            name="task"
            type="text"
            value={state.task}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" to="/">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Post;
