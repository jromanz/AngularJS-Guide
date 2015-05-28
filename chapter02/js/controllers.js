'use strict';

var helloWorldControllers = angular.module('helloWorldControllers',[]);

helloWorldControllers.controller('MainCtrl', 
		['$scope','$location','$http', 
			function MainCtrl($scope, $location, $http){
				$scope.message = "Hello World";
			}
]);

helloWorldControllers.controller('ShowCtrl',
		['$scope','$location','$http',
			function ShowCtrl($scope,$location,$http){
				$scope.message = "Show The World";
			}
]);


var addonsControllers = angular.module('addonsControllers',[]);

addonsControllers.controller('AddonsCtrl',
		['$scope','checkCreds','$location','AddonsList','$http','getToken',
		function AddonsCtl($scope,checkCreds,$location,AddonsList,$http,getToken){
			if(checkCreds()!== true){
				$location.path('/loginForm');
			}
			$http.defaults.headers.common['Authorization'] = 'Basic '+getToken();
			AddonsList.getList({},
					function success(response){
						console.log("Success:"+JSON.stringify(response));
						$scope.addonsList = response;
					},
					function error(errorResponse){
						console.log("Error: "+JSON.stringify(errorResponse));
					}
				);
			$scope.addonsActiveClass = "active";			
		}

		]);

addonsControllers.controller('CustomerCtrl', 
	['$scope', 
		function CustomerCtrl($scope){
			$scope.customerName = "Bob's Burger";
			$scope.customerNumber = "39954";
		}
	]
);















