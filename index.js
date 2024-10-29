    const express = require('express')
   // const mongoose = require('mongoose');

    const PORT = 5002;
    const app = express();
   // mongoose.connect(`mongodb://root:example@mongo:27017`);

    app.get('/', (req, res) => res.send('<h1> hello amr 555555555555555 <h1>'));

    app.listen(PORT, () => console.log(`app is on on port : ${PORT}`));
   // .then(() => console.log('connect to db .....')).catch((err) => console.log('failed to connect ...:', err))
   //connect to db
    /*const DB_USER = 'root';
    const DB_PASSWORD = 'example';
    const DB_PORT = 27017;
    const DB_HOST = 'mongo'
    const URI = ('mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}');*/