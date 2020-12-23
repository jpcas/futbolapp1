import React from 'react';
import {Card} from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.ImgOverlay>
  <Card.Img src="https://i.imgur.com/4JxCr37.jpg" alt="Card image" />
    <Card.Title>Futbol App</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    )
}

export default HomePage
