import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

export default function APOD(props){

let visual;
if (props.asset.media_type !== "image"){
  visual = <iframe src={props.asset.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
} else {
  visual = <Card.Img variant="top" src={props.asset.url} />
}

const [like, toggleLike] = useState(false)
const handleClick = () => {
 if (like === true){
    toggleLike(false)
 } else {
    toggleLike(true)
 }
}

  return (

  <Card className="p-3 m-2" style={{ width: '30rem' }}>
    {visual}
  <Card.Body>
    <Card.Title>{props.asset.title}</Card.Title>
    <Card.Text>
      <h5>{props.asset.date}</h5>
      <p>{props.asset.explanation}</p>
    </Card.Text>
    <Button onClick={() => handleClick()}variant="primary">Like</Button>
  </Card.Body>
</Card>


  )
}