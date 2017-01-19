/**
 * Created by Mahanth on 12/1/16.
 */
app.controller('realtorController', function ($scope, $mdSidenav, $modal, $rootScope, $location, $routeParams) {
    $scope.toggleLeft = buildToggler('left');
    $rootScope.menuItem = "REALTORS";

    $scope.init = function () {
        $rootScope.showFilter=false;
    };
    var realtorId = $routeParams.id;
    $scope.realtorId=realtorId;


    function init() {
        var realtorId = $routeParams.id;
        $scope.realtorId = realtorId;
    }
    init();

    $scope.done = function () {
        $rootScope.realtorDone = true;
        $location.path('/home');
    };

    $scope.contact = function (realtorId) {
        $scope.realtorId=realtorId;
        $location.path('/realtorContact/'+$scope.realtorId);

    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    };
});