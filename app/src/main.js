'use strict';
var angular = require('angular');
var IndexController = require('./ui/indexController');

module.exports = angular
    .module('shipShooter', [])
    .controller('IndexController', IndexController);
