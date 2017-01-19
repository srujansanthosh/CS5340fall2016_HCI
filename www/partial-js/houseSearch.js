app.controller('searchController', function ($scope, $mdSidenav, $modal, $rootScope, $location) {

    console.log($rootScope.hideFilter);
    $rootScope.hideFilter=false;

    $scope.init = function () {
        $rootScope.hideFilter=false;
    };

    $rootScope.menuItem = "HOUSE SEARCH";
    $rootScope.searchHome = true;

    $scope.houseDetails = function () {
        $location.path('/houseDetails');
    }
    $scope.showFilter = function () {

    }
});