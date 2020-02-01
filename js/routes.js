import getNextCard from './cards.js'
import renderDetail from './beerCard.js'
import './index.js'
import handle from  './index.js'
import storage from './storage.js'
import {LOCAL_STYPE,COOKIES_STYPE } from './storage.js'

const inputSearch = document.querySelector('.input-search')
const inputItems = document.querySelector('.input-items')
const inputDate = document.querySelector('.input-date')

const {handleControlBack, handleControls, handleBeers} = handle();

const {setItem, getItem} = storage(COOKIES_STYPE)

page('/detail/:id', ctx => {    
    const {params:{id}} = ctx; 
    handleControlBack('control-back','appear');
    renderDetail(id)
})

page('/', ctx => {     
    handleControls('controls','disappear');
    handleControlBack('control-back','appear');
    handleBeers('dissapear');
})

page('/beers', ctx => {
    handleControls('disappear',null); 
    handleControlBack('appear',null);
    handleBeers('back',null)
    getNextCard(inputSearch, inputItems.value, inputDate.value);    
})
