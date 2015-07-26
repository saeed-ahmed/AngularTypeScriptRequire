/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

module LoginModule {

    export class Login {
        public userName: string;
        public email: string;
        public password: string;
        public firstName: string;
        public lastName: string;
    }

    export class LoginCtrl {
        private loginDto: Login;
        private $rootScope: ng.IRootScopeService;
        private loginService: LoginModule.LoginService;
        //private loginService:Log
        constructor(loginService: LoginModule.LoginService, $rootScope: ng.IRootScopeService) {     
            //alert("login...")       
            this.$rootScope = $rootScope;
            this.loginDto = new Login();
            this.loginService = loginService;
            this.init();
        }
        public authenticate() {
            var vm = this;
            this.loginService.authenticateUser(this.loginDto).
                then((data) => {
                    if (data != null) {
                        //debugger;                        
                        vm.loginDto = data;
                        this.$rootScope.$broadcast("rootScope:Login", vm.loginDto);
                        window.location.href = "http://localhost/ngTypeApp/Web/index.html";
                    }
                    else {
                        alert("Email address or password is invalid, please try again!");
                    }
                }, (response) => { console.log(response) });            
        }

        private init(): void {
            var vm = this;
            //vm.loginDto.firstName = "Muhammad";
            //vm.loginDto.lastName = "Ahmed";
            //vm.loginDto.userName = "Muhammad";
            //vm.loginDto.password = "ma";
            //vm.loginDto.email = "ma@ma.com";
        }

    }
    LoginCtrl.$inject = ["loginService","$rootScope"];
    angular.module("app").controller("LoginCtrl", LoginCtrl);
} 