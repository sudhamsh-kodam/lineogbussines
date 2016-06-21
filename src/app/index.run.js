(function() {
  'use strict';

  angular
    .module('lineofbussinessApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
