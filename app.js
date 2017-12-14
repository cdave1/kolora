'use strict';

require('babel-core/register');
require('babel-polyfill');

const path = require('path');

const express = require('express');
const compression = require('compression');
const React = require('react');
const ReactDOM = require('react-dom');
const dotenv = require('dotenv');

dotenv.load();

const DreamEngineAPI = require('./src/dreamEngineAPI.js')

var app = express();

app.set('port', process.env.PORT || 3009);
app.use(compression());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Palettes
app.get('/palettes',            DreamEngineAPI.allPalettes);
app.get('/palettes/:page',      DreamEngineAPI.allPalettes);
app.get('/palette/:paletteId',  DreamEngineAPI.getPalette);

app.get('*', (req, res) => {
    res.render('index');
});

app.listen(app.get('port'), () => {
    console.log("Listening on", app.get("port"))
});

module.exports = app;