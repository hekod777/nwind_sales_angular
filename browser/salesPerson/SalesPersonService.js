nwindSalesApp.factory('SalesPersonFactory', function($http, $state){
	var SalesPersonFactory = {};
	var salesPeople = [];

	SalesPersonFactory.fetchAll = function(){
		return $http.get('/api/salesPeople')
			.then(function(results){
				angular.copy(results.data, salesPeople);
				return salesPeople;
			});
	};

	SalesPersonFactory.submit = function(name){
		return $http.post('/api/salesPeople/', {theName: name})
			.then(function(result){
				salesPeople.push(result.data);
			});

	};

	SalesPersonFactory.delete = function(thePerson){
		return $http.delete('/api/salesPeople/'+thePerson.id)
			.then(function(){
				var idx = salesPeople.indexOf(thePerson);
				salesPeople.splice(idx,1);
			});
	};

	return SalesPersonFactory;
});
