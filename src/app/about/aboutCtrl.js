(function () {
  "use strict";
  angular
    .module('lineofbussinessApp')
    .controller('aboutCtrl',  ["$scope","$uibModal","$log","$rootScope",
      function  aboutCtrl($scope,$uibModal,$log,$rootScope) {
        $scope.open = function (size) {

          var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'app/about/productModal.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });

          modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        };

        $rootScope.$on('newobj',function (event,obj) {
          vm.products.push(obj);
          console.log(event,obj,"in on");
        });

        $scope.test = "testing";
        var vm = this;
        vm.showImage =false;
        vm.toggleImage = function () {
          vm.showImage = !vm.showImage;
        };
        vm.products = [
          {" productId " : 1,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 12,
            "imageUrl" : "http://lorempixel.com/100/100/nature"
          },
          {" productId " : 2,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 14,
            "imageUrl" : "http://lorempixel.com/100/100/fashion"
          },
          {" productId " : 3,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 17,
            "imageUrl" : "http://lorempixel.com/100/100/sports/1"
          },
          {" productId " : 4,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 12,
            "imageUrl" : "http://lorempixel.com/100/100/sports"
          },
          {" productId " : 5,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 10,
            "imageUrl" : "http://lorempixel.com/100/100/nightlife"
          }
        ];
        vm.addProduct = function () {

        };

      }]);
}());

angular.module('lineofbussinessApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $rootScope) {
  $scope.product = {};
  /*  $scope.items = items;
   $scope.selected = {
   item: $scope.items[0]
   };*/
  $scope.save = function () {
    $rootScope.$emit('newobj',$scope.product);
    console.log($scope.product);
    $scope.cancel();
  };
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
