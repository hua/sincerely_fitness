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
                "Justin"];
            for (var i = 0; i < names.length; i += 1) {
                Players.insert({
                    name: names[i],
                    pushups: 0,
                    pullups: 0,
                    running: 0,
                    biking: 0,
                    yoga: 0,
                    situps: 0,
                });
            }
        }
    });

})();