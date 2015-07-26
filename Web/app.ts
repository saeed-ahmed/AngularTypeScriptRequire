/// <reference path="scripts/typings/requirejs/require.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />


module MainModule {

    export class Components {
        controller: any;
        service: any;
    }

    export class App {
        private static _instance:App;
        components: MainModule.Components;        

        constructor() {            
            if (App._instance) {
                throw new Error("Error: Creating Application object.");
            }
            App._instance = this;   
            App._instance.components = new MainModule.Components();

        }
        static getAppInstance() {
            if (this._instance == null) {                
                this._instance = new App();
            }
            return this._instance;
        }
        createMainModule(angular: ng.IAngularStatic) {
            angular.module("app", ["ui.router"]);
            angular.module("app").config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide",this.config]);
        }

        config($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
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
                    views: {
                        "HeaderView": { templateUrl: "Header.html" },
                        "MainView": { templateUrl: "Scripts/App/Sales/Sales.html" }
                    },
                    resolve: {
                        load: ['$q', '$rootScope', function ($q, $rootScope) {
                            return LoadDynamicContents($q, $rootScope, ['Scripts/App/Sales/SalesCtrl', 'Scripts/App/Sales/SalesService']);
                        }]
                    }
                })
                .state("Logout", {
                    url: "/Logout",
                    controller: "LoginCtrl",
                    views: {
                        "HeaderView": { template: "<div></div>" },
                        "MainView": { templateUrl: "Scripts/App/Login/Login.html" }
                    }
                })

            appInstance.components.controller = $controllerProvider.register;
            appInstance.components.service = $provide.service;
        }

    }

    function LoadDynamicContents($q, $rootScope,arrFiles) {
        var deferred = $q.defer();
        require(arrFiles, function () {
                $rootScope.$apply(function () {
                    deferred.resolve();
                });
            });
        return deferred.promise;
     }

    var appInstance: MainModule.App;
    appInstance = MainModule.App.getAppInstance(); 

    appInstance.createMainModule(angular);

    angular.element(document).ready(function () {
        //Bootstrapping angular application
        angular.bootstrap(document, ["app", "ui.router"]);
    });
}