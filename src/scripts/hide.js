'use strict';

angular
  .module('netHide', [])
  .directive('netHide', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/hide.html',
      transclude: true,
      replace: true, // DEPRECATED
      scope: {
        label: '@'
      },
      link: function (scope, element, attr, controller, transclude) {

        var $label = element.find('.hide-label');
        var $component = element.find('.hide-component');
        var $cancel = element.find('.hide-cancel');

        element.find('.to-transclude').replaceWith(transclude());

        scope.showInput = function () {
          $component.removeClass('hidden');
          $label.addClass('hidden');
          $cancel.removeClass('hidden');
        };

        scope.hideInput = function () {
          $component.addClass('hidden');
          $label.removeClass('hidden');
          $cancel.addClass('hidden');
        };
      }
    };
  });
