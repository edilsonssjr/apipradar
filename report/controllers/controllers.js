myApp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.report = {};
	$scope.getReports = function(){
		$http.get('/api/reports/').then(function(response){
			$scope.reports = response.data;
		});
	};
	$scope.showReports = function(){
		var id = $routeParams.id;
		$http.get('/api/reports/'+ id).then(function(response){
			$scope.report = response.data;
		});
	};
	$scope.addReports = function(){
		$http.post('/api/reports/', $scope.report).then(function(response){
			$scope.reports = response.data;
			window.location.href = '/';
		});
	};
	$scope.updateReports = function(){
		var id = $routeParams.id;
		$http.put('/api/reports/'+ id , $scope.report).then(function(response){
			$scope.report = response.data;
			window.location.href = '/';
		});
	};
	$scope.deleteReports = function(id){
		var id = id;
		$http.delete('/api/reports/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});