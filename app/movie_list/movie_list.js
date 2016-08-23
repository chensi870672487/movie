/*
* @Author: chensi870672487
* @Date:   2016-04-29 17:03:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-23 22:50:20
*/

(function(angular){
  'use strict';
  // 这里是正在热模块
  var app = angular.module('moviecat.movie_list',[
    'ngRoute',
    'moviecat.jsonp']);

  // 自己管理自己的路由
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/:movieType/:page?',{
      // 注意这时路径是相当app.js（主模块）所在目录
      templateUrl:'./movie_list/view.html',
      controller:'movie_listController'
    })

  }]);
  // 创建控制器
  app.controller('movie_listController',[
    '$scope','$http','$routeParams','$route','$window','MyService'
    ,function($scope,$http,$routeParams,$route,$window,MyService){
    console.log($routeParams);
     $scope.loading=false;//这个值是用来表示动画是否显示的。

     var page = ($routeParams.page||'1')-0;//是字符串
     $scope.page=page;
     // console.log(page);
     // count = 5
     // page=1 ,start 0,  0,1,2,3,4
     // page=2 ,start 5,  5,6,7,8,9
     // page=3 ,start 10  

     var start = (page-1)*5;

      // MyService.jsonp('http://api.douban.com/v2/movie/movie_list',
      MyService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,
        {start:start,count:5},function(data){
          // console.log(data);
          $scope.data=data;
          // 在异步中的对数据模型的更改，angular无法监视，我们要通知它改变了
          $scope.total=data.total; // 总的数量，  // 5, 6
          $scope.totalPage= $window.Math.ceil($scope.total/data.count); // 总的页数
          $scope.loading=true;
          // setTimout,setInterval;
          $scope.$apply();//通知angular我们的数据模型发生了改变。

        });



      // 下一页按钮的点击事件
      $scope.getPage=function(nowPage){
          // 我们在这里也需要做验证：
        
        if(nowPage<=1||nowPage>$scope.totalPage){
          return;
        }

        // MyService.jsonp
        // 我们使用一个变通方法，在点击事件里改变锚点值。
        // 这里我们需要注入$route,它有个方法，updataParams用来更新url中锚点的参数，一旦改变，就会重新匹配规则。
        $route.updateParams({page:nowPage});
      }

     // angular的jsonp跨域,不是说angular是jsonp方法有问题，只是豆瓣不支持这种有.的形式。
     
     // $http.jsonp('http://api.douban.com/v2/movie/movie_list?callback=JSON_CALLBACK').then(function(data){})

     // $http.get('./movie_list/movie_list.json').then(function(response){
     //  console.log(response.data);
     //  $scope.data=response.data;
     //   // console.log(xx);
     // })
  }]);
})(angular);