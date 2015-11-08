var app = angular.module('contactApp', ['firebase','angularModalService', 'ngAnimate']);

app.controller('contactlistCtrl', ['$scope', 'ModalService','$firebaseArray', function($scope, ModalService, $firebaseArray ) {

    $scope.complexResult = null;
    var mycontact;

    var myFirebaseRef;
    var DB_PATH = "https://sharedcontact.firebaseio.com/contact";
    function initDBconnection() {
        myFirebaseRef = new Firebase(DB_PATH);
    }

    function getallContact() {
        var contact;
        initDBconnection();

        $scope.contacts = $firebaseArray(myFirebaseRef);
        //console.log($scope.contacts);
    }


    showContactForm = function(contact) {
        var returnObj;
        mycontact = contact;
        ModalService.showModal({
            templateUrl: "form/frm_contact.html",
            controller: "contactformCtrl",
            inputs: {
                title: "Contact",
                contact:contact
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(returnObj) {
		    if(returnObj !== null) {
	                if(mycontact == null) {
        	            $scope.contacts.$add(returnObj);
                	    //console.log(contact);
	                    //console.log($scope.contacts);
        	        } else {
                	    mycontact.name = returnObj.name;
	                    mycontact.email = returnObj.email;
        	            mycontact.number = returnObj.number;
                	    $scope.contacts.$save(mycontact);
	                }
		}
            });
        });

    };

    $scope.addContact = function() {
        showContactForm();
    }

    $scope.editContact = function(contact) {
        showContactForm(contact);
    }

    $scope.removeContact = function(contact) {
        $scope.contacts.$remove(contact);
    }


    //start
    getallContact();
}]);