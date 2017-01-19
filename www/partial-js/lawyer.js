/**
 * Created by Mahanth on 12/1/16.
 */
app.controller('lawyerController', function ($scope, $mdSidenav, $modal, $rootScope, $location, $routeParams) {

    $scope.init = function () {
        $rootScope.hideFilter=true;
    };
    $scope.toggleLeft = buildToggler('left');
    $rootScope.menuItem = "LAWYERS";

    var lawyerId = $routeParams.id;
    $scope.lawyerId=lawyerId;


    function init() {
        var lawyerId = $routeParams.id;
        $scope.lawyerId = lawyerId;
    }
    init();

    $scope.done = function () {
        $rootScope.lawyerDone = true;
        $location.path('/home');
    };

    $scope.contact = function (lawyerId) {
        $scope.lawyerId=lawyerId;
        $location.path('/lawyerContact/'+$scope.lawyerId);

    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    };
});