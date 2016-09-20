nwindSalesApp.controller('SalesPersonListCtrl', function($scope, $log, SalesPersonFactory){
	
	SalesPersonFactory.fetchAll()
		.then (function(results){
			console.log (results);
			$scope.salespeople = results;
		});

	$scope.submit = function(){
		console.log($scope.name);
		var theName = $scope.name;
		$scope.name = '';
		console.log ($scope.newSalesperson.$invalid);
		return SalesPersonFactory.submit(theName);
	}

	$scope.delete = function(salesperson){
		//console.log(salesperson);
		return SalesPersonFactory.delete(salesperson);
	}

})