(function (angular) {
    "use strict";

    // start your ride
    // 创建一个模块,所有子模块需要在主模块中引入
    var app  = angular.module('moviecat',[
      'moviecat.home_page', // 先引用，先匹配
      'moviecat.details', // 
      'moviecat.movie_list',
      'moviecat.auto-active',
      'ngRoute'
      ]);

    // 创建控制器
    app.controller('mainController',['$scope','$route',function($scope,$route){
      //

      $scope.search=function(){
        console.log(123);
        // 我们要在这里改变url的值
        $route.updateParams({
          movieType:'search',
          q:$scope.query
        })
      }
    }]);

})(angular);

//