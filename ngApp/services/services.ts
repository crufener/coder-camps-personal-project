namespace app.Services {
    export class UserService {
        private userResource;

        public getAll() {
            return this.userResource.query();
        }

        public getUserById(id) {
            return this.userResource.get({_id: id});
        }

        constructor($resource: ng.resource.IResourceService) {
            this.userResource = $resource('/user/:id');
        }
    }
    angular.module('app').service('userService', UserService);
}
