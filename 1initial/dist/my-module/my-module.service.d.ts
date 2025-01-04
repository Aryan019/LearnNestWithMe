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
    createUser(user: {
        name: string;
        email: string;
        role: 'INTERN' | 'Admin';
    }): {
        name: string;
        email: string;
        role: "INTERN" | "Admin";
        id: string;
    };
    update(id: string, updatedUser: {
        name: string;
        email: string;
        role: 'INTERN' | 'Admin';
    }): {
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
