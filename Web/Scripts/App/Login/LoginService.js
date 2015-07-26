/// <reference path="../../typings/angularjs/angular.d.ts" />
var LoginModule;
(function (LoginModule) {
    var LoginService = (function () {
        function LoginService($http, $q) {
            this.$http = $http;
            this.init();
        }
        LoginService.prototype.init = function () {
        };
        LoginService.prototype.authenticateUser = function (login) {
            return this.$http.post("http://localhost/ngTypeApp/api/login/", login).then(function (response) {
                return response.data;
            }, function (errResponse) {
                return errResponse;
            });
        };
        LoginService.LoginServiceFactory = function ($http, $q, login) {
            return new LoginService($http, $q);
        };
        return LoginService;
    })();
    LoginModule.LoginService = LoginService;
    LoginService.LoginServiceFactory.$inject = ["$http", "$q"];
    angular.module("app").factory("loginService", LoginService.LoginServiceFactory);
})(LoginModule || (LoginModule = {}));
//# sourceMappingURL=LoginService.js.map