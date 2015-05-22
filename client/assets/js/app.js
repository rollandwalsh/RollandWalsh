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
    .run(track)
    
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
      
    .controller('ProResume', function() {
	    this.resume = proResume;
    })
      
    .controller('Portfolio', function() {
	    this.portfolio = portfolio;
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

//     $locationProvider.html5Mode(true);

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  function track($rootScope, $window, $location) {
    var track = function() {
      $window.ga("send", "pageview", {
        page: $location.path()
      })
    };
    
    $rootScope.$on("$locationChangeSuccess", track)
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
  
  var proResume = {
    profiles: [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/rollandwalsh',
        desc: 'Rolland Walsh\'s LinkedIn profile'
      },{
        title: 'GitHub',
        link: 'https://www.github.com/rollandwalsh',
        desc: 'Rolland Walsh\'s GitHub projects'
      }
    ],
    positions: [
      {
        company: 'Reliance Network',
        role: 'Senior Front-End Developer',
        responsibilities: [
          'Responsible for front-end development staff hiring, training, growth and production quality',
          'Oversee all design work and final sign-off for any go-live changes',
          'Architect for mobile UI/UX for all clients - including ReMax, BHHS, and Century 21',
          'Develop websites for corporate, regional and independents on the Reliance Network CMS',
          'Build custom WordPress themes and sites for individual / team real estate brokers'
        ],
        startDate: '2013',
        endDate: 'current'
      },{
        company: 'Firepoint Creative',
        role: 'Owner',
        responsibilities: [
          'Plan, design and produce websites, online marketing and advertising for businesses',
          'Design and execute social media campaigns and strategies for a variety of industries',
          'Create logos, graphic design elements for the web and physical marketing materials',
          'Manage SEO/SEM, analytics and email accounts with Google Apps, Analytics, Webmaster Tools'
        ],
        startDate: '2005',
        endDate: 'current'
      },{
        company: 'American Repertory Theater',
        role: 'Marketing Associate',
        responsibilities: [
          'Created programs and production designs for two seasons',
          'Managed google AdWords account',
          'Coordinated social media planning / implementation',
          'Staffed and ran marketing events for donors, VIPs',
          'Redesigned the company’s website - architecture, graphic design, development, content'
        ],
        startDate: '2010',
        endDate: '2012'
      },{
        company: 'Side 2 Integrated Marketing',
        role: 'Lead Developer & Designer / Project Manager',
        responsibilities: [
          'Managed the production and execution of all aspects for clients’ online presence',
          'Dealt directly with customers for updates, requests and customer relations',
          'Ensured all projects met deadlines and customer satisfaction',
          'Managed 100+ Google AdWords accounts / 50+ social media campaigns, strategies'
        ],
        startDate: '2012',
        endDate: '2013'
      },{
        company: 'John L. Scott',
        role: 'Real Estate Broker',
        responsibilities: [
          'Acted as liaison between clients and buyer / seller agent on real estate transactions',
          'Documented all contracts and correspondence concerning agency or transaction',
          'Provided clients with consultation regarding home styles, value, location'
        ],
        startDate: '2008',
        endDate: '2010'
      }
    ],
    education: [
      {
        school: 'Harvard University',
        degree: 'Master of Fine Arts',
        focus: 'Acting',
        year: '2012'
      },{
        school: 'Portland State University',
        degree: 'Beachelor of Arts',
        focus: 'Theater Arts',
        year: '2010'
      }
    ],
    skills: [
      {
        area: 'Languages',
        skills: [
          'HTML',
          'CSS',
          'Javascript',
          'PHP',
          'Ruby'
        ]
      },{
        area: 'Frameworks',
        skills: [
          'jQuery',
          'Angular.js',
          'Ruby on Rails',
          'Bootstrap',
          'Foundation'
        ]
      },{
        area: 'Libraries // Extensions',
        skills: [
          'Sass & Less',
          'node.js',
          'npm',
          'Gulp',
          'Grunt',
          'Coffeescript'
        ]
      },{
        area: 'Methodologies',
        skills: [
          'Git',
          'Agile'
        ]
      },{
        area: 'Applications',
        skills: [
          'Adobe CS',
          'Visual Studio',
          'cPanel',
          'Coda'
        ]
      },{
        area: 'CMS',
        skills: [
          'WordPress',
          'Drupal'
        ]
      }
    ]
  };
  
  var portfolio = {
    projects: [
      {
        title: 'ReMax of Illinois (mobile site)',
        link: 'http://m.illinoisproperty.com/',
        url: 'm.illinoisproperty.com',
        img: '/assets/img/portfolio/remax-illinois.png',
        desc: 'Example of the m. version of sites for many real estate companies (UI/UX architect)'
      },{
        title: 'Dale Sorensen Real Estate',
        link: 'http://www.sorensenrealestate.com/',
        url: 'sorensenrealestate.com',
        img: '/assets/img/portfolio/sorensen.png',
        desc: 'Large Florida real estate company'
      },{
        title: 'Berkshire Hathaway Homeservices Troth, Realtors',
        link: 'http://www.bhhstroth.com/',
        url: 'bhhstroth.com',
        img: '/assets/img/portfolio/bhhs-troth.png',
        desc: 'One of many Berkshire Hathaway Homeservices sites built'
      },{
        title: 'Westlake Development Group',
        link: 'http://westlakedevelopmentllc.com/',
        url: 'westlakedevelopmentllc.com',
        img: '/assets/img/portfolio/westlake.png',
        desc: 'Portfolio and blog site for Pacific North West custom home builders'
      },{
        title: 'Huff Realty Properties of Distinction',
        link: 'http://www.luxury.huff.com/',
        url: 'luxury.huff.com',
        img: '/assets/img/portfolio/huff-luxury.png',
        desc: 'Luxury properties page for Berkshire Hathaway Homeservices affiliate'
      },{
        title: 'Fort Dearborn Insurance',
        link: 'http://fdinsurance.com/',
        url: 'fdinsurance.com',
        img: '/assets/img/portfolio/fort-dearborn.png',
        desc: 'One of multiple themes of a custom Wordpress design for Homeservices Insurance'
      },{
        title: 'Third Rail Repertory Theatre',
        link: 'http://thirdrailrep.org/',
        url: 'thirdrailrep.org',
        img: '/assets/img/portfolio/third-rail.png',
        desc: 'Custom Wordpress theme for Portland theater copmany'
      },{
        title: 'Credits Inc.',
        link: 'http://www.creditsinc.com/',
        url: 'creditsinc.com',
        img: '/assets/img/portfolio/credits-inc.png',
        desc: 'Credit compmany - responsiv site built on php with Foundation 4'
      },{
        title: 'C for Chiropractic',
        link: 'http://cforchiropractic.com/',
        url: 'cforchiropractic.com',
        img: '/assets/img/portfolio/c-for-chiro.png',
        desc: 'Informational and appointment setting site for Portland chiropractor'
      },{
        title: 'White Rabbit Gifts',
        link: 'http://whiterabbit-gifts.com/',
        url: 'whiterabbit-gifts.com',
        img: '/assets/img/portfolio/white-rabbit.png',
        desc: 'Quick one-page site for local arts and books store'
      }
    ]
  }

})();
