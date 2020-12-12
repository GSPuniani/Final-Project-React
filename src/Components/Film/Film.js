import React from 'react';
import './Film.css';

function Film(props) {
  const { name, image } = props
  return (
    <div>
      <img 
        src={`${process.env.PUBLIC_URL}/images/${image}`} 
        width="200" 
        height="300" 
        alt="Movie Poster" 
      />
      <h1>{name}</h1>
    </div>
  )
}

export default Film