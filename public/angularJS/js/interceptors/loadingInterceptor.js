myApp.factory("loadingInterceptor", function($q, $rootScope, $timeout){
	return{
		request: function(config){
			$rootScope.loading = true;
			return config;
		},
		requestErro: function(rejection){
			$rootScope.loading = false;
			return $q.rejection(rejection);
		},
		response: function(response){
			$timeout(function(){
				$rootScope.loading = false;	
			},500);
			return response;
		},
		responseErro: function(rejection){
			$rootScope.loading = false;
			return $q.rejection(rejection);
		}
	};
});