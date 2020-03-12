/**
 *
 * @author:   Javier Contreras
 * @email:    javier.contreras@altitudesolutions.org
 *
 **/


const express = require('express');
const app = express();


// login
app.use(require('./login'));

// Repo updater
app.use(require('./app/updateRepo'));



module.exports = app;