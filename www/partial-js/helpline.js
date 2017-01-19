app.controller('helplineController', function ($scope, $mdSidenav, $rootScope) {
    $rootScope.menuItem = "HELPLINE";
    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();

    $scope.init = function () {
        $rootScope.hideFilter=!$rootScope.hideFilter;
    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
    $scope.closeSideNav = function () {
        $mdSidenav('left').toggle();
    }
});