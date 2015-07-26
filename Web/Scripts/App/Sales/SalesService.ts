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
            //console.log("dddd");
            //this.salesList = new Array<SalesModule.Sales>();
        }
        getAllSales() {
            //call to service..
            //var arrSales: Array<SalesModule.Sales> = [
            //    { Summary: "ePOS POS", Type: "POS", Value: 10, Site: "Head Office", Status: "Paid" },
            //    { Summary: "CS25 Booking - 1451", Type: "Booking", Value: 100, Site: "Head Office", Status: "Paid" },
            //    { Summary: "CS26 Booking - 1453", Type: "Booking", Value: 200, Site: "Head Office", Status: "Paid" },
            //    { Summary: "ePOS POS", Type: "POS", Value: 20, Site: "Head Office", Status: "Unpaid" },
            //    { Summary: "ePOS POS", Type: "POS", Value: 120, Site: "Head Office", Status: "Unpaid" },
            //];
            //return arrSales;
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