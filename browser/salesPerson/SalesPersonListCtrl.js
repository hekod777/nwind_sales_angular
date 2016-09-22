nwindSalesApp.controller('SalesPersonListCtrl', function($rootScope, $scope, $log, SalesPersonFactory, RegionFactory){
	
	SalesPersonFactory.fetchAll()
		.then (function(results){
			console.log (results);
			//$scope.salespeople = results;
			$rootScope.salespeople = results;
		});

	RegionFactory.fetchAll()
		.then (function(results){
			console.log (results);
			//$scope.regions = results;
			$rootScope.regions = results;
		});

	$scope.submit = function(){
		console.log($scope.name);
		var theName = $scope.name;
		$scope.name = '';
		console.log ($scope.newSalesperson.$invalid);
		return SalesPersonFactory.submit(theName);
	}

	$scope.delete = function(salesperson){
		return SalesPersonFactory.delete(salesperson);
	}

})