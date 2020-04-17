import axios from '../../axios/index'
import config from '../../config'
/**movies list api */
export async  function getMovieData(){
  return await  axios.get('/4/list/1')
    .then(function(response){
        return response
    })
    .catch(function(errorMsz){
        return errorMsz
    })
}
//**seach by Name API */
export async function searchMovies(params){
    const url=`/3/search/movie?api_key=${config.api_key}&query=${params}`
    return await axios.get(url)
    .then(function(response){
        return response
    })
    .catch(function(errorResult){
        return errorResult;
    })
}
/***get detail of particular movie by id */
export async function getMovieDetail(id){
    const url=`/3/movie/${id}?api_key=${config.api_key}`
    return await axios.get(url)
    .then(function(response){
       return response
    }).catch(function(errorResult){
        return errorResult
    })
}
