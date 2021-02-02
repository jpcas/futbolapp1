import React from 'react';
import {Table} from 'react-bootstrap';

function Transfers() {
    return (
        <div>
            <h1>Transfers</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Date</th>
      <th>Player</th>
      <th>From</th>
      <th>To</th>
      <th>Fee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Feb 2</td>
      <td>JP Castrillon</td>
      <td>Real Madrid</td>
      <td>Chicago Fire</td>
      <td>1billion</td>
    </tr>
    <tr>
    <td>Feb 2</td>
      <td>Ted Bryant</td>
      <td>St Louis FC</td>
      <td>Barcelona</td>
      <td>1.2billion</td>
    </tr>
    <tr>
    <td>Feb 2</td>
      <td>Chris Lowe</td>
      <td>Nashville</td>
      <td>DC United</td>
      <td>Free</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Transfers
