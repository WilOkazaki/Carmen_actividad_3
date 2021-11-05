const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.stockPath = '/api/stock';

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.stockPath, require('../routes/almacen'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto', this.port);
        });
    }
}


module.exports = new Server();