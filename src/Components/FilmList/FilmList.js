// src/POPOSList.js

import React from 'react';
import Film from '../Film/Film';
import './FilmList.css';

function FilmList() {

    return (
        <div className="FilmList">
          <Film
            name="Following (1999)"
            image="Following.jpg"
          />
          <Film
            name="Memento (2000)"
            image="Memento.jpg"
          />
          <Film
            name="Insomnia (2002)"
            image="Insomnia.jpg"
          />
          <Film
            name="Batman Begins (2005)"
            image="Batman-Begins.jpg"
          />
          <Film
            name="The Prestige (2006)"
            image="Prestige.jpg"
          />
          <Film
            name="The Dark Knight (2008)"
            image="Dark-Knight.jpg"
          />
          <Film
            name="Inception (2010)"
            image="Inception.jpg"
          />
          <Film
            name="The Dark Knight Rises (2012)"
            image="Dark-Knight-Rises.jpg"
          />
          <Film
            name="Interstellar (2014)"
            image="Interstellar.jpg"
          />
          <Film
            name="Dunkirk (2017)"
            image="Dunkirk.jpg"
          />
          <Film
            name="Tenet (2020)"
            image="Tenet.jpg"
          />
        </div>
    )
    
}
  
export default FilmList