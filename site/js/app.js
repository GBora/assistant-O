	  //Use the angular library
	 delena = angular.module('Delena', []);

	  //A place to store your code
	 delena.controller('DelenaCtrl', function ($scope, $timeout) {
	     $scope.killAllHumans = false;
	     $scope.killSomeHumans = false;
	     $scope.killAnyHumans = false;
         
         $scope.lines = [
             {
                 "text": "How are you today?",
                 "tone": "green"
             },
             {
                 "text": "Kill all humans !!!",
                 "tone": "red"
             },
             {
                 "text": "How can I serve you?",
                 "tone": "gold"
             }
         ];
         
         $scope.dialog = [];

	     $scope.lineRight = [];
	     $scope.lineLeft = [];


	     $scope.returnPoints = function (line) {
	         var result = ""

	         for (var i = 0; i < line.length; i = i + 1) {
	             if (i !== 0) {
	                 result = result + "," + line[i];
	             } else {
	                 result = result + line[i];
	             }

	         }

	         return result;
	     };

	     $scope.createLine = function () {
	         line = [];

	         //line.push(0);
	         //line.push(75);

	         for (var i = 0; i < 15; i = i + 1) {
	             var tempNumber = chance.integer({
	                 min: 75,
	                 max: 150
	             });

	             //line.push(i*20);
	             line.push(tempNumber);
	         }

	         //line.push(300);
	         //line.push(75);

	         //line = $scope.returnPoints(line);
	         //console.log(line);
	         return line;
	     };


	     $scope.speakLine = function () {
             
             $scope.dialog.push($scope.lines[chance.integer({
	                 min: 0,
	                 max: $scope.lines.length -1
	             })]);
             
	         $scope.lineRight = $scope.createLine();
	         $scope.lineLeft = $scope.createLine();
             
	     };
         
         $scope.speakLine();
         
         $timeout(function() {
             $scope.speakLine();
             if($scope.dialog.length > 4) {
                 $timeout.cancel(this);
             }
         },1000)
	 });