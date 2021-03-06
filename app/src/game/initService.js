'use strict';
function InitService() {
    var THREE = require('three');
    var service = {};

    service.init = function () {
        var renderer = new THREE.WebGLRenderer();
        service.renderer = renderer;

        renderer.setSize(window.innerWidth, window.innerHeight);

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(
            35,         // Field of view
            window.innerWidth / window.innerHeight,  // Aspect ratio
            .1,         // Near
            10000       // Far
        );
        camera.position.set(-15, 10, 15);
        camera.lookAt(scene.position);

        var geometry = new THREE.BoxGeometry(5, 5, 5);
        var material = new THREE.MeshLambertMaterial({color: 0xFF0000});
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        var light = new THREE.PointLight(0xFFFF00);
        light.position.set(10, 0, 10);
        scene.add(light);

        renderer.setClearColor(0xdddddd, 1);

        return {
            camera: camera,
            renderer: renderer,
            scene: scene
        }
    };

    return service;
}

module.exports = InitService;