import { getMovies } from "../API/api";


var totalPages = 1;

const getMovieByName = async (name,page)=>{
    const newMovies = await getMovies(page);  
    if(newMovies === null || newMovies.length === 0 || page >== totalPages){
        return null;
    }
    const movies = newMovies.results;
    totalPages = newMovies.total_pages;
    var filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(name.toLowerCase())
      );
    
    if(filteredMovies !== null && filteredMovies.length !== 0 ) {
        return filteredMovies;
    }else{
        getMovieByName(name,page+1);
    }
}

export { getMovieByName }