var app = angular.module('contactApp');

app.controller('contactformCtrl', [
  '$scope', '$element', 'title', 'contact','close',
  function($scope, $element, title, contact, close) {

    $scope.name = null;
    $scope.age = null;
    $scope.title = title;
    $scope.contact = contact;
  
  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
  $scope.close = function() {
        //var resultObj = copyContactObj($scope.contact);
 	    close({
          name:$scope.contact.name,
          email:$scope.contact.email,
          number:$scope.contact.number,
        }, 500); // close, but give 500ms for bootstrap to animate
  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {

    //  Manually hide the modal.
    $element.modal('hide');
    //  Now call close, returning control to the caller.
    close(null, 500); // close, but give 500ms for bootstrap to animate
  };

}]);