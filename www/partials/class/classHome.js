app.controller('classHomeController', function ($scope, $mdSidenav, $location, $rootScope) {

    $rootScope.menuItem = "HOMEBUYER 101 CLASS";

    $scope.onChange = function(){
        console.log('jdshfd');
        console.log($scope.classType);
        $location.path('/'+ $scope.classType);
    }
});