// /// <reference path="scripts/typings/angularjs/angular.d.ts" />


module MainModule {



    angular.module("app", ["ui.router"]);    
    angular.module("app").config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", Config]);

    
    function Config($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        $urlRouterProvider.otherwise("/Hrms");
        $stateProvider
            .state("Hrms", {
                url: "/Hrms",
                views: {
                    "HeaderView": { templateUrl: "Header.html" },
                    "MainView": { templateUrl: "Scripts/App/Hrms/Hrms.html" }
                }
            })
            .state("Marketing", {
                url: "/Marketing",
                views: {
                    "HeaderView": { templateUrl: "Header.html" },
                    "MainView": { templateUrl: "Scripts/App/Marketing/Marketing.html" }
                }
            })
            .state("Sales", {
                url: "/Sales",
                controller: "SalesCtrl,LoginCtrl",
                views: {
                    "HeaderView": { templateUrl: "Header.html" },
                    "MainView": { templateUrl: "Scripts/App/Sales/Sales.html" }
                }
            })
            .state("Logout", {
                url: "/Logout",
                controller:"LoginCtrl",
                views: {
                    "HeaderView": { template: "<div></div>" },
                    "MainView": { templateUrl: "Scripts/App/Login/Login.html" }
                }
            })
        
    }

    angular.element(document).ready(function () {
        angular.bootstrap(document, ["app","ui.router"]);
    });
}