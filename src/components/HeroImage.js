import React from 'react';
import {Card} from 'react-bootstrap';

const HeroImage = () => {
    return (
        <Card>
        <Card.Img src="https://i.imgur.com/4JxCr37.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="herotitle">Welcome to the FutbolApp</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      </Card>

    )
}

export default HeroImage
