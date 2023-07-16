const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');

const app = express();
const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, ()=>{
        console.log(`The server is started on port : ${PORT}`);
        // const service = new UserService();
        // const newToken = service.createToken({email:'kunalpal12@gmail.com',id:1});
        // console.log("new token is", newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bmFscGFsMTJAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTY4OTUxODgzMiwiZXhwIjoxNjg5NjA1MjMyfQ.eqklEnmbzrB6OO0zGBqEgC6YEig3Ap7e4s9K9y6oTts'
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer();
