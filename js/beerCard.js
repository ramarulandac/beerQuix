import api from './beers.js'

const beerTemplate = ({beerId, name, description, image, likes, comments} = {}) => {

    return `
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
        <br>
        <a href="/beers">Back</a>
    </div>`

} 

const {getBeerDetail} = api();

const renderDetail = async (id) => {

    try {

        const beerDetail = await getBeerDetail(id);
        const beerCard = beerTemplate(beerDetail)
        const element = document.querySelector('.beers');
        element.innerHTML = beerCard;

    } catch(err) {
        console.log(err.message);
    }

}

export default renderDetail
