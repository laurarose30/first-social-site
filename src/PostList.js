import React from "react";
import './App.css'

function View(props){

  
    const buildRows = () => {
      return props.todos.map((current, v) => (
        <tr key={v}>
          <td>
            {current.id}
          </td>
          <td>
            {current.task}
          </td>
          <td>
            {current.complete ? "yes" : "no"}
          </td>
        </tr>
      )
      )
    }
    
    return (
      <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Username</th>
                <th>post</th>
                <th>complete</th>
              </tr>
            </thead>
            <tbody>
              {buildRows()}
            </tbody>
          </Table>
        </>
      );
  }
  
  export default View;
  