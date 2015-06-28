'use strict';
function GameService(InitService, GameLoopService) {
    var THREE = require('three');
    var service = {
        running: false
    };

    var gameObjects;

    InitService.init();

    service.stop = function () {
        document.body.removeChild(gameObjects.renderer.domElement);
        GameLoopService.stopLoop();
    };

    service.start = function () {
        gameObjects = InitService.init();
        document.body.appendChild(gameObjects.renderer.domElement);

        function update(){
            console.log("update");
        }

        GameLoopService.startLoop(update, gameObjects);
    };

    return service;
}

module.exports = GameService;