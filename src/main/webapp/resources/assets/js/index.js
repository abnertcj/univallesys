var myApp = angular.module('myApp', []);

myApp.controller("myController", function($scope){
    
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.alertMassege = "";
    
    
    $scope.users = [
      
        {name : "Rashed", fullname : "Shuvro Nil", email : "rashed@mail.com"},
        {name : "Javad", fullname : "Nazmul Hossian", email : "nazmul@mail.com"},
        {name : "Lizu", fullname : "Sumona Sharmin", email : "lizu@mail.com"},
               
    ];
    
    
    $scope.saveUser = function(){    
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        
        $scope.alertMassege = "New item add on list successfully!!";
    };
    
    
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    
    $scope.updateUser = function (){
        $scope.alertMassege = "Update Successfully!!";
    };
    
    
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.alertMassege = "Deleted successfully!!";
    };
    
    $scope.clickedAlert = function(){
        $scope.alertMassege = "";
    };
    
});