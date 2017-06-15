'use strict';

app.config(['$stateProvider','$locationProvider', '$httpProvider','$urlRouterProvider',
    function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'../views/home.html',
                controller: 'masterController',
            })
            .state('about-us', {
                url:'/about-us',
                templateUrl:'../views/about-us.html',
                controller: 'masterController',
            })

        $urlRouterProvider
            .otherwise('/home');

        //For hiding '#' from URLs use the below
        // $locationProvider.html5Mode(true);
    }
]);

