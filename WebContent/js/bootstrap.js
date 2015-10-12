/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
//define([
//    'require',
//    'angular',
//    'app'//,
//    //'routes'
//], function (require, ng) {
//    'use strict';
//
//    /*
//     * place operations that need to initialize prior to app start here
//     * using the `run` function on the top-level module
//     */
//
//    require(['domReady!'], function (document) {
//        ng.bootstrap(document, ['app']);
//    });
//});

//当DOM结构加载完成后，bootstrap.js文件将会命令AngularJS启动起来并继续执行
define(['angular', 'domReady', 'app'], function(angular, domReady) {
	require(['domReady!'], function (document) {
		angular.bootstrap(document, ['app']);
  });
});

