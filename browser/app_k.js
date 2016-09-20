var nwindSalesApp = angular.module('nwindSalesApp',['ui.router']);

nwindSalesApp
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl:'/home.html',
			})
			.state('salesPeople',{
				url:'/salesPeople',
				templateUrl:'/salesPerson/salesPeople.html',
				controller:'SalesPersonListCtrl',
			})
			.state('regions',{
				url:'/regions',
				templateUrl:'/region/regions.html'
			})


		$urlRouterProvider.otherwise('/');

	})