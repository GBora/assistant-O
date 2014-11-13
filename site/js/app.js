	//Use the angular library
	delena = angular.module('Delena',[]);

	//A place to store your code
	delena.controller('DelenaCtrl', function ($scope) {
		$scope.killAllHumans = false;
        $scope.killSomeHumans = false;
        $scope.killAnyHumans = false;
        
        $scope.lineRight = [];
        $scope.lineLeft = [];
        
        $scope.createLine = function(line) {
            line = [];
            for(var i = 0;  i < 20; i = i+1) {
                var tempNumber = chance
            }
        };
	});