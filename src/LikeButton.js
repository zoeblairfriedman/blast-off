import Button from 'react-bootstrap/Button'
import { useState } from 'react';


export default function LikeButton(props){
  
  
const [like, toggleLike] = useState(false)
const handleClick = () => {
 let likeBtn = document.getElementById(props.asset.title)
 if (like === true){
    toggleLike(false)
    likeBtn.className="btn btn-primary"
    likeBtn.innerText="Like"
 } else {
    toggleLike(true)
    likeBtn.className="btn btn-danger"
    likeBtn.innerText="Unlike"
 }
}

  return (
     <Button onClick={() => handleClick()} id={props.asset.title} className="btn btn-primary">Like</Button>
  )
}