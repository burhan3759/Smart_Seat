// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ngCordova', 'starter.controllers', 'starter.services', 'starter.timer', 'starter.timerServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    Parse.initialize('EOlv7ERhLDZZKctV3Ruapy7RfGWB9S2y04Cu0K15', 'tZqbquqSZhRVLFL1ms1y2C49ow8Fpv7hGZ3PhXMB');

    var push = new Ionic.Push({
      "debug": true
    });
 
    push.register(function(token) {
      console.log("Device token:",token.token);
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/MainPage',
    views: {
      'tab-dash': {
        templateUrl: 'templates/main_page.html',
        controller: 'TimerCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/ChartAnalysis',
    views: {
      'tab-account': {
        templateUrl: 'templates/charts.html',
        controller: 'TimerCtrl'
      }
    }
  })

  .state('tab.bug', {
    url: '/Bug',
    views: {
      'tab-bug': {
        templateUrl: 'templates/bug.html',
        controller: 'TimerCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/MainPage');

});
