var orderForm = angular.module('orderForm', []);

orderForm.controller('orderCtrl', function($scope) {
  $scope.items = [
    {'name': 'Web Development',
     'cost' : 300},
    {'name': 'Design',
   'cost' : 400},
    {'name': 'Integration',
   'cost' : 250},
    {'name': 'Training',
   'cost' : 220},
    {'name': 'Testing',
   'cost' : 500}
  ];

  $scope.totalAmount = 0;


  $scope.total = function(item) {
    $scope.totalAmount += item.cost;
    // console.log($scope.totalAmount);

    return $scope.totalAmount;
  };
});