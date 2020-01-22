
import getBeers from './beers.js'
import auth from "./auth.js";

const getTemplate = (info) => {

    return `
            <a href="">
            <header><h2>${info.name}</h2></header>
            <div class="card">
                <div class="card-content">                        
                    <div class="card-img"><img src="${info.image}" alt=""></div>
                    <div class="card-text"><p>${info.description}</p></div>
                </div>
                <div class="like-comment"><i class="far fa-thumbs-up"></i><i class="far fa-comment"></i></div>
            </div>
            </a>`
}


const getCardRendered = (element, beers) => {
    
    const beersDOM = beers.map(beer => getTemplate(beer));
    element.innerHTML = beersDOM;
}

const  getNextCard =  async (text) => {
  /*- const card = {name:'Roger', image: './assets/sw.jpeg', message:'Lorem chitseunnn carombaleee'}*/
 
    const element = document.querySelector('.beers');
    const beers = await getBeers(text);
    
    getCardRendered(element, beers);

    
}

export default getNextCard;