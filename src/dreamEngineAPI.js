'use strict';

var _ = require('lodash');
var superagent = require('superagent');


function handleHTTPError(err) {
    console.error("handleHTTPError", err);
}


exports.allPalettes = (req, res) => {
    console.log("Get palettes", process.env.DREAM_ENGINE_API_URL)
    superagent
        .get(process.env.DREAM_ENGINE_API_URL + '/palettes')
        .type('application/json')
        .set('Accept-Encoding', 'identity')
        .set('Authorization', 'Bearer ' + process.env.DREAM_ENGINE_API_KEY)
        .accept('json')
        .on('error', handleHTTPError)
        .end((err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.json(response.body);
            }
        });
}


exports.getPalette = (req, res) => {
    superagent
        .get(process.env.DREAM_ENGINE_API_URL + '/palette/' + req.params.paletteId)
        .type('application/json')
        .set('Accept-Encoding', 'identity')
        .set('Authorization', 'Bearer ' + process.env.DREAM_ENGINE_API_KEY)
        .accept('json')
        .on('error', handleHTTPError)
        .end((err, response) => {
            if (err) {
                res.send(err);
            } else {
                res.json(response.body);
            }
        });
}