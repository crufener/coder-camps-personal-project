
namespace app {
    angular.module('app', [
        'ui-router',
        'ngMaterial',
        'ngResource',
        'ngMessages'
    ]).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: app.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('user', {
                url: '/user/:id',
                templateUrl: '/ngApp/views/user.html',
                controller: app.Controllers.UserController,
                controllerAs: 'controller'
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
}
