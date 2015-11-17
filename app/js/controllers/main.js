'use strict';

var todoApp = angular.module("todoApp", []);

todoApp.controller('TodoController', function($scope, $http) {

  $scope.todos = [];

  $http.get('/api/v1/todos')
    .then(function(response) {
      $scope.loaded = true;
      $scope.todos = response.data.todos;
    }, function() {
      return "Cannot load to-dos.";
    });

  $scope.addTodo = function() {
    $http.post('/api/v1/todos', {
      title: $scope.todo,
      is_completed: false
    }).then(function(response) {
      $scope.todos.push(response.data.todo);
      $scope.todo = "";
    }, function(err) {
      return "Could not add this to-do.";
    });

  };

  $scope.editTodo = function(todo) {
    todo.editing = true;
  };

  $scope.updateTodo = function(todo) {
    todo.editing = false;
    $http.put('/api/v1/todos/' + todo.id, todo)
    .catch(function(err) {
      return "Could not update this to-do.";
    });
  };

  $scope.clearCompleted = function() {
    $http.delete('/api/v1/todos/', {
    params: {
      is_completed: true
    }}).then(function() {
      $scope.todos = $scope.todos.filter(function(todo) {
        return !todo.is_completed;
      });
    }, function(err) {
      return "Could not delete completed to-dos.";
    });
  };

});
