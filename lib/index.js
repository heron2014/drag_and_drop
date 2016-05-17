'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

const Public = require('./public');
const Home = require('./home');

exports.init = function(port, next) {

  const server = new Hapi.Server();
  server.connection({port: port});

  const plugins = [Inert, Home, Public];

  server.register(plugins, function (err) {

    if (err) {
      return next(err);
    }

    server.start(function (err) {
      return next(err, server);
    });
  });
}
