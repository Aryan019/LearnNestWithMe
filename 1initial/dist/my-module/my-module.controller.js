"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModuleController = void 0;
const common_1 = require("@nestjs/common");
const my_module_service_1 = require("./my-module.service");
let MyModuleController = class MyModuleController {
    constructor(myModuleService) {
        this.myModuleService = myModuleService;
    }
    getUsers(role) {
        return this.getUsers(role);
    }
    getUserWithId(id) {
        return this.myModuleService.getUserWithId(id);
    }
    findInAllInterns() {
        return this.myModuleService.getUsers('INTERN');
    }
    createUser(user) {
        return this.myModuleService.createUser(user);
    }
    updateUserInfo(id, updatedUser) {
        return this.myModuleService.update(id, updatedUser);
    }
    deletUserInNest(id) {
        return this.myModuleService.delete(id);
    }
};
exports.MyModuleController = MyModuleController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyModuleController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyModuleController.prototype, "getUserWithId", null);
__decorate([
    (0, common_1.Get)("interns"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyModuleController.prototype, "findInAllInterns", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyModuleController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MyModuleController.prototype, "updateUserInfo", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyModuleController.prototype, "deletUserInNest", null);
exports.MyModuleController = MyModuleController = __decorate([
    (0, common_1.Controller)('my-module'),
    __metadata("design:paramtypes", [my_module_service_1.MyModuleService])
], MyModuleController);
//# sourceMappingURL=my-module.controller.js.map