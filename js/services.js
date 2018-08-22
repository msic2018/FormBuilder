+'use strict';

var myServices = angular.module('myServices', []);


myServices.factory('mySrv', ['store', function (store) {


    if (store.get('form'))
        var form = store.get('form');
    else
        var form = [];

    form.show = function () {
        return form;
    };

    form.add = function (question) {

        if (!form.length) {

            form.push(question);
        }

        var addNew = true;
        angular.forEach(form, function (value) {



            if (question.question == null) {
                addNew = false;

            } else if (value.question == question.question) {
                addNew = false;

            }
        });

        if (addNew) {
            form.push(question);
        }

        store.set('form', form.show());

    }

    form.empty = function () {
        form.length = 0;
        store.remove('form');

    };


    return form;

}]);