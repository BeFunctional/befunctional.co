'use strict';

/* ==========================================================================
 $_ANGULAR DEFAULTS ---------------------------------------------------------
 ========================================================================== */
var app = angular.module('functionalApp', ['ngMaterial']);





/* ==========================================================================
 $_CONTROLLERS --------------------------------------------------------------
 ========================================================================== */
app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
      .then(function(){
        $log.debug("toggle left is done");
      });
  };
});

app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function(){
        $log.debug("close LEFT is done");
      });
  };
});
