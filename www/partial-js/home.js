app.controller('homeController', function ($scope, $mdSidenav, $rootScope, $location,$modal) {
    $rootScope.menuItem = "MONUM APP";
    $rootScope.hideFilter=true;
    $rootScope.showFilter=!$rootScope.hideFilter;
    $scope.init = function () {

    };
    $scope.firstStep = "1";

    $scope.creditCheckMe = true;
    $scope.creditChecked = false;

    $scope.budgetCheckMe = true;
    $scope.budgetChecked = false;

    $scope.preCheckMe = true;
    $scope.preChecked = false;

    $scope.currentStep = -1;

    //demo purpose
    $scope.demoComplete = false;
    $scope.count = 1;
    
    $scope.showInfo = function () {
        var modalInstance = $modal.open({
            templateUrl: 'partials/info_modal.html'

        });
    }

    $(function () {
        
        if ($rootScope.creditDone == true) {
            $scope.showCheckCredit = true;
            $scope.checked = true;

        }
        if ($rootScope.budgetDone == true) {
            $scope.showcheckBudget = true;
            $scope.budgetchecked = true;

        }
        if ($rootScope.bankerDone == true) {
            $scope.bankerCheck = false;
            $scope.bankerChecked = true;

        }
        if ($rootScope.lawyerDone == true) {
            $scope.lawyerCheck = false;
            $scope.lawyerChecked = true;

        }
        if ($rootScope.realtorDone == true) {
            $scope.realtorCheck = false;
            $scope.realtorChecked = true;

        }
    })

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.showMortagage=function () {
        $rootScope.mortgagesChecked=true;
        console.log($scope.mortgagesChecked);
        $scope.mortages="#/mortgages";
    }

    $scope.showTurnInChecked=function () {
        $rootScope.turninChecked=true;
        $scope.turnin="#/turnin";
    }

    $scope.showPreApprCheck=function () {
        $rootScope.preapprovedChecked=true;
        console.log($scope.preapprovedChecked);
        $scope.preapprove="#/preapprove";
    }

    $scope.check = function () {
        console.log('check');
        $scope.creditCheckMe = false;
        $scope.creditChecked = true;
    }

    $scope.uncheck = function () {
        console.log('uncheck');
        $scope.creditCheckMe = true;
        $scope.creditChecked = false;
    }

    $scope.progressCheck = function () {
        $scope.creditCheckMe = false;
        $scope.creditChecked = true;
        

        $scope.budgetCheckMe = false;
        $scope.budgetChecked = true;

        $scope.preCheckMe = false;
        $scope.preChecked = true;

        $scope.demoComplete = true;
    }

    $scope.progressUncheck = function () {
        $scope.creditCheckMe = true;
        $scope.creditChecked = false;


        $scope.budgetCheckMe = true;
        $scope.budgetChecked = false;

        $scope.preCheckMe = true;
        $scope.preChecked = false;

        $scope.demoComplete = false;
    }

    $scope.openSideMenu = function() {
        console.log('side menu');
        $mdSidenav('left').toggle();
        
    }

    $scope.gotoHomeSearch = function () {
        $location.path('/houseSearch');
    }
    $scope.gotoMakeOffer = function () {
        $location.path('/offer');
    }

});