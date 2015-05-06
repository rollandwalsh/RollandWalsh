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
    
    .controller('SocialNav', function() {
      this.nav = socialNav;
    })
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
  
  var socialNav = [
    {
      site: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/rollandwalsh'
    },{
      site: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/rollandpwalsh'
    },{
      site: 'Google +',
      icon: 'google-plus',
      link: 'https://plus.google.com/+RollandWalsh'
    },{
      site: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/rollandwalsh'
    },{
      site: 'GitHub',
      icon: 'github',
      link: 'https://github.com/rollandwalsh'
    }
  ]

})();