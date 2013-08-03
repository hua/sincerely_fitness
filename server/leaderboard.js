(function () {
    "use strict";

    Meteor.startup(function () {
      if (Players.find().count() === 0) {
            var names = ["Hua",
                "Khoi",
                "LaDonna",
                "Pepper",
                "Dennis",
                "Rene",
                "Melia",
                "Jaclyn",
                "Colleen",
                "Liana",
                "Jen",
                "Sylvia",
                "Jaclyn",
                "Zain",
                "Matt",
                "Paul",
                "Bryan",
                "Justin",
                "Kirsten"];
            for (var i = 0; i < names.length; i += 1) {
                /*jshint -W083 */
                Players.insert({
                  name: names[i]
                }, function(err, player) {

                  var types = [ 'pushups', 'pullups', 'running', 'biking', 'yoga', 'situps', 'chocolates', 'swimming' ];

                  for(var i=0; i<types.length; i++) {
                    Scores.insert({
                      type: types[i],
                      date: new Date(),
                      player: player
                    });
                  }

                });
            }
        }
    });

})();
