var app = angular.module('myApp', ['daterangepicker']);
app.controller('myCtrl',function($scope , $http) {
$scope.startDate = "";
$scope.endDate = "";
$scope.init = function() {

 	$scope.person =
	// null;
	// $http({
	// 		method: 'POST',
	// 	 	url: 'test.json'
	// 	}).success(function(data, status, headers, config) {
	// 					console.log(data);
  //           $scope.person=data;
  //       }).error(function(data, status, headers, config) {
  //   });
[
		{
			"flightName": "KingFisher",
           "flightDate": "12/12/2015",
           "flightTime": "12:30:00",
           "city": "Delhi"
		},
		{
           "flightName": "Spicejet",
           "flightDate": "13/12/2015",
           "flightTime": "12:30:00",
           "city": "Pune"
       },
	    {
           "flightName": "Dolphin",
           "flightDate": "22/12/2015",
           "flightTime": "12:30:00",
           "city": "Punjab"
       }
]

}
$scope.init();
});

app.filter('dateFilter', function () {
return function (items, startDate, endDate) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.flightDate >= startDate && item.flightDate <= endDate){
            filtered.push(item);
        }
    }
    return filtered;
};
});

app.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });

            });
        }
    }
});
