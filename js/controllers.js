'use strict';

var ctlMain = angular.module('ctlMain', []);


ctlMain.controller('mainCtrl', ['$scope', '$http', 'mySrv', function ($scope, $http, mySrv) {
    $scope.form = mySrv.show();

    $scope.navigation = function () {

        return 'formBuilder.html';
    };


    $scope.createForm = function (form) {

        var json = {
            "condition": $scope.form.condition,
            "answer": $scope.form.answer,
            "question": $scope.form.question,
            "type": $scope.form.type
        }

        mySrv.add(json);

        var elmnt = document.getElementsByTagName("FORM")[0];
        var cln = elmnt.cloneNode(true);
        document.body.appendChild(cln);

    };

    $scope.clearForm = function () {

        mySrv.empty('form');

    };





}]);