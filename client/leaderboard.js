(function () {
    "use strict";

    Template.leaderboard.players = function () {

        // Get the current year
        var year = new Date().getFullYear(); // 2013

        // Show for given month
        // Get the current month
        var startingMonth = new Date().getMonth(); // Jan = 0
        var endMonth = new Date().getMonth() + 1; // Feb = 1

        // We have to get the date times of the months
        var startingDate = new Date(year, startingMonth);
        var endingDate = new Date(year, endMonth);

        // For each player, get all the scores for the month
        var players = [];
        Players.find().forEach(function(player) {
           // player = { name: 'Hua' } ... and so on ..
           // get the scores from beginning of month
           // to the end of the month

           var types = [ 'pushups', 'pullups', 'running', 'biking', 'yoga', 'situps', 'chocolates', 'swimming' ];
           for(var i=0; i<types.length; i++) {
             var type = types[i];
             player[type] = Scores.find({
               player: player._id,
               type: type, // pushups, pullups, ...
               date: { $gte: startingDate, $lt: endingDate }
             }).count();
           }
           players.push(player);
        });
        return players;
    };

    Template.leaderboard.selected_name = function () {
        var player = Players.findOne(Session.get("selected_player"));
        return player && player.name;
    };

    Template.player.selected = function () {
        return Session.equals("selected_player", this._id) ? "selected" : '';
    };

    Template.leaderboard.events({
        'click input.pushups': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'pushups',
              date: new Date()
            });
        },
        'click input.pullups': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'pullups',
              date: new Date()
            });
        },
        'click input.running': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'running',
              date: new Date()
            });
        },
        'click input.biking': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'biking',
              date: new Date()
            });
        },
        'click input.yoga': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'yoga',
              date: new Date()
            });
        },
        'click input.situps': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'situps',
              date: new Date()
            });
        },
        'click input.chocolates': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'chocolates',
              date: new Date()
            });
        },
        'click input.swimming': function () {
            Scores.insert({
              player: Session.get("selected_player"),
              type: 'swimming ',
              date: new Date()
            }); 
        }
    });

    Template.player.events({
        'click': function () {
            Session.set("selected_player", this._id);
        }
    });

})();
