import React from 'react';
import {Card} from 'react-bootstrap';

const HeroImage = () => {
    return (
        <Card>
        <Card.Img src="https://i.imgur.com/4JxCr37.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="herotitle">Welcome to the FutbolApp</Card.Title>
          <Card.Text className="herodescription">
            Efficient site to view your favorite leagues standings, fixture, and transfer news!
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      </Card>

    )
}

export default HeroImage
