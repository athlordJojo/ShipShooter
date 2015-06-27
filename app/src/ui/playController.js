'use strict';

function PlayController($state, GameService) {
    var vm = this;

    GameService.start();

    vm.end = function () {
        GameService.stop();
        $state.go("menu");
    };
    console.log("play init!");
}

module.exports = PlayController;