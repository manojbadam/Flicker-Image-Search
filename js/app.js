var app = angular.module('app',[]);

app.controller('firstController', ['$scope','$http',function($scope,$http)
{

	$scope.searchString = "Falls";

	$scope.Search = function(){

		callAPI();
	};

	var callAPI = function(){

	$http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=613027bbd85c6531eb248c30795029fb&tags='+$scope.searchString+'&safe_search=1&per_page=10&format=json&nojsoncallback=1')
       .then(function(res){
          $scope.Data = res.data;                

        });
       };

}]);