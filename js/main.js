(function() {
var site = angular.module('raiderSite', ['ui.router','ngAnimate']);

site.config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider,$urlRouterProvider,$locationProvider) {
	$stateProvider.state('home',{
		url: '/',
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})
	$stateProvider.state('story',{
		url: '/story',
		templateUrl: 'partials/story.html',
		controller: 'storyController'
	})
	$stateProvider.state('team',{
		url: '/team',
		templateUrl: 'partials/team.html',
		controller: 'teamController'
	})
	$stateProvider.state('gameplay',{
		url: '/gameplay',
		templateUrl: 'partials/gameplay.html'
	})
	$urlRouterProvider.otherwise('/');
}]);

site.controller('navCTRL', ['$rootScope','$scope','$location', function($rootScope,$scope,$location) {
	$rootScope.navs = [
		{ path: 'home', title: 'HOME' },
		{ path: 'story', title: 'STORY' },
		{ path: 'team', title: 'TEAM' },
		{ path: 'gameplay', title: 'GAMEPLAY' }
	];
}]);

site.controller('homeController', ['$scope', '$http', function($scope, $http) {
	$scope.homeNavs = [
		{ path: 'what', title: 'What Is It?' },
		{ path: 'storyCon', title: 'Story' },
		{ path: 'multiCon', title: 'Multiplayer' }
	];
}]);

site.controller('storyController', ['$scope', '$http', function($scope, $http) {
	$scope.gameNavs = ['Concepts','Prologue','Main Story'];
	$scope.selection = $scope.gameNavs[0];//so i start at one
}]);

site.controller('teamController', ['$scope', '$http','$animateCss', function($scope,$http,$animateCss) {
	$http.get('team.json').success(function(data) {
		$scope.teams = data.Team;
		//console.log($scope.teams);
	});

	var button = document.querySelector('#taskButton');

	function TASKLIST() {
		var holder = document.querySelectorAll('.listHolder');
		for(var i=0; i<holder.length; i++){
			holder[i].classList.add('block');
		}
	TweenMax.staggerFrom(".items",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};

    button.addEventListener('click',TASKLIST,false);
}]);

site.controller('warriors',['$scope','$http', function($scope, $http){
	$http.get('warriors.json').success(function(stats){
		$scope.stats = stats.Warriors;
	});
}]);

site.controller('levels',['$scope','$http',function($scope,$http){
	$scope.levels = [{
		"Level1":"Level 1",
		"Level2":"Level 2",
		"Level3":"Level 3",
		"img1":"images/levels/level1.jpg",
		"img2":"images/levels/level2.jpg",
		"img3":"images/levels/level3.jpg"
	}];
}]);

site.controller('items',['$scope','$http',function($scope,$http){
	$scope.items = [
		{ "Title":"HEALTH", "Img":"images/items/health.png" },
		{ "Title":"EXTRA LIFE", "Img":"images/items/life.png" },
		{ "Title":"STRENGTH", "Img":"images/items/strength.png" },
		{ "Title":"SPEED", "Img":"images/items/speed.png" }
	];
}]);

site.controller('enemies',['$scope','$http',function($scope,$http){
	$http.get('enemies.json').success(function(stats){
		$scope.enemies = stats.Enemies;
	});

}]);

})();