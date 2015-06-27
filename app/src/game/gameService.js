'use strict';
function GameService(InitService, GameLoopService) {
    var THREE = require('three');
    var service = {
        running: false
    };

    var gameObjects;

    InitService.init();

    service.stop = function () {
        service.stop = false;
        document.body.removeChild(gameObjects.renderer.domElement);
    };

    service.start = function () {
        gameObjects = InitService.init();
        document.body.appendChild(gameObjects.renderer.domElement);


        function update(){
            console.log("update");
        }

        GameLoopService.startLoop(update, gameObjects);

        //function render() {
        //    requestAnimationFrame(render);
        //    gameObjects.renderer.render(gameObjects.scene, gameObjects.camera);
        //}
        //
        //render();
    };

    return service;
}

module.exports = GameService;