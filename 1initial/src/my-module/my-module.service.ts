import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

// Importing in the exceptions for the error handling 
import { NotFoundException } from '@nestjs/common';

// This are the providers class and the service file in nest js 
@Injectable()
export class MyModuleService {

    // Simple database imitation behavior 
    private userDocs = [
        
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
               
          
    ]

    // Getting in all the users based on the role and the number of users

    // If like role is not provided then it will return all the users
    // but if we put in the random role which is actually not in there 
    // then it is returning out an empty array npt any users 


    // so handling that with the erorr handling exceptions and all 
    getUsers(role?:"Admin" | "INTERN"){

        if(role){
        const rolesArray =  this.userDocs.filter(user => user.role === role)

        if(!rolesArray.length){
            throw new NotFoundException(`No users with role ${role} found`)
        }
        return rolesArray
        
        }

      

        return this.userDocs
    }


    // Finding out the users with the specific id entered replicating in the db 

    getUserWithId(id:string){
        const user = this.userDocs.find(user=> user.id===id)

        if(!user) throw new NotFoundException(`User with id ${id} not found`)
        return user
    }

    // for this request like we will receive in different params so typechecking them 
    // and putting in a validation on them 
    createUser(user:CreateUserDto){
        const randomId = "a2678bkh"

        // New randomId and then the simple info of the user that we have received in 
        const newUser = {
            id : randomId,
            ...user
        }

        this.userDocs.push(newUser)

        return newUser

    }

    update(id: string, updatedUser: UpdateUserDto) {
        this.userDocs = this.userDocs.map(user => { 
            if (user.id === id) {
                return { ...user}
            }
            return user
        })

        return this.getUserWithId(id)
    }

    delete(id: string) {
        const removedUser = this.getUserWithId(id)

        // Updating in the existing array of the userDocs
        this.userDocs = this.userDocs.filter(user => user.id !== id)


        // returning back the removedUser
        return removedUser
    }
      





}
