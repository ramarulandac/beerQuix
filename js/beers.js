
import endPoint from './auth.js'

const getBeers =  async (filter, results) => {

   try {

        const response = await fetch(endPoint.URL+filter,
                                { method:'GET', 
                                  headers:{'X-API-KEY':endPoint.API_KEY}}); 

        if(!response)  throw Error('Request error..');

        const data = await response.json();    
        console.log(data.beers);
        return data.beers;

    } catch (err) {
        throw Error(`Request fail.. ${err}`)
    }   
}

export default getBeers