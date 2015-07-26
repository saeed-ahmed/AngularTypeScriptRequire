/// <reference path="../../typings/angularjs/angular.d.ts" />
module SalesModule {
    export class Sales {
        public Summary: string;
        public Type: string;
        public Value: number;
        public Site: string;
        public Status: string;
    }

    export class SalesController {
        private sales: Sales;
        private userName: string;
        private salesList: Array<Sales>;
        private $rootScope: ng.IRootScopeService;
        //private salesList: any;
        private saleService: SalesModule.SalesService;
        //public static $inject = ["salesService"];

        constructor(saleService: SalesModule.SalesService, $rootScope: ng.IRootScopeService) {
            //alert("ctrl...")
            this.$rootScope= $rootScope;
            
            this.sales = new Sales();
            this.saleService = saleService;
            this.init();
        }
        init() {
            var vm = this;
            //vm.userName = "abc...";
            vm.$rootScope.$on("rootScope:Login", (event, data) => {
                vm.userName = data.UserName;
            });

            this.getAllSales().then((data) => {
                vm.salesList = data;                
            },
                (response) => {
                    console.log(response);
                });
        }

        getSalesById() {

        }
        getAllSales() {
            //call to service..            
            return this.saleService.getAllSales();
        }        
    }
    SalesController.$inject = ["salesService", "$rootScope"];
    //angular.module("app").controller("SalesCtrl", SalesController);
    var appInstance = MainModule.App.getAppInstance();
    appInstance.components.controller("SalesCtrl", SalesController);

} 