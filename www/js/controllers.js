angular.module('app.controllers', [])

    .controller('HomeCtrl', function ($scope) {
        $scope.posts = [];
        $scope.showPosts = function () {
            for (var i = 0; i < 20; i++) {
                $scope.posts.push({
                    id: i
                    , avatar: "http://trump.frost.works/images/avatar.png"
                    , username: "DonaldTrump"
                    , picture: "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg"
                    , caption: "I will make America great again!"
                    , commentsNumber: 20
                    , like: 1000
                    , commenter: "TheLegend27"
                    , comment: "We have the best president!"
                    , postedTime: 20
                });
            }
        }
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


