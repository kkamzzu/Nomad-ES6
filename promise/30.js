//Promise
const getMoviesPromise = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(e => console.log(`😞 ${e}`));
};


// better than promise
const getMoviesAsync = async() => {
    try{
        const response = await fetch("https://yts.mx/api/v2/list_movies.jsonl");
        const json = await response.json();
        console.log(json)
    } catch(e) {
        console.log(`😞 ${e}`)
    } finally {
        console.log("We are done")
    }
};

getMoviesAsync();