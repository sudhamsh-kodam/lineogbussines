(function () {
  "use strict";
  angular
    .module("lineofbussinessApp")
    .controller("productdetailCtrl",productdetailCtrl);

  function productdetailCtrl($rootScope) {
    var vm = this;
    vm.products = {
      " productId " : 1,
      "productName" : "Leaf Rake",
      "productCode" : "GDN-0011",
      "releaseDate" : "March 19, 2016",
      "Description": "Leaf rake with 48 inch handle",
      "price" : 12,
      "imageUrl" : "http://lorempixel.com/100/100/nature"
    };
    vm.title = "Product Detail: " + vm.products.productName;
  }
}());
