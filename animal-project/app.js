import React from 'react';
import {createRoot} from 'react-dom/client';
import { animals } from './animals';

const container = document.getElementById('app');
const root = createRoot(container);

//attribute to store the ocean
const background = <img className='background' alt='ocean'  src= {require('./images/ocean.jpg')} />;

// imges placeholder
const images = [];
for(let animal in animals) {
  const str = '.'+ animals[animal].image;
  images.push(
    <li>
      <img className='animal' src = {require(`${str}`)} aria-label={animal} role= 'button'/>
    </li>
    );
}

const title = '';
const animalFacts =  (
    <div>
      {background}
      <div className='animals'>
        {images}
      </div>
      <h1>
        {title === '' ? 'Click an animal for a fun fact' : title}
      </h1>
    </div>
    );

root.render(animalFacts);