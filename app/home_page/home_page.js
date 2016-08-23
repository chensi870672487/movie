/*
* @Author: chensi870672487
* @Date:   2016-04-29 17:03:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-23 22:44:23
*/

(function(angular){
  'use strict';
  // 创建首页模块
  var app = angular.module('moviecat.home_page',['ngRoute']);

  // 配置规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home_page',{
      templateUrl:'./home_page/view.html',
      controller:'home_pageController'
    });
  }]);

   // 创建控制器
  app.controller('home_pageController',['$scope',function($scopes){
    
  }]);
})(angular);