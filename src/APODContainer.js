import React, { useState, useEffect } from 'react';
import APOD from './APOD'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function CardContainer(){

  const [state, setState] = useState([])

  const API = "qhNHOMx7QQSZkDczvvAZA29kejOCnBEUeeXXcqcb"
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&count=10`)
    .then(r => r.json())
    .then(d => setState(d))
  }, [])
 

  return (
  <Container>
    <Row xs={1} md={2}>
      {state.map((asset, i) => <APOD key={i} asset={asset}/>)}
    </Row>
  </Container>
  )
}
