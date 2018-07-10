angular.module("app",[])
    .controller("controller", function($scope, $http){
        $scope.post = [];
        $scope.newPost = {};
        $http({
            method: 'GET',
            url: 'http://localhost:8080/task'
        }).then(function successCallback(response) {
            $scope.post = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.addRegister = function() {
            $http.post('http://localhost:8080/task', {
                id : $scope.newRegister.id,
                name : $scope.newRegister.name,
                dueDate : $scope.newRegister.dueDate,
                priority : $scope.newRegister.priority
            }).then(function successCallback(response) {
                $scope.post = response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        }

        $scope.removeRegister = function() {
            $http.get('http://localhost:8080/task/destroy', {
                id : $scope.newRegister.id,
            }).then(function successCallback(response) {
                $scope.post = response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        }

        $scope.updateRegister = function() {
            $http.post('http://localhost:8080/task/update', {
                id : $scope.newRegister.id,
                name : $scope.newRegister.name,
                dueDate : $scope.newRegister.dueDate,
                priority : $scope.newRegister.priority
            }).then(function successCallback(response) {
                $scope.post = response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        }

    });