app.controller('filtersController', function ($scope, $mdSidenav, $modal, $rootScope, $location,$window) {
    $scope.hideFilter=false;
    console.log($rootScope.hideFilter);

    $scope.init = function () {
       console.log("hello");
       $rootScope.hideFilter=!$rootScope.hideFilter;
    };



    $rootScope.menuItem = "FILTERS";

    $scope.props=true;
    $scope.chip=true;
    $scope.beds = [
        "Studio",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7+"
    ];

    $scope.baths = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7+"
    ];

    $scope.areas = [
        "Allston",
        "Fenway/Kenmore",
        "Brighton",
        "Cambridge",
        "Roxbury",
        "Dorchester",
        "Mission Hill",
        "East Boston",
        "Brookline",
        "South Boston"
    ]

    $scope.proximity = [
        "School",
        "Hospital",
        "Public Transport",
        "Super Market",
        "Bar/Pubs",
        "Parks"
    ]

    $scope.selectedItems = []
    $scope.listItems = [{
        name: "School",
        id: 0
    }, {
        name: "Hospital",
        id: 1
    }, {
        name: "Public Transport",
        id: 2
    }, {
        name: "Super Market",
        id: 3
    }, {
        name: "Bar/Pubs",
        id: 4
    }, {
        name: "Parks",
        id: 5
    }];

    $scope.selectedAreas = [];
    $scope.listAreas = [{
        name: "Allston",
        id: 0
    }, {
        name: "Fenway/Kenmore",
        id: 1
    }, {
        name: "Brighton",
        id: 2
    }, {
        name: "Cambridge",
        id: 3
    }, {
        name: "Bar/Pubs",
        id: 4
    }, {
        name: "Roxbury",
        id: 5
    }, {
        name: "Dorchester",
        id: 6
    }, {
        name: "Roxbury",
        id: 7
    }, {
        name: "Mission Hill",
        id: 8
    }, {
        name: "East Boston",
        id: 9
    }, {
        name: "Brookline",
        id: 10
    }];
    $scope.hideProp=function () {
        $scope.props=false;

    }

    $scope.showProp=function () {
        $scope.props=true;
    }

    $scope.hideChip=function () {
        $scope.props=false;

    }

    $scope.showChip=function () {
        $scope.props=true;

    }
})