const beerTemplate = ({id, name, image, summary} = {}) => {
    console.log(`este es ${id}` )
    return `
    <div class="detail-section">
        <header id="${id}">
            <div class="title-section">
                <h1>${name}</h1>
            </div>
            <div class="image-container">
                <img src="${image? image.original:'/images/defaultImage.png'}" />
            </div>
        </header>
        <div class="content">
        ${summary}
        </div>
    </div>`

} 

export default b