var app = angular.module("myApp", ['ngCookies']);

app.controller('calculateController', function ($scope, $cookieStore) {
    $scope.result = "";

    $scope.calculateResult = function (number1, number2, operation) {
        $cookieStore.put("Number1", number1);
        $cookieStore.put("Number2", number2);
      
        if (operation == 'Add') {

            $scope.result = number1 + number2;

        } else if (operation == 'Substract') {

            $scope.result = number1 - number2;

        } else if (operation == 'Divide') {

            $scope.result = number1 / number2;

        } else {

            $scope.result = number1 * number2;

        }

        $cookieStore.put("result", $scope.result);

    }





});