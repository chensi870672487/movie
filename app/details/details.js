/*
* @Author: chensi870672487
* @Date:   2016-04-29 17:03:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-23 22:43:55
*/

(function(angular){
  'use strict';
  // 1.创建详情页模块
 var app = angular.module('moviecat.details',['ngRoute','moviecat.jsonp']);


  // 2. 配置路由规则
  app.config(['$routeProvider',function($routeProvider){
     $routeProvider.when('/details/:id',{
      templateUrl:'./details/view.html',
      controller:'detailsController'

     })


  }])

  // 3.创建详情页控制器
  app.controller('detailsController',[
    '$scope','$routeParams','MyService',function($scope,$routeParams,MyService){
      MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,null,function(data){
        // console.log(data);
        $scope.data=data;
        $scope.$apply();
      });
  }]);
})(angular);