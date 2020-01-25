import getNextCard from './cards.js'
import replace from './ui.js'
import storage from './storage.js'
import {LOCAL_STYPE, COOKIES_STYPE} from './storage.js'

const INPUT_SEARCH = 'input-search';
const INPUT_DATE =  'input-date'
const INPUT_ITEMS = 'input-items'

const {setItem, getItem} = storage(COOKIES_STYPE)

const searchBtn = document.querySelector('.search-btn');
const controls = document.querySelector('.controls');
const controlback = document.querySelector('.control-back')
const beers = document.querySelector('.beers')
const searchForm = document.querySelector('.search-form')
const backForm = document.querySelector('.back-form')

const inputSearch = document.querySelector('.input-search')
const inputItems = document.querySelector('.input-items')
const inputDate = document.querySelector('.input-date')

const handleControls = replace(controls)
const handleControlBack = replace(controlback)
const handleBeers = replace(beers)

inputSearch.value = getItem(INPUT_SEARCH) || null;
inputDate.value = getItem(INPUT_DATE) || null;
inputItems.value = getItem(INPUT_ITEMS) || 1;

if (!(inputSearch.value === undefined) && ''!= inputSearch.value ) { 
    console.log(inputSearch.value)
    getNextCard(inputSearch.value,inputItems.value,inputDate.value)
   /* handleControls('disappear','controls');
    handleControlBack('appear','control-back')          */

    handleControls('controls','disappear');
    handleControlBack('control-back','appear');
    handleBeers('beers','back');
 }

searchBtn.addEventListener('click', evt => {
    
})

searchForm.addEventListener('submit', evt => {

   evt.preventDefault();  
   
   if(inputSearch.validity.valid) {
       
       setItem(INPUT_SEARCH,inputSearch.value)
                    
       if(inputItems.validity.valid) setItem(INPUT_ITEMS, inputItems.value);

       if(inputDate.validity.valid) setItem(INPUT_DATE, inputDate.value);

       getNextCard(inputSearch.value, inputItems.value, inputDate.value);
       handleControls('disappear',null); 
       handleControlBack('appear',null);
       handleBeers('back',null)
   }
})

backForm.addEventListener('submit', evt => {

    evt.preventDefault();
    
    handleControls('controls','disappear');
    handleControlBack('control-back','appear');
    handleBeers('beers','back');
})
