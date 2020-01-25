
import endPoint from './auth.js'
import formatDate from './util.js'

const getBeers =  async (filter, results, date) => {

   try { 
       console.log(endPoint.URL+`search=${filter}&limit=${results}`)
        const response = await fetch(endPoint.URL+`search=${filter}&limit=${results}`,
                                { method:'GET', headers:{'X-API-KEY':endPoint.API_KEY}}); 

        if(!response)  throw Error('Request error..');

        const data = await response.json();    

        // date filter
        if(date) return data.beers.filter(beer => { 
                                             if(beer.firstBrewed === formatDate(date))
                                                return beer
                                          });
        // no date filter
        return data.beers;

    } catch (err) {
        throw Error(`Request fail.. ${err}`)
    }   
}

export default getBeers