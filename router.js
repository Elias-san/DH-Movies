// Route System

const rutas = {
    elegida: function (req, res) {
        switch (req.url) {
            // Home
            case '/':
                res.end('Home');
                break;
            // En cartelera
            case '/en-cartelera':
                res.end('En cartelera');
                break;
            case '/mas-votadas':
                res.end('Más Votadas');
                break;
            case '/sucursales':
                res.end('Sucursales');
                break;
            case '/contacto':
                res.end('Contacto');
                break;
            case '/preguntas-frecuentes':
                res.end('Preguntas Frecuentes');
                break;
            default:
                res.end('404 not found')
        }        
    }
}


module.exports = rutas