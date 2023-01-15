const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const { sendBasicEmail } = require('./services/email-service');

const jobs = require('./utils/job');

const setupAndStartServer = async() =>{
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`server is listening on PORT ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'amanrawat.ar321@gmail.com',
        //     'tempmailaman123@gmail.com',
        //     'Testing',
        //     'this is a test mail'
        // )
        
    })
};

setupAndStartServer();