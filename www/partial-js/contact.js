/**
 * Created by Mahanth on 12/1/16.
 */
app.controller('contactController', function ($scope, $mdSidenav, $modal, $rootScope, $location, $routeParams) {

    $scope.init = function () {
        $rootScope.hideFilter=true;
    };
    $scope.message=null;
    function init() {
        $scope.toggleLeft = buildToggler('left');
        var bankerId = $routeParams.id;
        $scope.bankerId = bankerId;
    }
    init();

    $scope.submit = function (type) {
        if (type == 'banker') {
            $rootScope.bankerDone = true;
        }
        else if (type == 'lawyer') {
            $rootScope.lawyerDone = true;
        }
        else if (type == 'realtor') {
            $rootScope.realtorDone = true;
        }
        $scope.message = " Thanks for contacting us, we will get back to you shortly.";
        //$location.path('/home');
    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    };
});
