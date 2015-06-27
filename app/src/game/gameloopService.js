'use strict';
function GameLoopService() {
    var service = {started: false};

    service.startLoop = function (updateFunction, gameObjects) {
        service.renderer = gameObjects.renderer;
        service.camera = gameObjects.camera;
        service.scene = gameObjects.scene;
        service.updateFunction = updateFunction;
        service.started = true;

        render();
    };

    service.stopLoop = function () {
        service.started = false;
    };

    function render (){
        if (!service.started)return;
        service.updateFunction();
        service.renderer.render(service.scene, service.camera);
        requestAnimationFrame(render);
    }

    return service;
}

module.exports = GameLoopService;