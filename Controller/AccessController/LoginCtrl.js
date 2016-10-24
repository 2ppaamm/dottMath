(function () {
    'use strict';

    angular
        .module('AllGifted.Access')
        .controller('LoginCtrl', ['$scope', '$state', '$window', '$http', 'aaNotify','$rootScope', 'auth','store',function ($scope, $state, $window, $http, aaNotify,$rootScope,auth,store) {

            $scope.email = "";
            $scope.password = "";
            
            $scope.afp = $rootScope.AccessForgotPassword;
            $scope.arg = $rootScope.AccessRegister;
            $scope.sdb = $rootScope.StudentDashboard;
            $scope.tdb = $rootScope.TeacherDashboard;
            

            $scope.login = function () {
                
                if (auth.isAuthenticated) {
                    $scope.email = "rhc_93@yahoo.com";
                    $scope.password = "123456";
                    $window.location.href = $scope.sdb;
                    //$window.location.href = $scope.tdb;
                    console.log("abcd");
                }
                else
                {
                    auth.signin({
                        popup: true,
                        title: "Login me in",
                        gravatar: false,

                        icon: "http://school.all-gifted.com/pluginfile.php/1/theme_lambda/logo/1472088488/newlogo.png",
                        authParams: {
                            scope: 'openid email name app_metadata user_metadata roles'
                        }
                    }, function (profile, token) {
                        store.set('profile', profile);
                        store.set('token', token);
                        console.log(profile);
                        console.log(token);
                        var pf = store.get('profile');
                        console.log(pf);
                        $window.location.href = $scope.sdb;
                    }, function (err) {
                        alert('unable to signin');
                    })
                }
                
            }

            var aaNotifyCreateFail = function (error) {
                aaNotify.danger('Login failed. Please try again later.<br>' +
                    'Error Code:' + error.status + '<br>' +
                    'Error Text:' + error.statusText,
                {
                    showClose: true, //close button
                    iconClass: 'glyphicon glyphicon-exclamation-sign', //iconClass for a <i></i> style icon to use
                    allowHtml: true, //allows HTML in the message to render as HTML
                    ttl: 0 //time to live in ms
                });
            };
            console.log("loginctrl");
            //LoginService.ClearCredentials();

            //$scope.credentials = { Email: '', Password: '' };
            //$scope.clearform = function () {
            //    $scope.Loginform.$setPristine();
            //    $scope.credentials = { Email: '', Password: '' };
            //}

            //$scope.Login = function () {
            //    LoginService.AuthenticateUser($scope.credentials)
            //        .then(function (authResponse) {
            //            if (authResponse.data.UserDto != undefined) {
            //                LoginService.SetCredentials($scope.credentials, authResponse.data.UserDto.Name, authResponse.data.UserDto.Role, authResponse.data.UserDto.Id, authResponse.data.UserDto.LastLoginOn);
            //                $state.go('Home');
            //            }
            //            else {
            //                aaNotify.warning('Failed to login! Please try again.', {
            //                    showClose: true,
            //                    iconClass: 'glyphicon glyphicon-info-sign',
            //                    allowHtml: true,
            //                    ttl: 3000
            //                });
            //            }

            //            $scope.clearform();
            //        }, function (authResponse) {
            //            aaNotifyCreateFail(authResponse);

            //            $scope.clearform();
            //        });
            //};
        }]);
    
})();
