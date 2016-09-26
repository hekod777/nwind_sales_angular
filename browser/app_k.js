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
        resolve: {
          //how about resolving salesPeople?
        }
			})
			.state('regions',{
				url:'/regions',
				templateUrl:'/region/regions.html',
				controller:'RegionListCtrl',
        resolve: {
          //how about resolving regions?
        }
			});


		$urlRouterProvider.otherwise('/');

	});
