app.controller('creditController', function ($scope, $mdSidenav, $modal, $rootScope, $location) {

    $scope.init = function () {
        $rootScope.hideFilter=true;
    };
    $rootScope.menuItem = "CREDIT SCORE";
    $scope.toggleLeft = buildToggler('left');

    $scope.showTip = function () {
        console.log('clicked');
        var modalInstance = $modal.open({
            templateUrl: 'partials/credit_modal.html'

        });
    };

    $scope.done = function () {
        $rootScope.creditDone = true;
        $location.path('/home');
    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
});