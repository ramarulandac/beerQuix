
import getBeers from './beers.js'
import auth from "./auth.js";

const getTemplate = (info) => {

    return `<div class="card-container ${info.main?'main':''}">
            <a href="">
            <header><h2>${info.name}</h2></header>
            <div class="card">
                <div class="card-content">                        
                    <div class="card-img"><img src="${info.image}" alt=""></div>
                    <div class="card-text"><p>${info.description}</p></div>
                </div>
                <!---div class="like-comment"><i class="far fa-thumbs-up"></i><i class="far fa-comment"></i></div-->
            </div>
            </a>
            </div>`
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