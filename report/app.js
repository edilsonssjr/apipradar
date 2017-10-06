var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/reports', {
			templateUrl:'templates/list.html',
			controller:'empController'
		})
		.when('/reports/create', {
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/reports/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/reports/:id/show', {
			templateUrl:'templates/show.html',
			controller:'empController'
		});
});
