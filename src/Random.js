import Card from 'react-bootstrap/Card';
import LikeButton from './LikeButton'


export default function APOD(props){

let visual;
if (props.asset.media_type !== "image"){
  visual = <iframe src={props.asset.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
} else {
  visual = <Card.Img variant="top" src={props.asset.url} />
}

  return (

  <Card className="p-3 m-2" style={{ width: '30rem' }}>
    {visual}
  <Card.Body>
    <h3>{props.asset.title}</h3>
    <Card.Text>
      <h4>{props.asset.date}</h4>
      <p>{props.asset.explanation}</p>
    </Card.Text>
    <LikeButton asset={props.asset}/>
  </Card.Body>
</Card>


  )
}