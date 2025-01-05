import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
export declare class MyModuleService {
    private userDocs;
    getUsers(role?: "Admin" | "INTERN"): {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    getUserWithId(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    createUser(user: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "Admin";
        id: string;
    };
    update(id: string, updatedUser: UpdateUserDto): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    delete(id: string): {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}
