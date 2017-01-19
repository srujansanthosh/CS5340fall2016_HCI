/**
 * Created by Mahanth on 12/1/16.
 */
app.controller('bankerController', function ($scope, $mdSidenav, $modal, $rootScope, $location, $routeParams) {
    $scope.toggleLeft = buildToggler('left');


    $rootScope.menuItem = "LENDERS";

    $scope.init = function () {
        $rootScope.showFilter=false;
    };
    $rootScope.menuItem = "BANKERS";

    var bankerId = $routeParams.id;
    $scope.bankerId=bankerId;


    function init() {
        var bankerId = $routeParams.id;
        $scope.bankerId = bankerId;
    }
    init();

    $scope.done = function () {
        $rootScope.bankerDone = true;
        $location.path('/home');
    };

    $scope.contact = function (bankerId) {
        $scope.bankerId=bankerId;
        $location.path('/bankerContact/'+$scope.bankerId);

    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    };
});