// src/FilmDetails.js

import React from 'react';
import data from '../../sfpopos-data.json';
import './FilmDetails.css'

function FilmDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, address, hours, features, geo, website } = data[id]

  return (
    <div className="FilmDetails">
      <div className="FilmDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="Movie"/>
      </div>

      <div className="FilmDetails-info">
        <h1 className="FilmDetails-title">{ title }</h1>
        <p className="FilmDetails-desc">{ desc }</p>
        <p className="FilmDetails-address">{ address }</p>
        <p className="FilmDetails-hours">{ hours }</p>
        <p className="FilmDetails-features">{ features }</p>
        <p className="FilmDetails-geo">{ geo.lat } { geo.lon }</p>
        <p className="FilmDetails-website">{ website }</p>
      </div>

    </div>
  )
}

export default FilmDetails