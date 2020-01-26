import './index.js'
import renderDetail from './beerCard.js'

page('/detail/:id', ctx => {
    console.log(ctx) 
    const {params:{id}} = ctx;
    console.log(id)
    renderDetail(id)
})

page()