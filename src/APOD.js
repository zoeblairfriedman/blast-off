import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function APOD(props){

let visual;
if (props.asset.url.includes("youtube") || props.asset.url.includes("vimeo")){
  visual = <iframe src={props.asset.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
} else {
  visual = <Card.Img variant="top" src={props.asset.url} />
}

  return (

  <Card className="p-3 m-2" style={{ width: '35rem' }}>
    {visual}
  <Card.Body>
    <Card.Title>{props.asset.title}</Card.Title>
    <Card.Text>
      {props.asset.explanation}
    </Card.Text>
    <Button variant="primary">Like</Button>
  </Card.Body>
</Card>


  )
}