namespace app.Controllers {
    export class HomeController {
        public users;

        constructor(userResource: app.Services.UserService) {
            this.users = userResource.getAll();
        }
    }

    export class UserController {
        public user;

        constructor(
            $stateParams: ng.ui.IStateParamsService,
            userResource: app.Services.UserService
        ) {
            this.user = userResource.getUserById($stateParams['id']);
        }
    }
}
