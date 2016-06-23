(function() {
  'use strict';

  angular
    .module('lineofbussinessApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'contactCtrl',
        controllerAs : 'vm'
      })
      .state('productdetailview', {
        url: '/products/:productId',
        templateUrl: 'app/about/productDetailView.html',
        controller: 'productdetailCtrl',
        controllerAs : 'vm',
        resolve :{
         resolveFun: function (productdetail) {
           console.log(productdetail.getdata());
               return productdetail.getdata()}
        }
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
