var app = angular.module('ng-login', []);

app.controller('post_login', function($scope, $http, $window) {
  $scope.login;
  $scope.password;

  $scope.click = function () {
    if ($scope.login && $scope.password) {

      let data = { login : $scope.login, password : $scope.password }
      // Post form data
      $http.post('/login', JSON.stringify(data))
           .then((result) => {
             if (result.data.islog) {
               // session variable
               sessionStorage.user = JSON.stringify(result.data.user[0]);
               sessionStorage.islog = result.data.islog;
               $window.location.href = '/';
             } else {
               $scope.Error_login = 'Vos identifiants sont incorrectes.'
             }
           });
    }
  }
});
