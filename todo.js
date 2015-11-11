var todoApp = angular.module("todoApp", []);

todoApp.controller('TodoController', function($scope, $http) {

  $scope.todos = [];

// need to change deprecated success/error methods
  $http.get('/todos')
    .then(function(todos) {
      $scope.loaded = true;
      $scope.todos = todos;
    }, function(err) {
      return alert(err)).error;
    });

  $scope.getTotalTodos = function() {
      return $scope.todos.length;
    };

  $scope.addTodo = function(text) {
    $http.post('/todos', function(todo) {
      $scope.todo = "";
      $scope.todos.push({"text": $scope.todo, "completed": false, "editing": false});
    }, function(err) {
      return "Could not save this to-do.");
    });
  };

  $scope.editTodo = function(todo) {
    todo.editing = true;
  };

  $scope.updateTodo = function(todo) {
    todo.editing = false;
    $http.put('/todos/' + todo.id
  }).then(function(todo) {
      completed: todo.completed;
    }, function(err) {
      return alert(err.message || (err.errors && err.errors.completed || "Could not update this to-do.");
    });
  };

  $scope.clearCompleted = function() {
    $http.delete('/todos/' + todo.id, {
      params: {
        completed: true
      }
    }).then(function() {
      $scope.todos = $scope.todos.filter(function(todo) {
        return !todo.completed;
      });
    }, function(err) {
      return alert(err.message || "Could not delete this to-do.");
    })

  };

});
