/**
 * 定义RequireJS配置
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});

require( [ 
	    'app',
	    //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
	    'bootstrap',
	    //所创建的所有控制器、服务、指令及过滤器文件都必须写到这里，这块内容必须手动维护
	    'controllers/controllers', 
	    'services/services',
		'directives/directives', 
		'filters/filters' ], 
	function(app) {
		'use strict';
		return app.config( [ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl : 'partials/partial1.html',
				controller : 'MyCtrl1'
			});
	
			$routeProvider.when('/view2', {
				templateUrl : 'partials/partial2.html',
				controller : 'MyCtrl2'
			});
	
			$routeProvider.otherwise( {
				redirectTo : '/view1'
			});
		} ]);
	}
);

// define(['app'], function (app) {
// 'use strict';
// return app.config(['$routeProvider', function ($routeProvider) {
//        $routeProvider.when('/view1', {
//            templateUrl: 'partials/partial1.html',
//            controller: 'MyCtrl1'
//        });
//
//        $routeProvider.when('/view2', {
//            templateUrl: 'partials/partial2.html',
//            controller: 'MyCtrl2'
//        });
//
//        $routeProvider.otherwise({
//            redirectTo: '/view1'
//        });
//    }]);
//});