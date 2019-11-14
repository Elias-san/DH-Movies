const fs = require('fs');

const rutaMovies = `${__dirname}/data/movies.json`;
const contenidoMovies = fs.readFileSync(rutaMovies, 'utf8');
let movies = contenidoMovies.length > 0 ? JSON.parse(contenidoMovies) : null;

module.exports = movies