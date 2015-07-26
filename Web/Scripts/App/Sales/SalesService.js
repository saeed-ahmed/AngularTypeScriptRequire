/// <reference path="../../typings/angularjs/angular.d.ts" />
var SalesModule;
(function (SalesModule) {
    var SalesService = (function () {
        function SalesService($http, $q) {
            //alert("service..");
            this.$http = $http;
            this.init();
        }
        SalesService.prototype.init = function () {
        };
        SalesService.prototype.getAllSales = function () {
            //call to service..           
            return this.$http.get("http://localhost/ngTypeApp/Api/Sales/all").then(function (response) {
                return response.data;
            }, function (error) {
                return error;
            });
            //return arrSales;
        };
        SalesService.SalesServiceFactory = function ($http, $q) {
            return new SalesService($http, $q);
        };
        return SalesService;
    })();
    SalesModule.SalesService = SalesService;
    SalesService.SalesServiceFactory.$inject = ["$http", "$q"];
    //angular.module("app").factory("salesService", SalesService.SalesServiceFactory);
    var appInstance = MainModule.App.getAppInstance();
    appInstance.components.service("salesService", SalesService.SalesServiceFactory);
})(SalesModule || (SalesModule = {}));
//# sourceMappingURL=SalesService.js.map