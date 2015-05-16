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
      
    .controller('ActingResume', function() {
	    this.resume = actingResume;
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
  ];
  
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
  ];
  
  var actingResume = {
	  vitals: [
		  {
			  key: null,
			  data: 'AEA'
		  },{
			  key: 'Height',
			  data: '6\'1"'
		  },{
			  key: 'Weight',
			  data: '165 lbs'
		  },{
			  key: 'Hair',
			  data: 'brown'
		  },{
			  key: 'Eyes',
			  data: 'green'
		  },{
			  key: 'Voice',
			  data: 'bass-barritone'
		  }
	  ],
	  theaterRoles: [
	    {
	      show: 'Static',
	      character: 'Chris',
	      company: 'Third Rail Repertory Theatre',
	      director: 'Scott Yarbrough'
	    },{
	      show: 'The Night Alive',
	      character: 'Kenneth',
	      company: 'Third Rail Repertory Theatre',
	      director: 'Scott Yarbrough'
	    },{
	      show: 'The Beauty Queen of Leenane',
	      character: 'Ray',
	      company: 'Third Rail Repertory Theatre',
	      director: 'Scott Yarbrough'
	    },{
	      show: 'As You Like It',
	      character: 'Touchstone',
	      company: 'American Repertory Theater',
	      director: 'David Hammond'
	    },{
	      show: 'Thom Pain (based on nothing)',
	      character: 'Thom Pain',
	      company: 'OBERON',
	      director: 'Rose Hogan'
	    },{
	      show: 'Noises Off',
	      character: 'Tim',
	      company: 'Third Rail Repertory Theatre',
	      director: 'Scott Yarbrough'
	    },{
	      show: 'A Noble Failure',
	      character: 'Ivan',
	      company: 'Third Rail Repertory Theatre',
	      director: 'Philip Cuomo'
	    },{
	      show: 'BOB: A Life in Five Acts',
	      character: 'Bob',
	      company: 'ART / MXAT Institute',
	      director: 'Shira Milikowsky'
	    },{
	      show: 'Play / Act Without Words II',
	      character: 'Man / B',
	      company: 'ART / MXAT Institute',
	      director: 'Marcus Stern'
	    },{
	      show: 'Nutcracker Turbo',
	      character: 'Nutcracker',
	      company: 'Moscow Art Theater',
	      director: 'János Szász'
	    },{
	      show: 'Seagull',
	      character: 'Constantine',
	      company: 'Moscow Art Theater School',
	      director: 'Igor Zolotovitsky'
	    },{
	      show: 'Tough Titty',
	      character: 'Dr. Pearlman',
	      company: 'ART / MXAT Institute',
	      director: 'Benny Sato Ambush'
	    },{
	      show: 'Nutcracker Turbo',
	      character: 'Nutcracker',
	      company: 'ART / MXAT Institute',
	      director: 'Scott Zigler'
	    },{
	      show: 'Becky\'s New Car',
	      character: 'Chris',
	      company: 'Artist\'s Repertory Theater',
	      director: 'Allen Nause'
	    },{
	      show: 'The History Boys',
	      character: 'Rudge',
	      company: 'Artist\'s Repertory Theater',
	      director: 'Jon Kretzu'
	    },{
	      show: 'Promissing Playwrights (JAW 09/11)',
	      character: 'Various roles',
	      company: 'Portland Center Stage',
	      director: 'Micahel O\Connell & Matt Zrebski'
	    },{
	      show: 'Twelfth Night',
	      character: 'Fabian',
	      company: 'Portland Playhouse',
	      director: 'Brian Weaver'
	    },{
	      show: 'Weekend at Bernies',
	      character: 'Ensemble',
	      company: 'Rolland Walsh & Chris Murray',
	      director: 'Ted Douglass'
	    },{
	      show: 'Love\'s Labours Lost',
	      character: 'Longaville',
	      company: 'Northwest Classical Theater Company',
	      director: 'Michael Mendelson'
	    }
	  ],
	  filmAndTvRoles: [
	    {
	      project: 'Connection Lost: A Love Story',
	      role: 'lead',
	      medium: 'Web series',
	      producer: 'Malarkey Films, Anna Callahan'
	    },{
	      project: 'Motivations Unlimited',
	      role: 'lead',
	      medium: 'National Film Challenge',
	      producer: 'Malarkey Films, Anna Callahan'
	    }
	  ],
	  training: [
		  {
			  institution: 'Harvard University',
			  degree: 'Master of Fine Arts',
			  major: 'Acting',
			  focus: null,
			  school: 'American Repertory Theater / Moscow Art Theater School Institute for Advanced Theater Training',
			  areasOfStudy: [
				  {
					  field: 'Acting',
					  instructors: ['Scott Zigler', 'Marcus Stern', 'Igor Zolotovitsky', 'Sergey Zemtsov', 'Thomas Derrah']
				  },{
					  field: 'Voice / Dialects / Voiceover',
					  instructors: ['Nancy Houfek', 'Karen Kopryanski', 'Sarah Jessop', 'Ron Carlos', 'Will LeBow']
				  },{
					  field: 'Singing',
					  instructors: ['Pamela Murray', 'Donna Ames', 'Marina Smirnova']
				  },{
					  field: 'Movement / Suzuki',
					  instructors: ['Andrey Droznin', 'Natalia Fedorova', 'Mariya Zorina', 'Stephen Mitchell-Wright']
				  },{
					  field: 'Jazz / Ballet / Modern (Dance)',
					  instructors: ['Jodi Leigh-Allen', 'Larissa Dmitrieva', 'Marina Van Winkle']
				  },{
					  field: 'Shakespeare',
					  instructors: ['David Hammond', 'Nancy Houfek']
				  },{
					  field: 'Stage Combat / Fencing',
					  instructors: ['Bob Walsh', 'Robert Najarian', 'Andrey Uraev']
				  },
			  ]
		  },{
			  institution: 'Portland State University',
			  degree: 'Bachelor of Arts',
			  major: 'Theater Arts',
			  focus: 'Acting',
			  school: null,
			  areasOfStudy: null
		  }
	  ],
	  skills: [
		  'Dialects: Proficient in IPA, Non-regional American, American Southern (rhotic and non-rhotic), British (RP and Cockney), Irish (Northern and Southern), Russian',
		  'Singing',
		  'Dancing',
		  'Proficient in stage combat',
		  'Fencing (rapier & dagger)',
		  'Piano',
		  'Guitar',
		  'Conversational Spanish and Russian',
		  'Juggling (3 Ball)',
		  'Improvisation',
		  'Stand-up',
		  'Beatboxing',
		  'Bicycling',
		  'Running',
		  'Skateboarding',
		  'Basketball',
		  'Baseball',
		  'Swimming',
		  'Can solve Rubik’s cube in under three minutes'
	  ]
  };

})();
