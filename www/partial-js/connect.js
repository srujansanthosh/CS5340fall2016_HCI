

app.controller('connectController', function($scope,$rootScope) {
    $rootScope.menuItem = "Connect With People";

    $scope.init = function () {
        $rootScope.hideFilter=true;
    };
        var imagePath = 'img/list/60.jpeg';

        $scope.buttonValue = "CONNECT";

        $scope.Contacts = [{
            id : 1,
            face : imagePath,
            what: 'David',
            who: 'Currently in Budgeting step',
            isOnline: 'glyphicon glyphicon-ok-sign green-color',
            isDisabled : false,
            buttonValue : "CONNECT",
            buttonstyle :"connect-button"
        }, {
            id : 2,
            face : imagePath,
            what: 'Rosy',
            who: 'Currently Assembling her Team',
            isOnline: 'glyphicon glyphicon-ok-sign red-color',
            isDisabled : false,
            buttonValue : "CONNECT",
            buttonstyle :"connect-button"
        }, {
            id : 3,
            face : imagePath,
            what: 'Bryan',
            who: 'Just started his homebuying process',
            isOnline: 'glyphicon glyphicon-ok-sign black-color',
            isDisabled : false,
            buttonValue : "CONNECT",
            buttonstyle :"connect-button"
        }, {
            id : 4,
            face : imagePath,
            what: 'Srujan',
            who: 'Closing his offer',
            isOnline: 'glyphicon glyphicon-ok-sign red-color',
            isDisabled : false,
            buttonValue : "CONNECT",
            buttonstyle :"connect-button"

        }, {
            id : 5,
            face : imagePath,
            what: "Mahanth",
            who: 'Started his house search',
            isOnline: 'glyphicon glyphicon-ok-sign green-color',
            isDisabled : false,
            buttonValue : "CONNECT",
            buttonstyle :"connect-button"
        }];

    $scope.FriendsButton = "Message";

    $scope.friends = [{
        id : 1,
        face : imagePath,
        what: 'David',
        who: 'Currently in Budgeting step',
        isOnline: 'glyphicon glyphicon-ok-sign green-color',
        isDisabled : false,
        FriendsButton : "Message",
        buttonstyle :"connect-button"
    }, {
        id : 2,
        face : imagePath,
        what: 'Rosy',
        who: 'Currently Assembling her Team',
        isOnline: 'glyphicon glyphicon-ok-sign red-color',
        isDisabled : false,
        FriendsButton : "Message",
        buttonstyle :"connect-button"
    }, {
        id : 3,
        face : imagePath,
        what: 'Bryan',
        who: 'Just started his homebuying process',
        isOnline: 'glyphicon glyphicon-ok-sign black-color',
        isDisabled : false,
        FriendsButton : "Message",
        buttonstyle :"connect-button"
    }, {
        id : 4,
        face : imagePath,
        what: 'Srujan',
        who: 'Closing his offer',
        isOnline: 'glyphicon glyphicon-ok-sign red-color',
        isDisabled : false,
        FriendsButton : "Message",
        buttonstyle :"connect-button"

    }, {
        id : 5,
        face : imagePath,
        what: "Mahanth",
        who: 'Started his house search',
        isOnline: 'glyphicon glyphicon-ok-sign green-color',
        isDisabled : false,
        FriendsButton : "Message",
        buttonstyle :"connect-button"
    }];

    $scope.FriendsButton = "Message";

    $scope.Messages = [{
        id : 1,
        face : imagePath,
        what: 'David',
        who: 'Hi'

    }, {
        id : 2,
        face : imagePath,
        what: 'Rosy',
        who: 'we will meet soon',

    }, {
        id : 3,
        face : imagePath,
        what: 'Bryan',
        who: 'take care'

    }, {
        id : 4,
        face : imagePath,
        what: 'Srujan',
        who: 'bye'


    }, {
        id : 5,
        face : imagePath,
        what: "Mahanth",
        who: 'gudnt'

    }];
    $scope.showElement = false;

    $scope.changeView = function(item) {
        item.buttonValue = "Request Sent";
        item.isDisabled=true;
        item.buttonstyle="button:disabled"
    };
    });


/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
 **/