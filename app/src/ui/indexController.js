'use strict';
function IndexController(){
    var vm = this;
    vm.clicked = function(){
        console.log("clicked!");
    };

    console.log("index call");
}

module.exports = IndexController;