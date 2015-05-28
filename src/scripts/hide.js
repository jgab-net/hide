'use strict';

/** @namespace scope.awesome */

angular
  .module('netComponents', [])
  .directive('netHide', function ($timeout) {
    return {
      restrict: 'E',
      replace: true, //DEPECRATED
      templateUrl: 'views/hide.html',
      transclude: true,
      scope: {
        label:'@'
      },
      link: function (scope, element) {
        var $label = element.find('.hide-label');
        var $component = element.find('.hide-component');

        scope.showInput = function () {
          $component.toggleClass('hidden');
          $label.addClass('hidden');
        };
      }
    };
  });
