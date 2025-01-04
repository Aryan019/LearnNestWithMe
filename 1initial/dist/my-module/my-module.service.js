"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModuleService = void 0;
const common_1 = require("@nestjs/common");
let MyModuleService = class MyModuleService {
    constructor() {
        this.userDocs = [
            {
                "id": "1a2b3c",
                "name": "Alice Johnson",
                "email": "alice.johnson@example.com",
                "role": "Admin"
            },
            {
                "id": "4d5e6f",
                "name": "Bob Smith",
                "email": "bob.smith@example.com",
                "role": "INTERN"
            },
            {
                "id": "7g8h9i",
                "name": "Charlie Brown",
                "email": "charlie.brown@example.com",
                "role": "Admin"
            },
            {
                "id": "0j1k2l",
                "name": "Diana Prince",
                "email": "diana.prince@example.com",
                "role": "INTERN"
            }
        ];
    }
    getUsers(role) {
        if (role) {
            return this.userDocs.filter(user => user.role === role);
        }
        return this.userDocs;
    }
    getUserWithId(id) {
        const user = this.userDocs.find(user => user.id === id);
        return user;
    }
    createUser(user) {
        const randomId = "a2678bkh";
        const newUser = {
            id: randomId,
            ...user
        };
        this.userDocs.push(newUser);
        return newUser;
    }
    update(id, updatedUser) {
        this.userDocs = this.userDocs.map(user => {
            if (user.id === id) {
                return { ...user };
            }
            return user;
        });
        return this.getUserWithId(id);
    }
    delete(id) {
        const removedUser = this.getUserWithId(id);
        this.userDocs = this.userDocs.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.MyModuleService = MyModuleService;
exports.MyModuleService = MyModuleService = __decorate([
    (0, common_1.Injectable)()
], MyModuleService);
//# sourceMappingURL=my-module.service.js.map