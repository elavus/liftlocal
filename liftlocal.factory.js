(function () {
  'use strict';

  angular.module('liftLocalApp')
    .factory('liftLocalFactory', liftLocalFactory);

  function liftLocalFactory($http) {
    var service = {
      getWODs: getWODs,
      getSignups: getSignups
    };

    return service;

    function getWODs() {
      var promise = $http.get(getURL('WODs'));
      return promise;
    }

    function getSignups() {
      var promise = $http.get(getURL('Responses'));
      return promise;
    }

    function getURL(sheet) {
      var api;

      api = 'https://sheets.googleapis.com/v4/spreadsheets/1d0XTG-gt72C76ns3o5gOP1bg1_27CUrPkX-kwRkjUN4/values/' + sheet + '?key=AIzaSyBiLTaskmTWmp52vHzuXhp_k2CZ_XBnfSs';
      return api;
    }




  }
})();