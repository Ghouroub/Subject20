(function() {
	var app = angular.module("app");
	app.controller("mainCtrl", searchCtrl)
	
	function searchCtrl($scope,$http) {
	   
	   $scope.adminShow=false;
	
	    $scope.goToAdmin=function(){
	     $scope.adminShow=true;
	    }
	
	
	}

})();