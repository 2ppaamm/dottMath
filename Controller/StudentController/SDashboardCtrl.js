(function () {
    'use strict';

    angular
        .module('AllGifted.Student')
        .controller('SDashboardCtrl', ['$scope', '$state', '$window', '$http', 'aaNotify','$rootScope','StudentService','auth','store', function ($scope, $state, $window, $http, aaNotify, $rootScope,StudentService,auth,store) {
            $scope.alg = $rootScope.AccessLogin;
            $scope.sdb = $rootScope.StudentDashboard;
            $scope.sas = $rootScope.StudentAssignment;
            $scope.scl = $rootScope.StudentClass;
            $scope.spf = $rootScope.StudentProfile;
            $scope.srs = $rootScope.StudentResults;
            $scope.saa = $rootScope.StudentAcademicAchievers;
            $scope.sgl = $rootScope.StudentGameLeader;
            $scope.sac = $rootScope.StudentAllClasses;
            $scope.username = $rootScope.unm;
            $scope.notification = [];
            $scope.namount = 0;
            $scope.cclasses = 0;
            $scope.cassignments = 0;
            $scope.couid = "";
            $scope.con ="";
            $scope.crb = "";
            $scope.maxileaccuracy = 0;
            $scope.averagecourseprogress = 0;
            $scope.totalcoursescomplete = 0;
            $scope.totalcourseenrol = 0;
            $scope.totalprogress = 0;

            $scope.ms = 0;
            $scope.gs = 0;
            $scope.uid = "";
            $scope.data = [];
            $scope.datacourses = [];
            $scope.currentclass = [];
            $scope.coursest = [];
            $scope.coursesh = [];

            //logout function
            $scope.logout = function () {
                store.remove('profile');
                store.remove('token');
                auth.signout();
                $window.location.href = $scope.alg;
            };

            //load function
            var onStudentLoadComplete = function (response) {
                console.log(response);
                //get user id
                $scope.uid = response.data.user.id;

                //get maxile level
                $scope.ms = response.data.user.maxile_level;

                //get game level
                if (response.data.user.game_level == null || undefined)
                {
                    $scope.gs = 0;
                }
                else
                {
                    $scope.gs = response.data.user.game_level;
                }

                //get activities
                var rdtl = response.data.logs;
                var datas = [];
                if (rdtl.length > 0) {
                    for (var i = 0; i < rdtl.length; i++) {
                        var d = new Date();
                        var dt = d.getTime();
                        var od = rdtl[i].updated_at
                        var odate = new Date(od);
                        var odd = odate.getTime();
                        var balancetime = dt - odd;
                        var x = balancetime / 1000
                        var seconds = x % 60
                        x /= 60
                        var minutes = x % 60
                        x /= 60
                        var hours = x % 24
                        x /= 24
                        var days = x
                        var min = minutes.toString();
                        var mins = min.split('.');
                        var hr = hours.toString();
                        var hrs = hr.split('.');
                        var dy = days.toString();
                        var dys = dy.split('.');

                        var opt = { name: rdtl[i].name, minutes:mins[0],hours:hrs[0],days:dys[0] };
                        
                        datas.push(opt);
                    }
                    $scope.data = datas;
                }

                //get notification
                var notif = response.data.logs;
                var notifs = [];
                if (notif.length > 0) {
                    $scope.namount = notif.length;
                    for (var n = 0; n < notif.length; n++) {
                        var d = new Date();
                        var dt = d.getTime();
                        var od = notif[n].updated_at;
                        var odate = new Date(od);
                        var odd = odate.getTime();
                        var balancetime = dt - odd;
                        var x = balancetime / 1000
                        var seconds = x % 60
                        x /= 60
                        var minutes = x % 60
                        x /= 60
                        var hours = x % 24
                        x /= 24
                        var days = x
                        var min = minutes.toString();
                        var mins = min.split('.');
                        var hr = hours.toString();
                        var hrs = hr.split('.');
                        var dy = days.toString();
                        var dys = dy.split('.');

                        var opt = { name: notif[n].name, minutes: mins[0], hours: hrs[0], days: dys[0] };

                        notifs.push(opt);
                        
                    }
                    $scope.notification = notifs;
                }

                //get current enrol calss
                var cec = response.data.user.enrolled_classes;
                if (cec.length >0) {
                    for (var c = 0; c < cec.length; c++) {
                        $scope.currentclass.push(cec[c]);
                    }
                }

                //get current class number
                var cca = response.data.user.enrolled_classes;
                $scope.cclasses = cca.length;
                    
                //get all courses
                var rdtc = response.data.courses;
                if (rdtc.length > 0) {
                    for (var n = 0; n < 4; n++) {
                        $scope.datacourses.push(rdtc[n]);
                    }
                }
                console.log(response.data);
                console.log($scope.cclasses);
                
            };

      
            //get particular courses name and creater
            var onCoursesLoadComplete = function (response) {
                var couid = $scope.couid;
                var cuc = response.data.courses;
                if (cuc != undefined) {
                    for (var c = 0; c < cuc.length; c++) {
                        if (cuc[c].id == couid) {
                            $scope.con = cuc[c].course;
                            $scope.crb = cuc[c].created_by.name;
                        }
                        console.log(cuc[c].id);
                    }
                    console.log(couid);
                    console.log($scope.con);
                    console.log($scope.crb);
                }
            }

            //get all class in particular courses
            var onClassLoadComplete = function (response) {
                $scope.coursesh = [];
                //get all classes
                console.log(response);
                var allclasses = response.data;
                if (allclasses != undefined) {
                    for (var i = 0; i < allclasses.length; i++) {
                        $scope.coursesh.push(allclasses[i]);
                    }
                }
            }

            //get all track in particular courses
            var onTrackLoadComplete = function (response) {
                $scope.coursest = [];
                //get all classes
                console.log(response);
                var alltrack = response.data.tracks;
                if (alltrack != undefined) {
                    for (var i = 0; i < alltrack.length; i++) {
                        $scope.coursest.push(alltrack[i]);
                    }
                }
            }

            //get maxile accuracy
            var onMaxileAccuracyComplete = function (response) {
                var maxacc = response.data.field_maxile;
                if (maxacc == undefined || maxacc.length < 1) {
                    $scope.maxileaccuracy = 0;
                }
            }

            //get average course progress
            var onAverageCoursePogressComplete = function (response) {
                var avcp = response.data.enrolled_classes;
                if (avcp == undefined || avcp.length < 1) {
                    $scope.averagecourseprogress = 0;
                }
            }

            //get total course complete
            var onTotalCourseComplete = function (response) {
                var tolcoc = response.data.enrolled_classes;
                if (tolcoc == undefined || tolcoc.length < 1) {
                    $scope.totalcoursescomplete = 0;
                    $scope.totalcourseenrol = 0;
                    $scope.totalprogress = 0;
                }
            }

            //data load when start page
            StudentService.GetDashboard().then(onStudentLoadComplete);
            StudentService.GetDashboard().then(onMaxileAccuracyComplete);
            StudentService.GetDashboard().then(onAverageCoursePogressComplete);
            StudentService.GetDashboard().then(onTotalCourseComplete);
            
            //class list function
            $scope.popclass = function (cid) {
                StudentService.GetCoursesHouse(cid).then(onClassLoadComplete);
            }

            //track list function
            $scope.poptrack = function (cid) {
                $scope.couid = cid;
                StudentService.GetDashboard().then(onCoursesLoadComplete);
                StudentService.GetCoursesTrack(cid).then(onTrackLoadComplete);
            }

            //go to the particular class
            $scope.classongo = function (classid) {
                $window.location.href = $scope.scl(classid);
            }

            //enroll class function
            $scope.enroll = function (house) {
                var uid = $scope.uid;
                StudentService.PostEnrolment(house, 1, uid)
            }

            //sitebar go to particular class
            $scope.movetomyclass = function (hid) {
                $window.location.href = $scope.scl(hid);
            }
            
            $scope.notifyshow = function () {
                if ($scope.namount > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }

            $scope.classshow = function () {
                if ($scope.cclasses > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }

            $scope.assignmentshow = function () {
                if ($scope.cassignments > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }]);
})();