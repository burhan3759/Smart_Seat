angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.filter('numberFixedLen', function () {
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = ''+num;
        while (num.length < len) {
            num = '0'+num;
        }
        return num;
    };
})
.constant('SW_DELAY', 1000)
.factory('stepwatch', function (SW_DELAY, $timeout) {

    var saveRecord = function(){
    
        console.log(data.minutes, data.seconds);
        var Record = Parse.Object.extend("Record");
        var record = new Record();

        record.set("record", data);

        record.save(null, {
          success: function(record) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + record.id);
          },
          error: function(record, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
          }
        });
    }

    var data = {
        seconds: 0,
        minutes: 0,
        hours: 0
    },
    stopwatch = null;

    var start = function () {
        stopwatch = $timeout(function () {
            data.seconds++;
            if (data.seconds >= 60) {
                data.seconds = 00;
                data.minutes++;
                if (data.minutes >= 60) {
                    data.minutes = 0;
                    data.hours++;
                }
            }
            start();
        }, SW_DELAY);
    };

    var stop = function () {
        $timeout.cancel(stopwatch);
        stopwatch = null;
        saveRecord();
    };

    var reset = function () {
        stop()
        data.seconds = 0;

    };
    return {
        data: data,
        start: start,
        stop: stop,
        reset: reset
    };
});
