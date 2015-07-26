/// <reference path="../../typings/angularjs/angular.d.ts" />
module LoginModule {
    export class LoginService {
        private $http: ng.IHttpService;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.$http = $http;
            this.init();
        }
        init() {

        }
        authenticateUser(login:LoginModule.Login) {            
            return this.$http.post("http://localhost/ngTypeApp/api/login/", login).
                then((response) => { return response.data; }, (errResponse) => { return errResponse; });
        }
        public static LoginServiceFactory($http: ng.IHttpService, $q: ng.IQService, login: LoginModule.Login) {
            return new LoginService($http, $q);
        }
    }
    LoginService.LoginServiceFactory.$inject = ["$http", "$q"];
    angular.module("app").factory("loginService", LoginService.LoginServiceFactory);
}