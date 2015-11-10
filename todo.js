var todoApp = angular.module("todoApp", []);

todoApp.controller('TodoController', function($scope) {

  $scope.todos = [];

  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };

  $scope.addTodo = function() {
    $scope.todos.push({text: $scope.todo, "completed": false});
    $scope.todo = "";
  };

  $scope.clearCompleted = function(todos) {
      if(todos.completed) {
        $scope.todos.splice(todo, 1);
      };
  };

});
