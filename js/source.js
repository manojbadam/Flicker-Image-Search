var app = angular.module('app',[]);

app.controller('oneController',function($scope){
	$scope.firstName = "Manoj";
	$scope.friends = [
		{"Name":"Manoj", "Age":"26", "isTech":false},
		{"Name":"Basava", "Age":"29", "isTech":true}
	];
	$scope.techs = [
		{"Name":"C++"},
		{"Name":"C#"},
		{"Name":"Java"},
		{"Name":"PHP"},
		{"Name":"Other"}
	];
	$scope.Add = function()
	{
		tempObj = {};
		tempObj["Name"] = $scope.firstName;
		tempObj["Age"] = $scope.Age;
		tempObj["isTech"] = false;
		$scope.friends.push(tempObj);
		$scope.firstName = "";
		$scope.Age = "";
	};
});