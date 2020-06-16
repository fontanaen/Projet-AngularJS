var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/", {
    templateUrl : "page/accueil.html"
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
  .otherwise({
    template : "<div class='text-center'><h1>Error 404</h1><p>Nothing has been selected</p></div>"
  });
  $locationProvider.hashPrefix('');
});

app.controller('ctrl_userconfig', function($scope, $http, $window) {

  // Get data after log in
  if (sessionStorage.islog == true || sessionStorage.islog == 'true') {
    let user = JSON.parse(sessionStorage.user);
    $scope.islog = (sessionStorage.islog == 'true');
    $scope.userid = user.id;
    $scope.userlastname = user.nom;
    $scope.userfirstname = user.prenom;
    $scope.useravatar = user.img;
  } else {
    sessionStorage.user = null;
    $scope.userid = null;
    $scope.userlastname = null;
    $scope.userfirstname = null;
    $scope.useravatar = null;
  }

  // logout function
  $scope.logout = function () {
    $http.post('/logout')
         .then(function(result) {
           sessionStorage.islog = result.data.islog;
           $scope.islog = (sessionStorage.islog == 'false');
           $window.location.href = '/';
         });
  }

  // update data user on update page
  $scope.$on('update_page', function(event, args) {
    console.log(sessionStorage.islog);
    if (sessionStorage.islog == true || sessionStorage.islog == 'true') {
      let user = JSON.parse(sessionStorage.user);
      $scope.islog = (sessionStorage.islog == 'true');
      $scope.userid = user.id;
      $scope.userlastname = user.nom;
      $scope.userfirstname = user.prenom;
      $scope.useravatar = user.img;
    } else {
      $scope.islog = (sessionStorage.islog == 'true');
      sessionStorage.user = null;
      $scope.userid = null;
      $scope.userlastname = null;
      $scope.userfirstname = null;
      $scope.useravatar = null;
    }
  });
});

app.controller('ctrl_details', function($scope, $http) {
  // Method to get data from server
  $http.get("/ng-details").then(function(result) {
    sessionStorage.islog = result.data.islog;
    console.log(sessionStorage.islog);
    $scope.details = result.data.details;
    $scope.languages = result.data.languages;
    $scope.softwares = result.data.softwares;
    $scope.links = result.data.links;
    $scope.$emit('update_page');
  });
});

app.controller('ctrl_cv', function($scope, $http) {
  // Method to get data from server
  $http.get("/ng-CurriculumVitae").then(function(result) {
    sessionStorage.islog = result.data.islog;
    console.log(sessionStorage.islog);
    $scope.missions = result.data.missions;
    $scope.formations = result.data.formations;
    $scope.$emit('update_page');
  });
});
