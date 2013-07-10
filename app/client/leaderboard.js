(function () {
    "use strict";

    Template.leaderboard.players = function () {
        return Players.find({}, {sort: {score: -1, name: 1}});
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
            Players.update(Session.get("selected_player"), {$pushups: {score: 5}});
        },
        'click input.pullups': function () {
            Players.update(Session.get("selected_player"), {$pullups: {score: 5}});
        },
        'click input.running': function () {
            Players.update(Session.get("selected_player"), {$running: {score: 1}});
        },
        'click input.biking': function () {
            Players.update(Session.get("selected_player"), {$biking: {score: 1}});
        },
        'click input.yoga': function () {
            Players.update(Session.get("selected_player"), {$yoga: {score: 1}});
        },
        'click input.situps': function () {
            Players.update(Session.get("selected_player"), {$situps: {score: 5}});
        }       
    });

    Template.player.events({
        'click': function () {
            Session.set("selected_player", this._id);
        }
    });

})();