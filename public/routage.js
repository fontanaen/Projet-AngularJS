var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/", {
    templateUrl : "page/void.html"
  })
  .when("/CurriculumVitae", {
    templateUrl : "page/curriculum-vitae.html",
    controller : 'ctrl_cv'
  })
  .when("/details", {
    templateUrl : 'page/details.html',
    controller : 'ctrl_details'
  })
  .when("/Stage/1", {
    templateUrl : "stage1.html"
  })
  .when("/Stage/2", {
    templateUrl : "stage2.html"
  })
  .when("/404", {
    template : "<h1>Error 404</h1><p>Nothing has been selected</p>"
  })
  .otherwise({
    template : "<h1>Error 404</h1><p>Nothing has been selected</p>"
  });
  $locationProvider.hashPrefix('');
});

app.controller('ctrl_details', function($scope, $http) {
  // Method to get data from server
  $http.get("/ng-details").then(function(result) {
    $scope.details = result.data.details;
    $scope.languages = result.data.languages;
    $scope.softwares = result.data.softwares;
    $scope.links = result.data.links;
  });
});

app.controller('ctrl_cv', function($scope, $http) {
  // Method to get data from server
  $http.get("/ng-CurriculumVitae").then(function(result) {
    $scope.missions = result.data.missions;
    $scope.formations = result.data.formations;
  });
});
