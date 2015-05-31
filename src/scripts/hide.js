'use strict';

angular
  .module('netHide', [])
  .directive('netHide', function () {
    return {
      restrict: 'A',
      scope: {
        netHide: '@'
      },
      link: function (scope, element) {
        scope.netHide = scope.netHide || 'form-control';

        element.addClass('net-hide');

        var $label = element.find('label');
        var $component = element.find('.'+scope.netHide);
        var $cancel = angular.element('<i/>',{class: 'hide-cancel glyphicon glyphicon-remove-sign hidden'});

        element.append($cancel);

        $label.removeClass('sr-only');
        $component.addClass('hidden');

        $label.on('click', function () {
          $component.removeClass('hidden');
          $label.addClass('hidden');
          $cancel.removeClass('hidden');
        });

        $cancel.on('click', function () {
          $component.addClass('hidden');
          $label.removeClass('hidden');
          $cancel.addClass('hidden');
        });
      }
    };
  });
