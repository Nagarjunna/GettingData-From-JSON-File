var app= angular.module("myApp",[]);
app.controller("jsonctrl",function($scope,$http)
{
	$scope.Categories=[];
	$http({
			method:"GET",
			url:"Scripts/Category.json",
			data:"",
			headers:{"Content":"Application/json"}
		 })
		.then(function(response)
		{
			$scope.Categories=response.data;
		});
});