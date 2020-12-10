var app = angular.module('myApp', []);
app.controller('proCtrl', function ($scope) {
    // 
    $scope.layindexxe = function (id) {
        for (var i = 0; i < $scope.list_product.length; i++) {
            if ($scope.list_product[i].id == id) {
                $scope.p = angular.copy($scope.list_product[i]);
            }
        }
    }
    $scope.layindexthoitrang = function (id) {
        for (var i = 0; i < $scope.list_thoitrang.length; i++) {
            if ($scope.list_thoitrang[i].id == id) {
                $scope.p = angular.copy($scope.list_thoitrang[i]);
            }
        }
    }
    $scope.layindexphukien = function (id) {
        for (var i = 0; i < $scope.list_phukien.length; i++) {
            if ($scope.list_phukien[i].id == id) {
                $scope.p = angular.copy($scope.list_phukien[i]);
            }
        }
    }
    $scope.list_product = [
        {
            name: "LAMBORGHINI AVENTADOR 750-4 YELLOW 1-36 ALLOY 7105",
            photo: "MÔ HÌNH LAMBORGHINI AVENTADOR 750-4 SV COUPE YELLOW 1-36 ALLOY 7105.jpeg",
            price: 120,
            kind: "Xe mô hình",
            id: 1,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI CENTENARIO LP770-4 RED 1-18 MAISTO 4232",
            photo: "MÔ HÌNH LAMBORGHINI CENTENARIO LP770-4 RED 1-18 MAISTO 4232.jpeg",
            price: 200,
            kind: "Xe mô hình",
            id: 2,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHIN GALLARDO POLICE 1-36 SCALE MODEL 7157",
            photo: "MÔ HÌNH XE LAMBORGHIN GALLARDO POLICE 1-36 SCALE MODEL 7157.jpeg",
            price: 250,
            kind: "Xe mô hình",
            id: 3,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI AVENTADOR LP700-4 PINK 1-18 WELLY 1297",
            photo: "MÔ HÌNH XE LAMBORGHINI AVENTADOR LP700-4 PINK 1-18 WELLY 1297.jpeg",
            price: 170,
            kind: "Xe mô hình",
            id: 4,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI CENTENARIO GREEN 1-18",
            photo: "MÔ HÌNH XE LAMBORGHINI CENTENARIO GREEN 1-18.jpeg",
            price: 300,
            kind: "Xe mô hình",
            id: 5,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI HURACAN BLACK 1-36 ALLOY 7114",
            photo: "MÔ HÌNH XE LAMBORGHINI HURACAN BLACK 1-36 ALLOY 7114.jpeg",
            price: 400,
            kind: "Xe mô hình",
            id: 6,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI SIAN FKP BLUE 1-32 DOUBLE HORSES 6923",
            photo: "MÔ HÌNH XE LAMBORGHINI SIAN FKP BLUE 1-32 DOUBLE HORSES 6923.jpeg",
            price: 450,
            kind: "Xe mô hình",
            id: 7,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI SIAN LIGHTNING BLUE 1-32 XHD 7011",
            photo: "MÔ HÌNH XE LAMBORGHINI SIAN LIGHTNING BLUE 1-32 XHD 7011.jpeg",
            price: 320,
            kind: "Xe mô hình",
            id: 8,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI SIAN LIGHTNING GREEN 1-32 XHD 7012",
            photo: "MÔ HÌNH XE LAMBORGHINI SIAN LIGHTNING GREEN 1-32 XHD 7012.jpeg",
            price: 310,
            kind: "Xe mô hình",
            id: 9,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI SIAN LIGHTNING RED 1-32 XHD 7009",
            photo: "MÔ HÌNH XE LAMBORGHINI SIAN LIGHTNING RED 1-32 XHD 7009.jpeg",
            price: 650,
            kind: "Xe mô hình",
            id: 10,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI SIAN LIGHTNING WHITE 1-32 XHD 7010",
            photo: "MÔ HÌNH XE LAMBORGHINI SIAN LIGHTNING WHITE 1-32 XHD 7010.jpeg",
            price: 655,
            kind: "Xe mô hình",
            id: 11,
            buy: 0,
            q: 0

        },
        {
            name: "LAMBORGHINI URUS GREY 1-18 BBURAGO 5236",
            photo: "MÔ HÌNH XE LAMBORGHINI URUS GREY 1-18 BBURAGO 5236.jpeg",
            price: 999,
            kind: "Xe mô hình",
            id: 12,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI URUS YELLOW 1-18 BBURAGO 5235",
            photo: "MÔ HÌNH XE LAMBORGHINI URUS YELLOW 1-18 BBURAGO 5235.jpeg",
            price: 699,
            kind: "Xe mô hình",
            id: 13,
            buy: 0,
            q: 0
        },
        {
            name: "LAMBORGHINI URUS YELLOW 1-36 WELLY 6137",
            photo: "MÔ HÌNH XE LAMBORGHINI URUS YELLOW 1-36 WELLY 6137.jpeg",
            price: 779,
            kind: "Xe mô hình",
            id: 14,
            buy: 0,
            q: 0
        }
    ]
    $scope.list_thoitrang = [
        {
            name: "AO Da",
            photo: "aoda.jpg",
            price: 100,
            kind: "Thời trang",
            id: 1
        },
        {
            name: "AO Hodie ",
            photo: "aohodie.jpg",
            price: 70,
            kind: "Thời trang",
            id: 2

        },
        {
            name: "AO lanh ",
            photo: "aolanh.jpg",
            price: 150,
            kind: "Thời trang",
            id: 3
        },
        {
            name: "Balo 1 ",
            photo: "balo1.jpg",
            price: 40,
            kind: "Thời trang",
            id: 4
        },
        {
            name: "Balo 2 ",
            photo: "balo2.jpg",
            price: 60,
            kind: "Thời trang",
            id: 5
        },
        {
            name: "Balo 3 ",
            photo: "balo3.jpg",
            price: 50,
            kind: "Thời trang",
            id: 6
        },
        {
            name: "Balo 4 ",
            photo: "balo4.jpg",
            price: 80,
            kind: "Thời trang",
            id: 7
        },
        {
            name: "Balo 5 ",
            photo: "balo5.jpg",
            price: 25,
            kind: "Thời trang",
            id: 8
        },
        {
            name: "Non 1",
            photo: "non1.jpg",
            price: 30,
            kind: "Thời trang",
            id: 9
        },
        {
            name: "Non 2 ",
            photo: "non2.jpg",
            price: 35,
            kind: "Thời trang",
            id: 10
        },
        {
            name: "Cap ",
            photo: "cap1.jpg",
            price: 20,
            kind: "Thời trang",
            id: 11
        },
        {
            name: "Vali 1",
            photo: "vali1.jpg",
            price: 70,
            kind: "Thời trang",
            id: 12
        },
        {
            name: "Vali 2 ",
            photo: "vali2.jpg",
            price: 159,
            kind: "Thời trang",
            id: 13
        },
        {
            name: "Vali 3 ",
            photo: "vali3.jpg",
            price: 80,
            kind: "Thời trang",
            id: 14
        },
        {
            name: "Vi 1 ",
            photo: "vi1.jpg",
            price: 65,
            kind: "Thời trang",
            id: 15
        },
        {
            name: "Vi 2 ",
            photo: "vi2.jpg",
            price: 85,
            kind: "Thời trang",
            id: 16
        }
    ]
    $scope.list_phukien = [
        {
            name: "MÓC KHÓA LAMBORGHINI 5775 ",
            photo: "MÓCKHÓALAMBORGHINI5775.jpeg",
            price: 100,
            kind: "Phụ kiện",
            id: 1
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5770 ",
            photo: "moc khoa.jpg",
            price: 90,
            kind: "Phụ kiện",
            id: 2
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5723 ",
            photo: "moc khoa abc.jpeg",
            price: 76,
            kind: "Phụ kiện",
            id: 3
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5724 ",
            photo: "moc khoa bat lua.jpg",
            price: 50,
            kind: "Phụ kiện",
            id: 4
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5725 ",
            photo: "moc khoa da ca sau.jpg",
            price: 200,
            kind: "Phụ kiện",
            id: 5
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5726 ",
            photo: "moc khoa da mau 2.jpg",
            price: 70,
            kind: "Phụ kiện",
            id: 6
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5727 ",
            photo: "moc khoa da mau 3.jpg",
            price: 87,
            kind: "Phụ kiện",
            id: 7
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5728 ",
            photo: "moc khoa da mau.jpg",
            price: 71,
            kind: "Phụ kiện",
            id: 8
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5729 ",
            photo: "moc khoa don gian da.jpg",
            price: 190,
            kind: "Phụ kiện",
            id: 9
        },
        {
            name: "MÓC KHÓA LAMBORGHINI 5730 ",
            photo: "moc khoa xemohinh.jpg",
            price: 150,
            kind: "Phụ kiện",
            id: 10
        }
    ]

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.list_product.length / 8);
    $scope.pageCount = Math.ceil($scope.list_thoitrang.length / 8);
    $scope.pageCount = Math.ceil($scope.list_phukien.length / 8);
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 8;
    }
    $scope.first = function () {
        $scope.begin = 0;
    }
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 8) {
            $scope.begin += 8;
        }
    }
    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 8;
        }
    }

    $scope.add_giohang = function (id) {
        for (var i = 0; i < $scope.list_product.length; i++) {
            if ($scope.list_product[i].id == id) {
                $scope.list_product[i].buy = 1;
                $scope.list_product[i].q += 1;
            }
            $scope.tinhtien();

        }

    }
    $scope.tinhtien = function () {
        $scope.tongsl = 0;
        $scope.tonggia = 0;
        for (var i = 0; i < $scope.list_product.length; i++) {
            if ($scope.list_product[i].buy == 1) {
                $scope.tongsl += $scope.list_product[i].q;
                $scope.tonggia += ($scope.list_product[i].q * $scope.list_product[i].price);
            }
        }
    }

    $scope.cart = [];
    $scope.addToCartxe = function (id) {

        var check = false;

        if (localStorage.getItem("cart") == null) {
            $scope.cart.push(angular.copy($scope.list_product[id - 1]));
            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.cart[i].soluong = 1;
            }
            localStorage.setItem("cart", JSON.stringify($scope.cart));
        } else {
            $scope.cart = [];
            $scope.cart = JSON.parse(localStorage.getItem("cart"));
            for (var i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].id == $scope.list_product[id - 1].id) {
                    $scope.cart[i].soluong++;
                    check = true;
                }
            }
            if (!check) {
                $scope.cart.push(angular.copy($scope.list_product[id - 1]));
                $scope.cart[i].soluong = 1;
            }

            localStorage.setItem("cart", JSON.stringify($scope.cart));
        }
        console.log($scope.list_product[id - 1]);
        $scope.add_giohang(id);
    }

    $scope.addToCartthoitrang = function (id) {

        var check = false;

        if (localStorage.getItem("cart") == null) {
            $scope.cart.push(angular.copy($scope.list_thoitrang[id - 1]));
            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.cart[i].soluong = 1;
            }
            localStorage.setItem("cart", JSON.stringify($scope.cart));
        } else {
            $scope.cart = [];
            $scope.cart = JSON.parse(localStorage.getItem("cart"));
            for (var i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].id == $scope.list_thoitrang[id - 1].id) {
                    $scope.cart[i].soluong++;
                    check = true;
                }
            }
            if (!check) {
                $scope.cart.push(angular.copy($scope.list_thoitrang[id - 1]));
                $scope.cart[i].soluong = 1;
            }

            localStorage.setItem("cart", JSON.stringify($scope.cart));
        }
        console.log($scope.list_thoitrang[id - 1]);
        $scope.add_giohang(id);
    }

    $scope.addToCartphukien = function (id) {

        var check = false;

        if (localStorage.getItem("cart") == null) {
            $scope.cart.push(angular.copy($scope.list_phukien[id - 1]));
            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.cart[i].soluong = 1;
            }
            localStorage.setItem("cart", JSON.stringify($scope.cart));
        } else {
            $scope.cart = [];
            $scope.cart = JSON.parse(localStorage.getItem("cart"));
            for (var i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].id == $scope.list_phukien[id - 1].id) {
                    $scope.cart[i].soluong++;
                    check = true;
                }
            }
            if (!check) {
                $scope.cart.push(angular.copy($scope.list_phukien[id - 1]));
                $scope.cart[i].soluong = 1;
            }

            localStorage.setItem("cart", JSON.stringify($scope.cart));
        }
        console.log($scope.list_phukien[id - 1]);
        $scope.add_giohang(id);
    }

    // ///them xe
    // $scope.check = function (id){
    //     $scope.cart = JSON.parse(localStorage.getItem("cart"));
    //     for (var i=0;i<$scope.cart.length;i++){
    //         if($scope.cart[i].id==id){
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // $scope.themmoitrg = function (id) {
    //     for (var i = 0; i < $scope.list_product.length; i++) {
    //         if ($scope.list_product[i].id == id) {
    //             $scope.list_product[i].q += 1;
    //             $scope.cart.push(angular.copy($scope.list_product[i]));
    //         }
    //         console.log($scope.list_product[i]);
    //     }
    // }
    // $scope.addtocarttrg = function (id) {
    //     if (!$scope.check(id)) {
    //         $scope.themmoitrg(id);
    //     }
    //     else {
    //         for (var i = 0; i < $scope.cart.length; i++) {
    //             if ($scope.cart[i].id == id) {
    //                 $scope.cart[i].q += 1;
    //             }
    //         }
    //     }
    //     localStorage.setItem("cart", JSON.stringify($scope.cart));
    // }

    // ///trg   


});