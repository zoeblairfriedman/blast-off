import React, { useState, useEffect } from 'react';
import Card from './Card'

export default function CardContainer(){

  const [state, setState] = useState([])

  const API = "qhNHOMx7QQSZkDczvvAZA29kejOCnBEUeeXXcqcb"
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&count=10`)
    .then(r => r.json())
    .then(d => setState(d))
  })
 

  return (
  <div>
    {state.map(asset => <Card asset={asset}/>)}
  </div>
  )
}