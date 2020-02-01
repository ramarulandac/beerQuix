import api from './beers.js'

const {getBeerDetail, postBeerLike} = api();



const beerTemplate = ({beerId, name, description, image, likes, comments} = {}) => {

    return `
    <a href="/beers">Back</a>
    <div class="detail-section">
        <header id="${beerId}">
            <div class="title-section">
                <h1>${name}</h1>
            </div>
            <div class="image-container">
                <img src="${image? image:'/images/defaultImage.png'}" />
            </div>
        </header>
        <div class="content">
          <p>
          ${description}
          </p>
        </div>
        <br>
        <div class="like-comment"><i class="far fa-thumbs-up">${likes}</i><i class="far fa-comment">${comments}</i></div>
       
        `

       /* <a href="" onclick="getLiked(${beerId},"like-beer")"><div class="like-beer"><i class="far fa-thumbs-up">${likes}</i></div><a/>     
        <a href="" onclick="getLiked(${beerId},"like-beer")"><div class="like-beer"><i class="far fa-thumbs-up">${likes}</i></div><a/>
        <div id="detail" class="detail-content"></div>
        <div class="quotes-list">
          <h2>Quotes</h2>
          <div id="quoteList">
          </div>
        </div>
        <form id="quote-form" method="POST" class="quote-form" novalidate>
          <div class="quote-input">
            <label for="quote">Quote of this show</label>
            <input name="kevin" required id="quote" placeholder="Add your quote" class="input primary" type="text">
          </div>
          <button type="submit" class="button primary">Add quote</button>
        </form>  
        <br>
        <a href="/beers">Back</a>
    </div>*/

} 


const likeTemplate = (beerId, likes) => {
    return `<a href="" onclick="getLiked(${beerId},"like-beer")"><div class="like-beer"><i class="far fa-thumbs-up">${likes}</i></div><a/>`  
}



const renderDetail = async (id) => {

    try {

        const beerDetail = await getBeerDetail(id);
        const beerCard = beerTemplate(beerDetail)
        const element = document.querySelector('.beers');
        const quotation = document.querySelector('#detailSection');
        element.innerHTML = beerCard;

    } catch(err) {
        console.log(err.message);
    }

}
/*
const beerLike = async (beerId, element) => {

  const likes = await postBeerLike(beerId)


}*/

export default renderDetail
