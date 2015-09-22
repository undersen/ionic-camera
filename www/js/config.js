
angular.module('imageApp')

imageApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/firebase');

	$stateProvider
	.state('firebase', {
		url        : '/firebase',
		templateUrl: 'templates/firebase.html',
		controller : 'FirebaseController',
		params     : {
			isRedirect: false
		}
	})
	.state('secure',{
		url     :'/secure',
		templateUrl:'templates/secure.html',
		controller:'SecureController'
	});
})
