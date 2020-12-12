// src/POPOSList.js

import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json'

function POPOSList() {

    return (
        <div className="POPOSList">
          <POPOSSpace
            name="Following (1999)"
            image="Following.jpg"
          />
          <POPOSSpace
            name="Memento (2000)"
            image="Memento.jpg"
          />
          <POPOSSpace
            name="Insomnia (2002)"
            image="Insomnia.jpg"
          />
          <POPOSSpace
            name="Batman Begins (2005)"
            image="Batman-Begins.jpg"
          />
          <POPOSSpace
            name="The Prestige (2006)"
            image="Prestige.jpg"
          />
          <POPOSSpace
            name="The Dark Knight (2008)"
            image="Dark-Knight.jpg"
          />
          <POPOSSpace
            name="Inception (2010)"
            image="Inception.jpg"
          />
          <POPOSSpace
            name="The Dark Knight Rises (2012)"
            image="Dark-Knight-Rises.jpg"
          />
          <POPOSSpace
            name="Interstellar (2014)"
            image="Interstellar.jpg"
          />
          <POPOSSpace
            name="Dunkirk (2017)"
            image="Dunkirk.jpg"
          />
          <POPOSSpace
            name="Tenet (2020)"
            image="Tenet.jpg"
          />
        </div>
    )
    
}
  
export default POPOSList