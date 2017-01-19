

    app.controller('docController', function($scope,$rootScope) {
        $rootScope.menuItem = "Document Manager";
        var imagePath = './images/Document-icon.png';
        $scope.init = function () {
            $rootScope.hideFilter=true;
        };

        $scope.phones = [
            {
                number: 'Home Document',
                type: 'Document1',
                options: {

                    avatarIcon: true,
                    face : imagePath
                }
            },
            {
                number: 'Realtor document',
                type: 'Document2',
                options: {

                    icon: 'communication:phone',
                    avatarIcon: true,
                    face : imagePath
                }
            },
            {
                number: 'Bank Signed Doc',
                type: 'Document 3',
                options: {

                    face : imagePath,
                    icon: 'communication:phone',
                    avatarIcon: true
                }
            },
            {
                number: 'Offer statement',
                type: 'Document 4',
                options: {

                    actionIcon: 'communication:phone',
                    avatarIcon: true,
                    face : imagePath
                }
            },
            {
                number: 'Offer statement1',
                type: 'Document 5',
                options: {

                    actionIcon: 'communication:phone',
                    avatarIcon: true,
                    face : imagePath
                }
            },
            {
                number: 'Banker Document1',
                type: 'Document 5',
                options: {

                    actionIcon: 'communication:phone',
                    avatarIcon: true,
                    face : imagePath
                }
            }
        ];

        $scope.showPreview = function() {
            $scope.showImage = true;

        }
    });



    (function() {
        'use strict';

        angular.module('app',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
            .controller('docController', AppCtrl);

        function AppCtrl($scope) {
            $scope.currentNavItem = 'page1';
        }
    })();

/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
 **/