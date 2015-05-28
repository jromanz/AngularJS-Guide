'use strict';
var blogServices = angular.module("blogServices",["ngResource"]);

blogServices.factory("BlogList",["$resource", function($resource){
			return $resource('http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList',
				{},	{
						get: {method:"GET", cache: false, isArray: true}
					}
				);
		}
	]
);