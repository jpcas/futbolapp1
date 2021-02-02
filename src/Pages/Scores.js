import React from 'react';
import {Table} from 'react-bootstrap';

function Scores() {
    return (
        <div>
            <h1>Scores</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>EPL</th>
      <th>Match</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Liverpool 3 : 0 Everton</td>
    </tr>
    <tr>
      <td></td>
      <td>Man City 3 : 3 Man United</td>
    </tr>
    <tr>
      <td></td>
      <td>Chelsea 0 : 0 Arsenal</td>
    </tr>
  </tbody>
</Table>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>La Liga</th>
      <th>Match</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Real Madrid 3 : 0 Barcelona</td>
    </tr>
    <tr>
      <td></td>
      <td>Atl Madrid 3 : 3 Sevilla</td>
    </tr>
    <tr>
      <td></td>
      <td>Villareal 0 : 0 Real Zaragoza</td>
    </tr>
  </tbody>
</Table>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>MLS</th>
      <th>Match</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Chicagoe Fire 3 : 0 Columbus Crew</td>
    </tr>
    <tr>
      <td></td>
      <td>NY Redbull 3 : 3 NYCFC</td>
    </tr>
    <tr>
      <td></td>
      <td>LA Galaxy 0 : 0 LAFC</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Scores
