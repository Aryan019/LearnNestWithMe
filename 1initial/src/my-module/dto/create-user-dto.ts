// Applying in the validations to our dtos 
import {IsEmail, IsEnum, IsNotEmpty,IsString} from 'class-validator'

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsEmail()
    email: string;


    // Thats how we pass in a message alongside with the validation
    @IsEnum(['INTERN', 'Admin'],{
        message: 'Role must be either "INTERN" or "Admin"',
    })
    role : "INTERN" | "Admin";
     


}



