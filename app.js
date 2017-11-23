(function () {

'use strict';
angular.module('LunchCheck',[])
	   .controller('lunchController',lunchController);

lunchController.$inject = ['$scope'];

function lunchController($scope, $injector){

 $scope.items = "";
 $scope.checkItemsCount = function(){

 	var str = $scope.items;
 	console.log(str);
 	var isEmptyString = true;
 	if (str.length > 0)  isEmptyString = false;
    var arrayOfItems = str.split(',');
		var itemsNo = 0;
		for (var i = 0; i < arrayOfItems.length; i++) {
			if(arrayOfItems[i].length > 0) itemsNo++;
		}
    // var itemsNo = arrayOfItems.length;
    console.log(arrayOfItems.length);
		console.log(itemsNo);
    if(isEmptyString || itemsNo === 0){
    	$scope.result = "Please enter the data (string of zero length not considered as item)";
    	$scope.setColor = {"color":"red"};
			$scope.setBorderColor = {"border-color":"red"};
    }
    else if(itemsNo <= 3 ){
    	$scope.result = "Enjoy! (string of zero length not considered as item)";
    	$scope.setColor = {"color":"green"};
			$scope.setBorderColor = {"border-color":"green"};
     }
    else{
    	$scope.result = "Too much! (string of zero length not considered as item)";
    	$scope.setColor = {"color":"green"};
			$scope.setBorderColor = {"border-color":"green"};
        }


 };

}

})();
