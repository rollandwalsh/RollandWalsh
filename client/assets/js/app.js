(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    
    .controller('MainNav', function() {
      this.nav = mainNav;
    })
    
/*
    .directive('contactForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/contact-form.html'
      };
    })
*/
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }
  
  var mainNav = [
    {
      page: 'about',
      text: 'About'
    },{
      page: 'work',
      text: 'Work'
    },{
      page: 'news',
      text: 'News'
    },{
      page: 'contact',
      text: 'Contact'
    }
  ];

})();