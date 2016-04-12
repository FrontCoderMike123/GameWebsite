(function() {
var site = angular.module('raiderSite', ['ui.router']);

site.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('home',{
		url: '/',
		templateUrl: 'partials/home.html',
		controller: 'homeController',
		activeNav: 'home'
	})
	$stateProvider.state('story',{
		url: '/story',
		templateUrl: 'partials/story.html',
		controller: 'storyController',
		activeNav: 'story'
	})
	$stateProvider.state('team',{
		url: '/team',
		templateUrl: 'partials/team.html',
		controller: 'teamController',
		activeNav: 'team'
	})
	$stateProvider.state('gameplay',{
		url: '/gameplay',
		templateUrl: 'partials/gameplay.html',
		activeNav: 'gameplay'
	})
	$urlRouterProvider.otherwise('/');
}]);

site.controller('indexCTRL', ['$scope','$state', function($scope,$state) {
	$scope.$state = $state;
	$scope.navs = [
		{ 'path': 'home', 'title': 'HOME', 'type':'home' },
		{ 'path': 'story', 'title': 'STORY', 'type':'story' },
		{ 'path': 'team', 'title': 'TEAM', 'type':'team' },
		{ 'path': 'gameplay', 'title': 'GAMEPLAY', 'type':'gameplay' }
	];
}]);

site.controller('homeController', ['$scope', '$http', function($scope, $http) {
	$scope.homeNavs = [
		{ 'path': 'what', 'title': 'What Is It?' },
		{ 'path': 'storyCon', 'title': 'Epic Story' }
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

site.controller('gameStaggers',['$scope','$http',function($scope,$http){
	$scope.stagLevels = function(){
		TweenMax.staggerFrom(".levels",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};

	$scope.stagPeople = function(){
		TweenMax.staggerFrom(".people",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};

	$scope.stagBadPeople = function(){
		TweenMax.staggerFrom(".badPeople",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};

	$scope.stagControls = function(){
		TweenMax.staggerFrom(".controlImg",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};

	$scope.stagItems = function(){
		TweenMax.staggerFrom(".itemImgs",2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut}, 0.1);
	};
}]);

})();