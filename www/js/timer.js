// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter.timer', ['chart.js'])


.controller('TimerCtrl', function($scope, $state, stepwatch, $http) {
    $scope.myStopwatch = stepwatch;
    $scope.myStopwatch.start();

    var d = $scope.myStopwatch;

    $scope.onLight = function() {
        $http.get("http://192.168.0.18/onLight.php")
    }    

    $scope.offLight = function() {
        $http.get("http://192.168.0.18/offLight.php")
    }

    $scope.buzzer = function() {
        $http.get("http://192.168.0.18/buzzer_sound.php")
    }
})
