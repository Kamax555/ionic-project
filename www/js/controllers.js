angular.module('app.controllers', ['ionic'])

    .controller('HomeCtrl', function ($http, $scope) {
        $scope.posts = [];
        
        $http.get('https://hidden-plains-41412.herokuapp.com/posts')
        .success(function(response) {
            $scope.posts.push(response.data[0]);
        });
    })

.controller('LikeCtrl', function ($scope) {

    var hasLiked = false;
    var likes = 'like';
    $scope.likeClick = function () {
        if (!hasLiked) {
            hasLiked = true;
            $scope.liked = 'Unlike';
            $scope.likeCount += 1;
        } else {
            hasLiked = false;
            $scope.liked = 'Like';
            $scope.likeCount -= 1;
        }

    if($scope.likeCount <=1) {
        $scope.likes = 'like';
    }
    else {
        $scope.likes = 'likes';
    }
    return likes;
}
})

  .controller('PanelController', function(){

    this.tab=2;

    this.selectTab = function(setTab){
      this.tab=setTab;
    }

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }

  })


  .controller('homePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

.controller('searchTabCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addTabCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('profileTabCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('commentsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

    .controller('searchTab2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

;


