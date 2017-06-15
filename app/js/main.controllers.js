"use strict";
app.controller('masterController' ,function($scope,sampleService) {
	$scope.quickDetail = {};
	$scope.bookingDetail = {};
	$scope.addOnedayDetail = {};
	$scope.courtDetail = {};
	$scope.registermarriageDetail = {};
	


	$scope.saveOneday =function(){
		sampleService.addOneday($scope.addOnedayDetail).then(function(Result){
				$('#oneDayMarriageRegistrationForm').modal('hide');
			    $('#sucess').modal('show');
			    $scope.addOnedayDetail = {};
			    $scope.addOnedayDetail.package = "";
		})
	}


	$scope.saveCourt =function(){
		sampleService.addCourtmarriage($scope.courtDetail).then(function(Result){
			$('#courtMarriage').modal('hide');
			$('#sucess').modal('show');
			$scope.courtDetail = {};
			$scope.courtDetail.package = "";
		})
	}


	$scope.saveRegisterMarriage =function(){
		sampleService.addRegistermarriage($scope.registermarriageDetail).then(function(Result){
			$('#marriageRegistrationForm').modal('hide');
			$('#sucess').modal('show');
			$scope.registermarriageDetail = {};
			$scope.registermarriageDetail.package = "";
		})
	}


	$scope.saveQuick =function(){
		sampleService.addQuickquerry($scope.quickDetail).then(function(Result){
			$('#quick_query').modal('hide');
			$('#sucess').modal('show');
			$scope.quickDetail = {};
		})
	}


	$scope.saveBooking =function(type,querry){
		// console.log("$scope.bookingDetail",$scope.bookingDetail)
		$scope.bookingDetail.type = type;
		 var str = $scope.bookingDetail.date; 
		 var month = str.slice(5, 7);//month
		 var year = str.slice(0, 4);//year
		 var date = str.slice(8, 10);//date
		 $scope.bookingDetail.date = date+"-"+month+"-"+year;
		sampleService.addBooking($scope.bookingDetail).then(function(Result){
				$('#'+querry+'').modal('hide');
				$('#sucess').modal('show');
				$scope.bookingDetail = {};
		})
	}
    






	$scope.registryPackagr = function(pckgType){
		$scope.registermarriageDetail.package = pckgType;
		$('#pi3').modal('hide');
		$('#marriageRegistrationForm').modal('show');
		

	}

	$scope.courtPackagr = function(pckgType){
		$scope.courtDetail.package = pckgType;
		$('#pi2').modal('hide');
		$('#courtMarriage').modal('show');
		

	}

	$scope.onePackagr = function(pckgType){
		$scope.addOnedayDetail.package = pckgType;
		$('#pi1').modal('hide');
		$('#oneDayMarriageRegistrationForm').modal('show');
		

	}




    //Controller code here.
     $(function(){ 
	     var navMain = $(".collapse");
	 });

});