import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function DateModal(props){

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    // set up something so that the form works again
  };


  const [apod, setApod] = useState([])

  const API = "qhNHOMx7QQSZkDczvvAZA29kejOCnBEUeeXXcqcb"
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&date=${props.date}`)
    .then(r => r.json())
    .then(d => setApod(d))
  }, [])
  


  return (
    <>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{apod.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="w-100" src={apod.url}></img>
        <h2>{apod.date}</h2>
       {apod.explanation}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}