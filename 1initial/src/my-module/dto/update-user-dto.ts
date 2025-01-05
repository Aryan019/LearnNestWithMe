// extending a dto as a partial type 

// for using in a partial type of the dto
// Including in the dtos

// The below nest js mapped types is not installed by default 
// so we have to install it in 
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user-dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// Using the above thing makes in the dto as same as create user put here in the update-user-dto 
// the fields are not required 