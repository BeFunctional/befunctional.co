'use strict';

/* ==========================================================================
 $_ANGULAR DEFAULTS ---------------------------------------------------------
 ========================================================================== */
var app = angular.module('functionalApp', ['ngMaterial', 'ngMessages']);





/* ==========================================================================
 $_CONTROLLERS --------------------------------------------------------------
 ========================================================================== */
app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function(){
        $log.debug("close LEFT is done");
      });
  };
  $scope.user = {
    email: '',
    firstName: '',
    lastName: ''
  };
}]);
