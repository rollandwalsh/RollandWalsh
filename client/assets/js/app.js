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
    
    .controller('PageOn', function($scope, $location) {
      $scope.pageOn = function(route) {
        return route === $location.path();
      }
    })

    .controller('MainNav', function () {
      this.nav = mainNav;
    })
    
    .controller('SocialNav', function () {
      this.nav = socialNav;
    })
    
    .controller('ActingReviews', function () {
      this.reviews = actingReviews;
    })
    
    .directive('actingReviews', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/acting-reviews.html'
      }
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
      page: 'home',
      text: 'Home'
    },{
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
  
  var actingReviews = [
    {
      production: 'Static',
      reviewer: 'Barry Johnsaon',
      publication: 'Oregon ArtsWatch',
      quote: 'Rolland Walsh makes an irrepressible, even madcap Chris, the sort of fellow who injects every situation and conversation with life and surprise',
      link: 'http://www.orartswatch.org/third-rail-the-ghost-in-the-static/',
      title: 'Third Rail: The Ghost in Static'
    },{
      production: 'The Night Alive',
      reviewer: 'Bob Hicks',
      publication: 'Oregon ArtsWatch',
      quote: 'Rolland Walsh shows up, swinging his fists and his attitude with equally derisive precision',
      link: 'http://www.orartswatch.org/let-the-night-light-shine/',
      title: 'Let the ‘Night’ light shine'
    },{
      production: 'The Night Alive',
      reviewer: 'Richard Wattenberg',
      publication: 'The Oregonian',
      quote: 'Rolland Walsh\'s Kenneth has a certain amount of charm even as he menaces, but when he goes after Doc, he is truly horrifying',
      link: 'http://www.oregonlive.com/performance/index.ssf/2015/02/the_night_alive_a_contemporary.html',
      title: '\'The Night Alive\' a contemporary fairy tale, artfully crafted'
    },{
      production: 'Static',
      reviewer: 'Barry Johnsaon',
      publication: 'Oregon ArtsWatch',
      quote: 'Rolland Walsh is hilarious',
      link: 'http://www.orartswatch.org/noises-off-is-farces-all-the-way-down/',
      title: '\'Noises Off\’ is farces all the way down'
    }
  ]

})();
