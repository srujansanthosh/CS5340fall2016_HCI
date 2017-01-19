app.controller('helplineController', function ($scope, $mdSidenav, $rootScope) {
    $rootScope.menuItem = "FAQ";
    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();


    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
    $scope.closeSideNav = function () {
        $mdSidenav('left').toggle();
    }
});