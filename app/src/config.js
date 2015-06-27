'use strict';

module.exports = {
    'play': {
        url: '/play',
        views: {
            'content': {
                templateUrl: 'html/play.html',
                controller: 'PlayController as playControllerVm'
            }
        }
    },
    'menu': {
        url: '/menu',
        views: {
            'content': {
                templateUrl: 'html/menu.html',
                controller: 'MenuController as menuControllerVm'
            }
        }
    }
};