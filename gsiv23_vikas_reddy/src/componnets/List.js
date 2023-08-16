import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
import { getMovies } from '../API/api'; // Replace with your API function
import {  useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../API/apiSlice';


const List = () => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound,setNotFound] = useState(false);
  const dispatch = useDispatch();


  const fetchMovies = async () => {
    dispatch(fetchDataStart());

    try {
        const newMovies = await getMovies(page);  
        if (newMovies.results.length === 0) {
            setHasMore(false);
            } else {
            setMovies([...movies, ...newMovies.results]);
            setPage(page + 1);
            }
        dispatch(fetchDataSuccess(newMovies));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
  };


  useEffect(() => {
    fetchMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    searchMovieWithName(searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch();
    console.log(event.target.value);
  };

  const searchMovieWithName = (name)=>{
    //if search text is empty then show all the movie list
    if(name === null || name === "" || name === undefined){
        fetchMovies();
        setNotFound(false);
        return ;
    }
    var filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(name.toLowerCase())
      );
    
    if(filteredMovies !== null && filteredMovies.length !== 0 ) {
       setNotFound(false);
        setMovies(filteredMovies);
    }else{
        setNotFound(true);
        //filteredMovies = fetchFromApi(name,page);
        // If the movie is not present in the movies varaible then we have to fetch the data again from the API
        // and perform filtering. But keeping performance and volume, that is not the best way.
        // Observed that no Search API found on the given API documentation.
    }
  }


  return (
 <>
   
     <div className="search-bar-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      </div>
      {notFound?<p>No movies found</p>:<>
    <InfiniteScroll
      dataLength={movies?.length}
      next={!searchQuery?fetchMovies:null}
      hasMore={hasMore}
    >
    <div className="box">
        <div className="container">
            <div className="movie-list"> 
                {movies?.map(movie => (
                <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    </div>
    </InfiniteScroll></>
}
    </>
  );
};

export default List;
