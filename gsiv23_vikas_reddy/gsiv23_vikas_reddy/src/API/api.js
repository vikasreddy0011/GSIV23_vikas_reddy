const API_KEY = 'f301c5bf802276af6d40126ca0e9129a';
const SORT_BY_FIELD = 'primary_release_date';
const SORT_BY_VALUE = 'asc';
const PRIMARY_RELEASE_DATE = '2023-08-16';



/**This api is used to get the movie list  */
const getMovies = async (page)=>{
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&page='+page
    +'&sort_by='+SORT_BY_FIELD+'.'+SORT_BY_VALUE+'&primary_release_date.gte='+PRIMARY_RELEASE_DATE+'&include_image_language=en,null');
    const data = await response.json();
    return data;
}

export {getMovies};