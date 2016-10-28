var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(userResource) {
                this.users = userResource.getAll();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var UserController = (function () {
            function UserController($stateParams, userResource) {
                this.user = userResource.getUserById($stateParams['id']);
            }
            return UserController;
        }());
        Controllers.UserController = UserController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
