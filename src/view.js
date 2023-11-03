import React from 'react';
import ReactDOM from 'react-dom';
import BiblioCarouselApp from './BiblioCarouselApp';


document.addEventListener('DOMContentLoaded', () => {
const elements = document.querySelectorAll('.biblio_carousel_block');

  elements.forEach(element => {
    ReactDOM.render(<BiblioCarouselApp />, element);
  });
});
