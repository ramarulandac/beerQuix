import getNextCard from './cards.js'


const searchBtn = document.querySelector('.search-btn');
const controls = document.querySelector('.controls');
const beers = document.querySelector('.beers')
const searchForm = document.querySelector('.search-form')
const inputSearch = document.querySelector('.input-search')

searchBtn.addEventListener('click', evt => {
    
})


searchForm.addEventListener('submit', evt => {

   evt.preventDefault();
   
   if(inputSearch.validity.valid) {
       getNextCard(inputSearch.value);        
   }
})

