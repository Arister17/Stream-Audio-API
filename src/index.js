const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const favicon = require('serve-favicon')
const trackRoutes = require('./routes/tracks');
const path = require('path')
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// routes
app.use('/tracks', trackRoutes);

app.listen(3000);
console.log('Servidor en puerto', 3000);