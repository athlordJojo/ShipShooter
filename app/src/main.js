'use strict';
require('angular');
require('ui-router');
var RoutingConfig = require('./config');
var MenuController = require('./ui/menuController');
var PlayController = require('./ui/playController');

module.exports = angular
    .module('shipShooter', ['ui.router'])
    .controller('MenuController', MenuController)
    .controller('PlayController', PlayController)

    .config(function ($stateProvider) {
                angular.forEach(RoutingConfig, function (config, name) {
                    console.log(name);
                    $stateProvider.state(name, config);
                });
            })
    .config(function ($urlRouterProvider) {
                $urlRouterProvider.otherwise('/menu');
            });
