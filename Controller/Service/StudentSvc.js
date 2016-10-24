(function () {
    'use strict';

    angular
        .module('AllGifted.Student')
        .factory('StudentService', ['$http', 'apiendpoints', '$rootScope', function ($http, apiendpoints, $rootScope) {
            var tokening = $rootScope.tok;
            var Student = {
                GetDashboard: getdashboard,
                GetAllCourses:getallcourses,
                GetCoursesHouse: getcourseshouse,
                GetCoursesTrack: getcoursestrack,
                PostEnrolment: postenrolment,
                PutUnenrol: putunenrol,
                PostUnanswerQ: postunanswerq,
                PostGAnswer: postganswer,
                PostGScore: postgscore
            };

            return Student;

            function getdashboard() {
                return $http({
                    url: apiendpoints + 'api/protected',
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer '+tokening
                    }
                });
            }
            function getallcourses() {
                return $http({
                    url: apiendpoints + 'courses',
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function getcourseshouse(cid) {
                return $http({
                    url: apiendpoints + 'courses/'+cid+'/houses',
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function getcoursestrack(cid) {
                return $http({
                    url: apiendpoints + 'courses/' + cid + '/tracks',
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function postenrolment(houses, rid, uid) {
                
                return $http({
                    url: apiendpoints + 'houses/'+houses+'/users',
                    method: "POST",
                    data: {"user_id":uid,"role_id":rid},
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function putunenrol(houses, users, rid) {
                
                return $http({
                    url: apiendpoints + 'houses/'+houses+'/users/'+users,
                    method: "POST",
                    data: {"Role_id":rid},
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function postunanswerq() {
                return $http({
                    url: apiendpoints + 'test/protected',
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function postganswer() {
                return $http({
                    url: apiendpoints + 'answers',
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            function postgscore() {
                return $http({
                    url: apiendpoints + 'game_score',
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + tokening
                    }
                });
            }
            
        }]);

})();