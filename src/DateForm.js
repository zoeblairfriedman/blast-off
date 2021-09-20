import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function DateForm(props){

  const [value, onChange] = useState("");
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(value)
  }

  return (  
  <Form onSubmit={(e) => handleSubmit(e)} className="border p-2">
   <Row className="align-items-center"> 
      <Col></Col>
      <Col>
      <Form.Label htmlFor="inlineFormInput" for="date">
        Date
      </Form.Label>
      <Form.Control type="date" name="date" className="mb-2 d-inline" onChange={handleChange} id="inlineFormInput"/>
      <Button type="submit" xs="auto" className="d-inline mx-1"> Go! </Button>
      </Col>
    <Col></Col>
    </Row>
   </Form>
  
  )
}