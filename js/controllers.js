
searchApp.controller('list', ['$scope', '$http', function($scope, $http) {
  $scope.testf = function(title) {
    	$http.get('http://www.omdbapi.com/?t='+title+'&plot=full&r=json').success(function(data1) {
        $scope.dat1 = data1; 
      });	
  }
}]);