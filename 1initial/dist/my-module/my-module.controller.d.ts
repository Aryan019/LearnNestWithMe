import { MyModuleService } from './my-module.service';
import { CreateUserDto } from './dto/create-user-dto';
export declare class MyModuleController {
    private readonly myModuleService;
    constructor(myModuleService: MyModuleService);
    getUsers(role?: 'INTERN' | 'ENGINEER'): any;
    getUserWithId(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    findInAllInterns(): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    createUser(user: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "Admin";
        id: string;
    };
    updateUserInfo(id: string, updatedUser: {
        name: string;
        email: string;
        role: 'INTERN' | 'Admin';
    }): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    deletUserInNest(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}
