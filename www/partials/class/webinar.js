app.controller('webinarController', function ($scope, $mdSidenav, $rootScope) {

    $rootScope.menuItem = "WEBINAR";
    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();


    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }


});