var todoApp = angular.module("todoApp", []);

todoApp.controller('TodoController', function($scope, $http) {

  $scope.todos = [];

  $http.get('/api')
    .then(function(response) {
      $scope.loaded = true;
      $scope.todos = response.data.todos;
      debugger;
    }, function(err) {

      return err;
    });

$scope.addTodo = function(title) {
  $http.post('/todos', function(todo) {
    $scope.todo = "";
    $scope.todos.push({"title": $scope.todo, "is_completed": false, "editing": false});
  }, function(err) {
    return "Could not save this to-do.";
  });
};

$scope.editTodo = function(todo) {
  todo.editing = true;
};

$scope.updateTodo = function(todo) {
  todo.editing = false;
  $http.put('/todos/' + todo.id)
    .catch(function(err) {
      return "Could not update this to-do.";
    });
};

$scope.clearCompleted = function() {
  $http.delete('/todos/' + todo.id, {
    params: {
      is_completed: true
    }
  }).then(function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      return !todo.is_completed;
    });
  }, function(err) {
    return "Could not delete this to-do.";
  })

};

});
