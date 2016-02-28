angular.module('starter.timerServices', [])

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


// this function is to save the record into parse - currently commented bcus not in use yet - all the command working find
    var saveRecord = function(){
    
        console.log(data.hours, data.minutes, data.seconds);
        // var Record = Parse.Object.extend("Record");
        // var record = new Record();

        // record.set("record", data);

        // record.save(null, {
        //   success: function(record) {
        //     // Execute any logic that should take place after the object is saved.
        //     alert('New object created with objectId: ' + record.id);
        //   },
        //   error: function(record, error) {
        //     // Execute any logic that should take place if the save fails.
        //     // error is a Parse.Error with an error code and message.
        //     alert('Failed to create new object, with error code: ' + error.message);
        //   }
        // });
    }

    var data = {
        seconds: 0,
        minutes: 0,
        hours: 0
    }

    var rec = 'Hello';
    var labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var series = ['Series A'];
    var points = [
        [data.seconds, 59, 80, 81, 56, 55, 40],
    ]
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
        reset: reset,
        labels: labels,
        series: series,
        points: points,
        rec: rec
    };
    
});
