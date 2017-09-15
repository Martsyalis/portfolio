"use strict";

app = app || {};

(function (module) {
  const repoView = {};


  const render = Handlebars.compile($('#github-template').text());

  repoView.index = function() {
    $('#about ul').append(
      app.repos.map(render)
    );
  };



  module.repoView = repoView; 

})(app);