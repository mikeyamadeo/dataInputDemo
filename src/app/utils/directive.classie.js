'use strict';

angular.module('directive.classie', [])
    .directive('classie', [ function() {

        function parse( string ) {
            var _event = string.substr( 0, string.indexOf(":") );
                _class = string.substr( string.lastIndexOf(":") + 1 );

            return {
                _event: _event,
                _class: _class
            }
        }

        return {
            restrict: 'A',
            scope: {
                _class: "@classie"
            },
            link: function(scope, element, attrs) {

                scope.$on("::addClass", function( ev, data ) {
                    element.addClass( data );
                });

                scope.$on("::removeClass", function( ev, data ) {
                    element.removeClass( data );
                });

            }
        }; 
    }]);