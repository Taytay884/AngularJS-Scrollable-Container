'use strict';

angular.module('myApp')
    .component('scrollableContainer', {
        transclude: true,
        template:
            '<div class="scrollable-container">' +
                '<div class="info-container" ng-transclude>' +
                '</div>' +
            '</div>'
    });
