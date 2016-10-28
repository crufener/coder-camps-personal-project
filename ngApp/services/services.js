var app;
(function (app) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.userResource = $resource('/user/:id');
            }
            UserService.prototype.getAll = function () {
                return this.userResource.query();
            };
            UserService.prototype.getUserById = function (id) {
                return this.userResource.get({ _id: id });
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('app').service('userService', UserService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
