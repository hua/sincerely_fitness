Meteor Leaderboard Example using RTD
====================================
This is a project exemplifying xolv.io's RTD Test Runner for Meteor, an end-to-end testing solution combining Karma, Selenium Webdriver and Istanbul. [Click here for the RTD project page.](http://xolvio.github.io/rtd/)

[![RTD DEMO](http://img.youtube.com/vi/ESVRDEY-QSk/0.jpg)](http://www.youtube.com/watch?v=ESVRDEY-QSk)

Instructions
------------
Ensure you have [node](http://nodejs.org/download/) and [Meteor](http://meteor.com).

Now clone this project's git repo and run:
```bash
  npm i -g karma phantomjs selenium-webdriver grunt-cli jasmine-node istanbul
  git submodule init
  git submodule update
  cd test/rtd
  npm install
```

And every time you start development, just run this:
```bash
  cd test/rtd
  grunt
```

Have a play around, and enjoy seeing realtime feedback from unit and acceptance tests, as well as test coverage every time you save a file. If you'd like to use RTD in your Meteor project, head over to [the RTD project page.](http://xolvio.github.io/rtd/)

## Heroku Setup

If you haven't yet setup heroku for the project, you'll need to do the following:

(you need to first install Heroku from <http://toolbelt.heroku.com>)

```bash
heroku login
heroku git:remote -a sincerely-fitness-2013
# make changes to your code...
# git add .
# git commit -m "You made some changes yo"
# git push origin master
git push heroku master
```

Code is now live at <http://sincerely-fitness-2013.herokuapp.com/>

## Helpers

Run these commands from the Chrome console when you visit <http://localhost:3000> or <https://sincerely-fitness-2013.herokuapp.com/>.

### Reset scores to zero

```js
Scores.find({}).forEach(function(score) { Scores.remove(score._id) })
```
