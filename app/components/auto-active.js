/*
* @Author: chensi870672487
* @Date:   2016-04-29 17:03:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-23 22:43:42
*/

(function(angular){
  'use strict';
  // 1.创建自定义指令模块
  var app = angular.module('moviecat.auto-active',[]);

  // 2.创建自定义指令
  app.directive('autoActive',['$location',function($location){
     return {
        // templateUrl
        // restrict:'ECMA'
        // replace:true
        // scope:{
        //    tt:'@'
        // }
        // transclude:true ,ng-transclude
        link:function(scope,element,attributes){
          // scope的属性值只能够在模板中使用，
          // element是指令所在标签的jqLite对象
          // attributes 指令所在标签的所有属性。

           // 我们这里是要给li标签设置点击事件，点击时获取焦点
           // 这是方法一，
          // element.on('click',function(){
          //   element.parent().children().removeClass('active');
          //   element.addClass('active');
          // });
          // console.log('afaf');

          // 这是方法二，监视锚点值的变化
          scope.loca=$location;
          scope.$watch('loca.url()',function(newValue,oldValue){
              // 得到li中a标签的href属性
             var hash =  element.children()[0].href.split('#')[1];

             
             // console.log(hash);
             // startsWith判断一个字符串是不是以另一个字符串开始 ;
             // endsWith 判断一个字符串是不是以另一个字符串结束;
             // console.log(attributes);
             if(newValue.startsWith(hash)){

                element.parent().children().removeClass(attributes.autoActive);
                element.addClass(attributes.autoActive);
             }
          });

        }
     }
  }])
})(angular);