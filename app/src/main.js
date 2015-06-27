'use strict';
var angular = require('angular');
var uiRouter = require('ui-router');
var IndexController = require('./ui/indexController');

module.exports = angular
    .module('shipShooter', [])
    .controller('IndexController', IndexController);
