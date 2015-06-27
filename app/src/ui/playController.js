'use strict';
function PlayController($state) {
    var vm = this;

    vm.end = function () {
        $state.go("menu");
    };

    console.log("play init!");
}

module.exports = PlayController;