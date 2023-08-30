import React from 'react';
import ReactDOM from 'react-dom';
import { animals } from './animals';
import  backgroundImageOcean  from './images/ocean.jpg';

const container = document.getElementById('root');

const title = '';

const displayFact = function(e){
  const selectedAnimal = animals[e.target.alt];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];

  const funElement = document.getElementById('animalFact');
  funElement.innerHTML = funFact;
}

const images = [];
for(let animal in animals){
  images.push(
    <li key={animal}  >
        <img 
          id={animal}
          src = {require(`${'.'+ animals[animal].image}`)} 
          alt={animal}
          onClick={displayFact}
        />
    </li> );
}

const backGroundStyle = {
  //backgroundImage:  'url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")',
  backgroundImage:  `url(${backgroundImageOcean})` ,
  color: "white",
  alt: 'some background text',
}

const animalsFunFacts = (
  <>
    <h1 key='pageTitle'>{(title==='' ) ? 'select animal to know fun fact': title}</h1>
    <div style={backGroundStyle}>
      <p id='animalFact'></p>
      {images}
    </div>
  </>
);

ReactDOM.render(animalsFunFacts, container);
