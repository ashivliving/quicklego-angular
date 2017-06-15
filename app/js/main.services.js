'use strict'

//sample service
app.service('sampleService', function($q,$http,$rootScope) {
    var self = this;

    self.task = function(data) {
        //Sample Function
    };

    this.addOneday = function(data){

      	var deferred = $q.defer();
      	$http({
      		method: 'POST',
      		url: 'http://quicklego.com/quicklegoapi/create.php?table=omeday& &hus_name='+data.husName+'&hus_dob='+data.husDob+'&hus_fthr_name='+data.husfather+'&hus_mthr_name='+data.husmother+'&hus_prsnt_addr='+data.husAddr+'&hus_name_gaurd='+data.husGuard+'&hus_relation='+data.husRelation+'&hus_gaurd_prmnt_addr='+data.husGaurdpermanentaddr+'&hus_gaurd_crnt_addr='+data.husGaurdcrntaddr+'&hus_nationality='+data.husNationality+'&hus_religion='+data.husReligion+'&hus_status='+data.husStatus+'&hus_age='+data.husAge+'&hus_profession='+data.husProfession+'&hus_number='+data.husNumber+'&hus_email='+data.husEmail+'&wife_name='+data.wifeName+'&wife_dob='+data.wifeDob+'&wife_fthr_name='+data.wifefather+'&wife_mthr_name='+data.wifemother+'&wife_prsnt_addr='+data.wifeAddr+'&wife_name_gaurd='+data.wifeGuard+'&wife_relation='+data.wifeRelation+'&wife_gaurd_prmnt_addr='+data.wifeGaurdpermanentaddr+'&wife_gaurd_crnt_addr='+data.wifeGaurdcrntaddr+'&wife_nationality='+data.wifeNationality+'&wife_religion='+data.wifeReligion+'&wife_status='+data.wifeStatus+'&wife_age='+data.wifeAge+'&wife_profession='+data.wifeProfession+'&wife_number='+data.wifeNumber+'&wife_email='+data.wifeEmail+'&place_marrg='+data.placemarriage+'&date_marrg='+data.datemarriage+'&witness1_name='+data.witness1Name+'&witness2_name='+data.witness2Name+'&witness3_name='+data.witness3Name+'&witness1_addr='+data.witness1Addr+'&witness2_addr='+data.witness2Addr+'&witness3_addr='+data.witness3Addr+'&one_packg='+data.package+'', 
      		headers: {}

      	})
      	.success(function(result){
      		deferred.resolve(result);
      	})
      	return deferred.promise;
     
    }


    this.addCourtmarriage = function(data){

      	var deferred = $q.defer();
      	$http({
      		method: 'POST',
      		url: 'http://quicklego.com/quicklegoapi/create.php?table=court& &hus_name='+data.husName+'&hus_dob='+data.husDob+'&hus_fthr_name='+data.husfather+'&hus_mthr_name='+data.husmother+'&hus_prsnt_addr='+data.husAddr+'&hus_name_gaurd='+data.husGuard+'&hus_relation='+data.husRelation+'&hus_gaurd_prmnt_addr='+data.husGaurdpermanentaddr+'&hus_gaurd_crnt_addr='+data.husGaurdcrntaddr+'&hus_nationality='+data.husNationality+'&hus_religion='+data.husReligion+'&hus_status='+data.husStatus+'&hus_age='+data.husAge+'&hus_profession='+data.husProfession+'&hus_number='+data.husNumber+'&hus_email='+data.husEmail+'&wife_name='+data.wifeName+'&wife_dob='+data.wifeDob+'&wife_fthr_name='+data.wifefather+'&wife_mthr_name='+data.wifemother+'&wife_prsnt_addr='+data.wifeAddr+'&wife_name_gaurd='+data.wifeGuard+'&wife_relation='+data.wifeRelation+'&wife_gaurd_prmnt_addr='+data.wifeGaurdpermanentaddr+'&wife_gaurd_crnt_addr='+data.wifeGaurdcrntaddr+'&wife_nationality='+data.wifeNationality+'&wife_religion='+data.wifeReligion+'&wife_status='+data.wifeStatus+'&wife_age='+data.wifeAge+'&wife_profession='+data.wifeProfession+'&wife_number='+data.wifeNumber+'&wife_email='+data.wifeEmail+'&place_marrg='+data.placemarriage+'&date_marrg='+data.datemarriage+'&witness1_name='+data.witness1Name+'&witness2_name='+data.witness2Name+'&witness3_name='+data.witness3Name+'&witness1_addr='+data.witness1Addr+'&witness2_addr='+data.witness2Addr+'&witness3_addr='+data.witness3Addr+'&one_packg='+data.package+'', 
      		headers: {}

      	})
      	.success(function(result){
      		deferred.resolve(result);
      	})
      	return deferred.promise;
     
    }


    this.addRegistermarriage = function(data){

      	var deferred = $q.defer();
      	$http({
      		method: 'POST',
      		url: 'http://quicklego.com/quicklegoapi/create.php?table=marriage& &hus_name='+data.husName+'&hus_dob='+data.husDob+'&hus_fthr_name='+data.husfather+'&hus_mthr_name='+data.husmother+'&hus_prsnt_addr='+data.husAddr+'&hus_name_gaurd='+data.husGuard+'&hus_relation='+data.husRelation+'&hus_gaurd_prmnt_addr='+data.husGaurdpermanentaddr+'&hus_gaurd_crnt_addr='+data.husGaurdcrntaddr+'&hus_nationality='+data.husNationality+'&hus_religion='+data.husReligion+'&hus_status='+data.husStatus+'&hus_age='+data.husAge+'&hus_profession='+data.husProfession+'&hus_number='+data.husNumber+'&hus_email='+data.husEmail+'&wife_name='+data.wifeName+'&wife_dob='+data.wifeDob+'&wife_fthr_name='+data.wifefather+'&wife_mthr_name='+data.wifemother+'&wife_prsnt_addr='+data.wifeAddr+'&wife_name_gaurd='+data.wifeGuard+'&wife_relation='+data.wifeRelation+'&wife_gaurd_prmnt_addr='+data.wifeGaurdpermanentaddr+'&wife_gaurd_crnt_addr='+data.wifeGaurdcrntaddr+'&wife_nationality='+data.wifeNationality+'&wife_religion='+data.wifeReligion+'&wife_status='+data.wifeStatus+'&wife_age='+data.wifeAge+'&wife_profession='+data.wifeProfession+'&wife_number='+data.wifeNumber+'&wife_email='+data.wifeEmail+'&place_marrg='+data.placemarriage+'&date_marrg='+data.datemarriage+'&witness1_name='+data.witness1Name+'&witness2_name='+data.witness2Name+'&witness3_name='+data.witness3Name+'&witness1_addr='+data.witness1Addr+'&witness2_addr='+data.witness2Addr+'&witness3_addr='+data.witness3Addr+'&one_packg='+data.package+'', 
      		headers: {}

      	})
      	.success(function(result){
      		deferred.resolve(result);
      	})
      	return deferred.promise;
     
    }


    this.addBooking = function(data){

      	var deferred = $q.defer();
      	$http({
      		method: 'POST',
      		url: 'http://quicklego.com/quicklegoapi/book/create.php?table=book&name='+data.name+'&email='+data.email+'&number='+data.number+'&date='+data.date+'&querry='+data.querry+'&type='+data.type+'', 
      		headers: {}

      	})
      	.success(function(result){
          console.log("result",result)
      		deferred.resolve(result);
      	})
      	return deferred.promise;
     
    }


    this.addQuickquerry = function(data){

      	var deferred = $q.defer();
      	$http({
      		method: 'POST',
      		url: 'http://quicklego.com/quicklegoapi/book/create.php?table=quick&name='+data.name+'&email='+data.email+'&number='+data.number+'&querry='+data.querry+'', 
      		headers: {}

      	})
      	.success(function(result){
      		deferred.resolve(result);
      	})
      	return deferred.promise;
     
    }
});

