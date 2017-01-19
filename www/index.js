var app = angular.module("myApp", ['ngMaterial', 'ngRoute', 'ui.bootstrap', 'angular-tour', 'ngAnimate', 'md.chips.select', 'angular-carousel']);

app.controller('appController', function ($scope, $mdSidenav, $rootScope,$location) {
    
    $scope.toggleLeft = buildToggler('left');
    $rootScope.hideFilter=true;
    $(function () {
        $rootScope.searchHome = false;
    })

    function buildToggler(componentId) {
        
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.closeSideNav = function () {
        $mdSidenav('left').toggle();
    }

    $scope.showFilters = function () {
        console.log('inside show filters');
        $location.path('/filters');
    }
});

app.config(['$routeProvider',
  function ($routeProvider) {

      $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'

        })
        .when('/credit', {
            templateUrl: 'partials/credit.html',
            controller: 'creditController'
        })
        .when('/budget', {
            templateUrl: 'partials/budget.html',
            controller: 'budgetController'
        })
        .when('/budget1', {
            templateUrl: 'partials/budget1.html',
            controller: 'budgetController'
        })
        .when('/houseSearch', {
            templateUrl: 'partials/houseSearch.html',
            controller: 'searchController'
        })
        .when('/houseDetails', {
            templateUrl: 'partials/houseDetails.html',
            controller: 'houseDetailsController'
        })
        .when('/filters', {
            templateUrl: 'partials/filters.html',
            controller: 'filtersController'
        })
        .when('/class', {
            templateUrl: 'partials/class/classHome.html',
            controller: 'classHomeController'
        })
        .when('/aid', {
            templateUrl: 'partials/class/aid.html',
            controller: 'aidController'
        })
        .when('/forum', {
            templateUrl: 'partials/class/forum.html',
            controller: 'forumController'
        })
          .when('/bankers', {
              templateUrl: 'partials/bankers.html',
              controller: 'bankerController'
          })
          .when('/lawyers', {
              templateUrl: 'partials/lawyers.html',
              controller: 'lawyerController'
          })
          .when('/realtors', {
              templateUrl: 'partials/realtors.html',
              controller: 'realtorController'
          })
          .when('/bankerContact/:id', {
              templateUrl: 'partials/bankerContact.html',
              controller: 'contactController'
          })
          .when('/lawyerContact/:id', {
              templateUrl: 'partials/lawyerContact.html',
              controller: 'contactController'
          })
          .when('/realtorContact/:id', {
              templateUrl: 'partials/realtorContact.html',
              controller: 'contactController'
          })
           .when('/webinar', {
               templateUrl: 'partials/class/webinar.html',
               controller: 'webinarController'
           })
          .when('/faq', {
              templateUrl: 'partials/faq.html',
              controller: 'faqController'
          })
          .when('/helpline', {
              templateUrl: 'partials/helpline.html',
              controller: 'helplineController'
          })
          .when('/seminar', {
              templateUrl: 'partials/class/seminar.html',
              controller: 'seminarController'
          })
          .when('/faq', {
              templateUrl: 'partials/faq.html',
              controller: 'faqController'
          })

          .when('/turnin', {
              templateUrl: 'partials/turnin.html',
              controller: 'turninController'
          })
          .when('/preapprove', {
              templateUrl: 'partials/preapprove.html',
              controller: 'preapproveController'
          })
          .when('/mortgages', {
              templateUrl: 'partials/mortgages.html',
              controller: 'mortgagesController'
          })
          .when('/offer', {
              templateUrl: 'partials/offer.html',
              controller: 'offerController'
          })
          .when('/connect', {
              templateUrl: 'partials/connect_people.html',
              controller: 'connectController'
          })
          .when('/document', {
              templateUrl: 'partials/document.html',
              controller: 'docController'

          })
        .otherwise({
            redirectTo: '/home'
        });

  }]);