angular.module('app.controllers', ['ionic.contrib.ui.hscrollcards','ionicLazyLoad'])
  
.controller('ecomCtrl', function($scope) {

  $scope.items = [];
  console.log("Categories Controller says: ecomCtrl");
  for (var i = 0; i <= 5; i++) {
    var tmp = [
      {desc: 'The Ramones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSulfJcjBhxxW2NBBn9KbE3B4BSeh0R7mQ38wUi_zpJlQrMoDWh_qFcMelE_tjtAERUPTc'},
      {desc: 'The Beatles', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGpH07f9zeucoOs_stZyIFtBncU-Z8TDYmJgoFnlnxYmXjJEaitmxZNDkNvYnCzwWTySM'},
      {desc: 'Pink Floyd', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-FbU5dD_Wz472srRIvoZAhyGTEytx9HWGusbhYgSc2h0N6AqqRrDwzApmyxZoIlyxDcU'},
      {desc: 'The Rolling Stones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6uwPPBnHfAAUcSzxr3iq9ou1CZ4f_Zc2O76i5A4IyoymIVwjOMXwUFTGSrVGcdGT9vQY'},
      {desc: 'The Jimi Hendrix Experience', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA3jz0uhVypONAKWUve80Q6HASvuvZiohl4Sru5ZihkAsjWiaGjocfxd0aC3H7EeFk5-I'},
      {desc: 'Van Halen', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIslVN9cJJ6YuV0y7JihAyA63JDhXGhkCVxHIRE-IoaF-rpefjIXO5osA24QvN9iCptC8'}
    ];
    $scope.items = $scope.items.concat(tmp);
  };
  
    $scope.doRefresh = function() {
      $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };
  
})
   
.controller('coffeeShopCtrl', function($scope,$http,$ionicLoading) {
	console.log("SubCategories Controller says: coffeeShopCtrl");		
		$ionicLoading.show({
   		  template: 'Loading...'
 		 })

        $http.get("http://gaddieltech.fatcow.com/AndroidPhotoUpload/ecomDownload.php")
      .success(function (response) 
      {
      $ionicLoading.hide()
       $scope.names = response;
      });    
      
      $scope.doRefresh = function() {
      $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };

})
   
.controller('pharmacyCtrl', function($scope,$http,$ionicLoading) {

		console.log("SubCategories Controller says: pharmacyCtrl");		
		$ionicLoading.show({
   		  template: 'Loading...'
 		 })
    
       $http.get("http://gaddieltech.fatcow.com/AndroidPhotoUpload/stationeryrDownload.php")
      .success(function (responsee) 
      {
      $ionicLoading.hide()
       $scope.namess = responsee;
       
      });    
      
     $scope.doRefresh = function() {
      $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };
 

})
 
