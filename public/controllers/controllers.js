var myApp = /**
*  Module
*
* Description
*/
angular.module('myApp', []);


myApp.controller('AppCtrl', function($scope,$http){
	console.log("Controller Succesfully Loaded");

	var refresh = function () {

		$http.get('/contactlist').success(function(response){

			console.log("I got the data I request");

			$scope.listContact = response;


		});
	};

	refresh();





	$scope.addContact = function(){

		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function (response){
			console.log(response);
			refresh();
		});

	};

	$scope.remove =function (id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function (response){
			refresh();
		});

	};

// 	$scope.edit = function (id){
// 		console.log(id);
// 		$http.get('/contactlist/' + id).success(function (response){
// 			$scope.contact = response;
// 		});

// 	};

// 	$scope.update = function (){
// 		console.log($scope.contact._id);
// 		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {

// 			refresh();
// 		});
// };

})
