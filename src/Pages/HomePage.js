import React from 'react'
import {Card} from 'react-bootstrap'

const HomePage = () => {
    return (
<>
 <Card className="bg-dark text-white">
     <Card.Img src="https://soccerstadiumdigest.com/wp-content/uploads/2015/06/Gold-Cup-Soldier-Field.jpg" alt="stadium image" />
     <Card.ImgOverlay>
         <Card.Title>Welcome to the FutbolApp!</Card.Title>
     </Card.ImgOverlay>
</Card>
</>
    )
}

export default HomePage
