app.controller('aidController', function ($scope, $mdSidenav, $rootScope) {
    $rootScope.menuItem = "FINANCIAL AID";
    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();
    

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
});