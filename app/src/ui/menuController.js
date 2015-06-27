'use strict';
function IndexController($state){
    var vm = this;
    vm.start = function(){
        console.log("clicked!");
        $state.go('play');
    };

    console.log("index call");
}

module.exports = IndexController;