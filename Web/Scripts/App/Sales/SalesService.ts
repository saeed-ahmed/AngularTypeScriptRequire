/// <reference path="../../typings/angularjs/angular.d.ts" />
module SalesModule {
    export class SalesService {
        private salesList: Array<SalesModule.Sales>;
        private $http: ng.IHttpService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            //alert("service..");
            this.$http = $http;
            this.init();
        }
        init() {
           
        }
        getAllSales() {
            //call to service..           
            return this.$http.get("http://localhost/ngTypeApp/Api/Sales/all")
                .then(function (response) {
                    return response.data;
                }, function (error) { return error; });
            //return arrSales;
            
        }
        public static SalesServiceFactory($http: ng.IHttpService, $q: ng.IQService): SalesService {
            return new SalesService($http, $q);
        }
    }
    SalesService.SalesServiceFactory.$inject = ["$http", "$q"];
    //angular.module("app").factory("salesService", SalesService.SalesServiceFactory);
    var appInstance = MainModule.App.getAppInstance();
    appInstance.components.service("salesService", SalesService.SalesServiceFactory);
}