// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter.timer', ['chart.js'])


.controller('TimerCtrl', function($scope, $state, stepwatch) {
    $scope.myStopwatch = stepwatch;
    $scope.myStopwatch.start();

    var d = $scope.myStopwatch;

    console.log(d.data.seconds);
    console.log(d.rec);
    console.log(d.labels[0]);
    console.log(d.points[0][0]);



    // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    // $scope.series = ['Series A', 'Series B'];
    // $scope.data = [
    //     [65, 59, 80, 81, 56, 55, 40],
    //     [28, 48, 40, 19, 86, 27, 90]
    // ]

    
})
