document.addEventListener('DOMContentLoaded', init, false);

/**
 * You can manipulate the video here
 * For example: Uncomment the code below and in the index to get a Start/Stop button
 */
function init() {
    const VP = document.getElementById('videoPlayer');
    const VPToggle = document.getElementById('toggleButton');

    VPToggle.addEventListener('click', function () {
        if (VP.paused)
            VP.play();
        else
            VP.pause();
    })
}

(function () {
    var app = angular.module('videoStore', []);

    app.controller('storeController', function () {
        this.products = videos;
    })

    var videos = [{
        name: 'myVideo1',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo2',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo3',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo4',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo5',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo6',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo7',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo8',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo9',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo10',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo11',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo12',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo13',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo14',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo15',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo16',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo17',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo18',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo19',
        path: 'assets/IMG_5314.MP4'
    }, {
        name: 'myVideo20',
        path: 'assets/IMG_5314.MP4'
    }];
})();