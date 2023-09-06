import axios from 'axios'

const instance = axios.create( {
    baseURL: 'https://api.themoviedb.org/3',
} );
export default instance;
console.log( instance );


//axios.get (fetch malet new)