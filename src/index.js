const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
// const {User} = require('./controllers/user-controller');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');

const app = express();
const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, ()=>{
        console.log(`The server is started on port : ${PORT}`);

    });
}

prepareAndStartServer();
