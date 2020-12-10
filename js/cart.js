var app = angular.module("myApp",[]);
app.controller("proCtrl", function ($scope){
    $scope.cart = [];
    $scope.cart = JSON.parse(localStorage.getItem("cart"));
    $scope.total = 0;
    
        for (var i = 0; i < $scope.cart.length; i++) {
            $scope.total += $scope.cart[i].price * $scope.cart[i].soluong;
        }     
     
    
    

    $scope.minus = function(id) {
        var check = false;

        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].id == id) {
                if ($scope.cart[i].soluong > 1) {
                    $scope.cart[i].soluong--;
                    localStorage.setItem("cart", JSON.stringify($scope.cart));
                } else {
                    $scope.cart.splice(i, 1);
                    localStorage.setItem("cart", JSON.stringify($scope.cart));
                }
            }
        }
        $scope.total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            $scope.total += $scope.cart[i].price * $scope.cart[i].soluong;
        }

    };
    $scope.add = function(id) {
        var check = false;

        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].id == id) {
                $scope.cart[i].soluong++;
                localStorage.setItem("cart", JSON.stringify($scope.cart));
            }
        }
        $scope.total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            $scope.total += $scope.cart[i].price * $scope.cart[i].soluong;
        }
    };


    $scope.clear=function(){
        localStorage.clear();
        location.reload();
        
    }

    
    
});
