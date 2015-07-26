/// <reference path="../../typings/angularjs/angular.d.ts" />
var SalesModule;
(function (SalesModule) {
    var Sales = (function () {
        function Sales() {
        }
        return Sales;
    })();
    SalesModule.Sales = Sales;
    var SalesController = (function () {
        //public static $inject = ["salesService"];
        function SalesController(saleService, $rootScope) {
            //alert("ctrl...")
            this.$rootScope = $rootScope;
            this.sales = new Sales();
            this.saleService = saleService;
            this.init();
        }
        SalesController.prototype.init = function () {
            var vm = this;
            //vm.userName = "abc...";
            vm.$rootScope.$on("rootScope:Login", function (event, data) {
                vm.userName = data.UserName;
            });
            this.getAllSales().then(function (data) {
                vm.salesList = data;
            }, function (response) {
                console.log(response);
            });
        };
        SalesController.prototype.getSalesById = function () {
        };
        SalesController.prototype.getAllSales = function () {
            //call to service..            
            return this.saleService.getAllSales();
        };
        return SalesController;
    })();
    SalesModule.SalesController = SalesController;
    SalesController.$inject = ["salesService", "$rootScope"];
    //angular.module("app").controller("SalesCtrl", SalesController);
    var appInstance = MainModule.App.getAppInstance();
    appInstance.components.controller("SalesCtrl", SalesController);
})(SalesModule || (SalesModule = {}));
//# sourceMappingURL=SalesCtrl.js.map