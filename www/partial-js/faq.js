app.controller('faqController', function ($scope, $mdSidenav, $rootScope) {
    $scope.init = function () {
        $rootScope.showFilter=false;
    };
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