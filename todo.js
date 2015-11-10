var todoApp = angular.module("todoApp", []);

todoApp.controller('TodoController', function($scope) {

  $scope.todos = [];

  $scope.getTotalTodos = function() {
      return $scope.todos.length;
    };

  $scope.addTodo = function() {
      $scope.todos.push({"text": $scope.todo, "completed": false, "editing": false});
      $scope.todo = "";
    };

  $scope.editTodo = function(todo) {
    todo.editing = true;
  };

  $scope.updateTodo = function(todo) {
    todo.editing = false;
  }

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      return !todo.completed;
    });
  };

});
