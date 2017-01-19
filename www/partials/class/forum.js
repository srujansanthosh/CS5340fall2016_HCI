app.controller('forumController', function ($scope, $mdSidenav, $rootScope) {
    $rootScope.menuItem = "FEEDBACK FORM";

    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();
    

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
});