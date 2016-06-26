(function () {
  "use strict";
  angular
    .module("lineofbussinessApp")
    .controller("productdetailCtrl",productdetailCtrl);

  function productdetailCtrl($scope,productdetail) {
    $scope.productData ={};
    /*var testData = resolveFun;
    console.log(testData);*/

    $scope.productData = productdetail.getData();

    console.log($scope.productData.productName);

    $scope.productData.title = "Product Detail: " + $scope.productData.productName;
  }
}());
