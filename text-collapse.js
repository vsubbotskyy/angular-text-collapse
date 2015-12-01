/**
 *  Angular directive to to auto-collapse long text
 *  wrapped into angular module
 *
 *  @param data-text (string) bound text value
 *  @param data-max-length (int) - maximum symbols before trimming starts
 *
 *  @param data-expand-label - (string) optional - default - "more"
 *  @param data-collapse-label - (string) optional, default - "less"  
 *
 *  to change appearance of expand/collapse control, 
 *  style .collapse-text-toggle element
 */
angular.module('textCollapse', [])
    .directive('textCollapse', ['$compile', function($compile) {

        return {
            restrict: 'E',
            scope: true,
            link: function(scope, element, attrs) {
                scope.collapsed = false;
                scope.collapseLabel = attrs.collapseLabel;
                scope.expandLabel = attrs.expandLabel;
                scope.toggle = function() {
                    scope.collapsed = !scope.collapsed;
                };

                // wait for changes on the text
                attrs.$observe('text', function(text) {
                    var maxLength = scope.$eval(attrs.maxLength);

                    if (text.length > maxLength) {
                        // split the text in two parts, the first always showing
                        var visiblePart = String(text).substring(0, maxLength);
                        var trimmedPart = String(text).substring(maxLength, text.length);

                        // create some new html elements to hold the separate info
                        var firstSpan = $compile('<span>' + visiblePart + '</span>')(scope);
                        var secondSpan = $compile('<span ng-if="collapsed">' + trimmedPart + '</span>')(scope);
                        var moreIndicatorSpan = $compile('<span ng-if="!collapsed">... </span>')(scope);
                        var toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? collapseLabel || "less" : expandLabel || "more"}}</span>')(scope);

                        // remove the current contents of the element
                        // and add the new ones we created
                        element.empty();
                        element.append(firstSpan);
                        element.append(secondSpan);
                        element.append(moreIndicatorSpan);
                        element.append(toggleButton);
                    } else {
                        element.empty();
                        element.append(text);
                    }
                });
            }
        };
    }]);
