import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';

function Schedule() {
    return (
        <div>
            <h1>Schedule</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Schedule

{/* <Card style={{ width: '18rem' }}>
  <Card.Header>EPL</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Manchester United vs Manchester City 1:00PM</ListGroup.Item>
    <ListGroup.Item>Everton vs Liverpool 1:00PM</ListGroup.Item>
    <ListGroup.Item>Arsenal vs Chelsea 1:00PM</ListGroup.Item>
  </ListGroup>
</Card> */}
