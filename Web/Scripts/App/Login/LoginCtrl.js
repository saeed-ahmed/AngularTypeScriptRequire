/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var LoginModule;
(function (LoginModule) {
    var Login = (function () {
        function Login() {
        }
        return Login;
    })();
    LoginModule.Login = Login;
    var LoginCtrl = (function () {
        //private loginService:Log
        function LoginCtrl(loginService, $rootScope) {
            //alert("login...")       
            this.$rootScope = $rootScope;
            this.loginDto = new Login();
            this.loginService = loginService;
            this.init();
        }
        LoginCtrl.prototype.authenticate = function () {
            var _this = this;
            var vm = this;
            this.loginService.authenticateUser(this.loginDto).then(function (data) {
                if (data != null) {
                    //debugger;                        
                    vm.loginDto = data;
                    _this.$rootScope.$broadcast("rootScope:Login", vm.loginDto);
                    window.location.href = "http://localhost/ngTypeApp/Web/index.html";
                }
                else {
                    alert("Email address or password is invalid, please try again!");
                }
            }, function (response) {
                console.log(response);
            });
        };
        LoginCtrl.prototype.init = function () {
            var vm = this;
            //vm.loginDto.firstName = "Muhammad";
            //vm.loginDto.lastName = "Ahmed";
            //vm.loginDto.userName = "Muhammad";
            //vm.loginDto.password = "ma";
            //vm.loginDto.email = "ma@ma.com";
        };
        return LoginCtrl;
    })();
    LoginModule.LoginCtrl = LoginCtrl;
    LoginCtrl.$inject = ["loginService", "$rootScope"];
    angular.module("app").controller("LoginCtrl", LoginCtrl);
})(LoginModule || (LoginModule = {}));
//# sourceMappingURL=LoginCtrl.js.map