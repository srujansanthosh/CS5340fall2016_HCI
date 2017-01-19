app.controller('houseDetailsController', function ($scope, $mdSidenav, $modal, $rootScope, $location, $mdToast) {
    $rootScope.menuItem = "HOUSE DETAILS";

    $scope.init = function () {
        $rootScope.hideFilter=true;
    };

    $scope.image = { src: 'images/house1.jpeg' };
    $scope.fill = false;

    $scope.map = function () {
        $scope.image = { src: 'images/map.PNG' };
    }
    $scope.photo = function () {
        $scope.image = { src: 'images/house1.jpeg' };
    }

    $scope.contact = function () {
        console.log('contact');
        $location.path('/houseSearch');
    }

    var el = angular.element($('#toaster'));

    $(function () {
        $mdToast.show($mdToast.simple()        
            .textContent('This House has a pending offer!')
                    .action('OK')
                    .highlightAction(true)
                    .parent(el)
                    .position('bottom right'));
    })
    $scope.star = 'images/empty_star.svg';
    $scope.toggle = function () {
        console.log('toggle');
        $scope.fill = !$scope.fill;
           
    }

})