import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
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
   <>
    <form onSubmit={(e) => handleSubmit(e)}>
      <label for="date">
        Choose a date: 
        <input type="date" name="date" onChange={handleChange} />
      </label>
      <input type="submit" value="Go!" />
    </form>
  </>
  )
}