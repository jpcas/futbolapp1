import React from 'react';
import {Table} from 'react-bootstrap';

function Schedule() {
    return (
        <div>
            <h1>Schedule</h1>
 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>EPL</th>
      <th>Match</th>
      <th>Time</th>
      <th>TV</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Liverpool vs Everton</td>
      <td>1:00PM</td>
      <td>ESPN</td>
    </tr>
    <tr>
      <td></td>
      <td>Man City vs Man United</td>
      <td>1:00PM</td>
      <td>SKY</td>
    </tr>
    <tr>
      <td></td>
      <td>Chelsea vs Arsenal</td>
      <td>1:00PM</td>
      <td>BeinSports</td>
    </tr>
  </tbody>
</Table>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>La Liga</th>
      <th>Match</th>
      <th>Time</th>
      <th>TV</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Real Madrid vs Barcelona</td>
      <td>1:00PM</td>
      <td>ESPN</td>
    </tr>
    <tr>
      <td></td>
      <td>Atletico Madrid vs Sevilla</td>
      <td>1:00PM</td>
      <td>SKY</td>
    </tr>
    <tr>
      <td></td>
      <td>Villareal vs Real Zaragoza</td>
      <td>1:00PM</td>
      <td>BeinSports</td>
    </tr>
  </tbody>
</Table>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>MLS</th>
      <th>Match</th>
      <th>Time</th>
      <th>TV</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Chicago Fire vs Columbus Crew</td>
      <td>1:00PM</td>
      <td>ESPN</td>
    </tr>
    <tr>
      <td></td>
      <td>NY Redbull vs NYCFC</td>
      <td>1:00PM</td>
      <td>SKY</td>
    </tr>
    <tr>
      <td></td>
      <td>LAFC vs LA Galaxy</td>
      <td>1:00PM</td>
      <td>BeinSports</td>
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
