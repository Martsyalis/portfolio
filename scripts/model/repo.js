'use strict';

var app = app || {};

(function ( module ) {
  const repos = {};

  repos.all = [];


  repos.requestRepos = function(callback){

    $.get('/github/user/repos')
      .then (function(data){
        repos.all = data
      })
      .then (callback)


  }


  module.repos = repos;
})(app)