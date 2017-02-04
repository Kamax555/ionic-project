angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.homePage', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/homePage.html',
        controller: 'homePageCtrl'
      }
    }
  })

  .state('tabsController.searchTab', {
    url: '/search',
    views: {
      'tab2': {
        templateUrl: 'templates/searchTab.html',
        controller: 'searchTabCtrl'
      }
    }
  })

  .state('tabsController.addTab', {
    url: '/add',
    views: {
      'tab3': {
        templateUrl: 'templates/addTab.html',
        controller: 'addTabCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.profileTab', {
    url: '/profile',
    views: {
      'tab4': {
        templateUrl: 'templates/profileTab.html',
        controller: 'profileTabCtrl'
      }
    }
  })

  .state('tabsController.comments', {
    url: '/Comments',
    views: {
      'tab1': {
        templateUrl: 'templates/comments.html',
        controller: 'commentsCtrl'
      }
    }
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')

  

});