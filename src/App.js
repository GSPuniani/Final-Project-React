import React from 'react';
import './App.css';
import Title from './Components/Title/Title';
import FilmList from './Components/FilmList/FilmList';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './Components/About/About';
import FilmDetails from './Components/FilmDetails/FilmDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={FilmList}/>
        <Route path="/about" component={About}/>
        <Route path="/details/" component={FilmDetails}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
