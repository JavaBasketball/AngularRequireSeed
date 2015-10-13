/**
 * ����RequireJS����
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady',
        'uigridcss': '',
    },
    // "map"告诉RequireJS在任何模块之前，都先载入这个模块
    map: {
    	'*': {
    		'css': '../lib/require-css\css'
    	}
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
	    //ע�⣺�ⲻ��Twitter Bootstrap������AngularJS bootstrap
	    'bootstrap',
	    //�������п�����������ָ��������ļ�������д�����������ݱ����ֶ�ά��
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