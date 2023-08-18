// eslint-disable-next-line no-unused-vars
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9';
const API_TOKEN ='eyJhdWQiOiI1NTUyZmRlMGVmMzE1MDQwZTA3M2FjMDc3NzQ4MGIwNiIsInN1YiI6IjY0YTZhOGMzY2FlNjMyMDExZmEzMjMwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._DaUkZO060ZW-I63X4TkxACVu0cLawgcS2UdSo1sOKc'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}.${API_TOKEN}`
    }
};


export const getMoviesList = async (data) => {
    const dataMovie = await fetch(`${API_URL}/movie/${data}`, options)
            .then(response => response.json())
            .then(response => response.results)
            .catch(err => console.error(err));
    return dataMovie
}


export const searchMovie = async (e) => {
    const movie = await fetch(`${API_URL}/search/movie?query=${e}`, options)
            .then(response => response.json())
            .then(response => response.results)
            .catch(err => console.error(err));
    
    return movie;
    
}
