export default {
    apiUrl:process.env.REACT_APP_BASE_URL,
    token:process.env.REACT_APP_TOKEN,
    api_key:process.env.REACT_APP_API_KEY,
    imgeUrl:'https://image.tmdb.org/t/p/w500',
    searchUrl:`${process.env.REACT_APP_SEARCH_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=`

}