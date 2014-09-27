'use strict';

angular.module('controller.dataInput', [])
  .controller('dataInputCtrl',
    [           '$scope',
    function (   $scope) {

        /*------------------------------------*\
            #SCOPE VARIABLE DECLARATIONS
        \*------------------------------------*/

        $scope.data = [];
        $scope.user = {
            name : "",
            email : ""
        }




        /*------------------------------------*\
            #VARIABLE DECLARATIONS
        \*------------------------------------*/
        //used for form reset
        var user = angular.copy($scope.user);

        



        /*------------------------------------*\
            #SCOPE FUNCTION DECLARATIONS
        \*------------------------------------*/

        /**
         * @desc Bound to form's ng-submit. If valid, makes an entry obj from
         *   form data, pushes is in the scopes data array. closes the modal &
         *   resets the form using angular copy.
         * @param angular form object
         */
        $scope.addEntry = function( data ) {

            if (data.$valid) {

                var name = data.name.$modelValue,
                    email = data.email.$modelValue;
                    entry = new Entry( new Date(), name, email );

                $scope.data.push( entry );
                console.log($scope.data);
                $scope.closeModal();

                //reset form
                $scope.user = angular.copy(user);
            }
        }

        $scope.openModal = function() {
            $scope.$broadcast("::addClass", "md-show");
        }

        $scope.closeModal = function() {
            $scope.$broadcast("::removeClass", "md-show");
        }





        /*------------------------------------*\
            #FUNCTION DECLARATIONS
        \*------------------------------------*/
        

        var Entry = function  (time, name, email) {

            this.time  = time;
            this.name  = name;
            this.email = email;

        }
    }]);