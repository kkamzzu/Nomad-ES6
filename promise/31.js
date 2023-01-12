//Promise
const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(e => console.log(`😞 ${e}`));
};


const getMoviesAsync = async () => {
    try {
    const [moviesResponse, suggestionResponse] = await Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
    ]);
    
    const [movies, suggetions] = await Promise.all([
    moviesResponse.json(),
    suggestionResponse.json(),
    ]);
    
    console.log(movies, suggetions);
    } catch (e) {
    console.log(`😞 ${e}`);
    } finally {
    console.log("we are done");
    }
    };
    
    getMoviesAsync();