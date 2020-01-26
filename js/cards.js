
import api from './beers.js';
import auth from "./auth.js";

const {getBeers} = api();

const getTemplate = (info) => {

    return `<a href="/detail/${info.beerId}">
                <div class="card-container ${info.main?'main':''}">
                  <header><h2>${info.name}</h2></header>
                    <div class="card">
                        <div class="card-content">                        
                            <div class="card-img"><img src="${info.image}" alt=""></div>
                            <div class="card-text"><p>${info.description}</p></div>
                        </div>                
                    </div>
                </div>
            </a>
           `
}

const getCardRendered = (element, beers) => {

    const beersDOM = beers.map((beer,x) => { 
        
        if (x < 2) return getTemplate({...beer, main:true })
        else return getTemplate({...beer, main:false}) 
        
    }).join('');

    element.innerHTML = beersDOM;
}

const  getNextCard =  async (text, items, date) => {
       
    const beers = await getBeers(text, items, date);
    const element = document.querySelector('.beers');    

    getCardRendered(element, beers);    
}

export default getNextCard;