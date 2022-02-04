// Working social post page

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import View from "./View";
import Post from "./Post";
import Counter from "./Counter";
import React, { useState, useEffect, useHistory } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [todos, setTodos] = useState([]);

  const updateList = (task) => {
    setTodos((prevTodoList) => {
      return [...prevTodoList, task];
    });
    localStorage.setItem("list", JSON.stringify([...todos, task]));
  };

  useEffect(() => {
    // code running when app is loaded
    const listContents = localStorage.getItem("list");
    setTodos(JSON.parse(listContents) || []);
  }, []);

  return (
    <Router>
      <Navbar>
        <Navbar.Brand>Butchered social site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav-nav"></Navbar.Toggle>
        <Navbar.Collapse className="nav-link">
          <Nav>
            <Link className="nav-link" to="/#">
              View - should be linked from submit
            </Link>
            <Link className="nav-link" to="/post">
              Add A New Post
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/post">
            <Post
              submitHandler={(task) => {
                updateList(task);
              }}
            />
          </Route>
          <Route exact path="/">
            <View activeTodoArray={todos} />
          </Route>
          <Route path="/">Error 404</Route>
        </Switch>
      </Container>
    </Router>
  );
}
export default App;
