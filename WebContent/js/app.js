define([
    'angular',
    'angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'controllers',
        'directives',
        'filters',
        'services',
        'ngRoute'
    ]);
});
