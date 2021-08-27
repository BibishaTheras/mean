var myApp = angular.module('myApp', []);
myApp.controller('studentController', ['$scope', '$http', function($scope, $http) {

    $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.photoid = true;
  
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos'


  }).then(function successCallback(response) {

    $scope.photos = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");
  
  });

  $scope.createalbum = function() {
    $http({

        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/photos',
        data: $scope.photo
  
      }).then(function successCallback(response) {
  
        $scope.photos.push(response.data);
        alert("User has created Successfully")
  
      }, function errorCallback(response) {
  
        alert("Error. while created user Try Again!");
  
      });
  
    };
    $scope.updatealbum = function() {
        $http({

            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/photos/' + $scope.photo.id,
            data: $scope.photo
      
          }).then(function successCallback(response) {
      
            alert("User has updated Successfully")
      
          }, function errorCallback(response) {
      
            alert("Error. while updating user Try Again!");
      
          });
      
        };
        $scope.deletealbum = function(photo) {

            //$http DELETE function
            $http({
        
              method: 'DELETE',
              url: 'https://jsonplaceholder.typicode.com/photos/' + photo.id
        
            }).then(function successCallback(response) {
        
              alert("User has deleted Successfully");
              var index = $scope.photos.indexOf(photo);
              $scope.photos.splice(index, 1);
        
            }, function errorCallback(response) {
        
              alert("Error. while deleting user Try Again!");
        
            });
        
          };
      
          $scope.editalbum = function(photo) {

            $scope.photo = photo;
            $scope.submit = false;
            $scope.update = true;
            $scope.cancel = true;
            $scope.photoid = false;
        
          };
        
        
          //cancel Uodate
          $scope.cancelUpdate = function() {
            $scope.photo = null;
            $scope.submit = true;
            $scope.update = false;
            $scope.cancel = false;
            $scope.photoid = true;
          };
         /* $scope.propertyName = 'titl';
          $scope.reverse = true;
          $scope.photos = photos;
        */
          $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
          };
         
       

          
        }]);