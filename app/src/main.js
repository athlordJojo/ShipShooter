'use strict';
require('angular');
require('ui-router');
var routingConfig = require('./config');
var menuController = require('./ui/menuController');
var playController = require('./ui/playController');
var gameService = require('./game/gameService');
var initService = require('./game/initService');
var gameLoopService = require('./game/gameLoopService');

module.exports = angular
    .module('shipShooter', ['ui.router'])
    .controller('MenuController', menuController)
    .controller('PlayController', playController)

    .factory('InitService', initService)
    .factory('GameService', gameService)
    .factory('GameLoopService', gameLoopService)

    .config(function ($stateProvider) {
                angular.forEach(routingConfig, function (config, name) {
                    console.log(name);
                    $stateProvider.state(name, config);
                });
            })
    .config(function ($urlRouterProvider) {
                $urlRouterProvider.otherwise('/menu');
            });
