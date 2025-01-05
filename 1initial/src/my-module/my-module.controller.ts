import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { MyModuleService } from './my-module.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('my-module') // It makes it localhost:/my-module It is doing in that 

export class MyModuleController {

    // Here comes in the constructor 
    // It creates in the instance of the user service 
    constructor(private readonly myModuleService:MyModuleService){

    }

    // The above dependency injection can be replicated and understood by 
    // const myModuleService = new MyModuleService()
    // The above thing nest does automatically for you  

    
    // Trying in to develop a rest api here 

    // What we are trying to do 
    // we will have several requests route handlers and controllers here 
    // like /users and /users/:id like that and a patch req too there 
    // delete/:id identifying and deleting in the users 

    // Below is the get decorator here to hit in the get request 
    // The get request decorator is below specified 


    // Handling in the query parameter for here too 
    @Get() 
    getUsers(@Query('role') role?: 'INTERN' | 'ENGINEER'){
        // Returning in an empty array for now 
        return this.getUsers(role)
    }

    // The below decorator will fetch in the user id eventually with no issues 
    @Get(":id") // The route from here becomes in the localhost:3000/my-module/:id
    // The above specified will be the path for the request 


    getUserWithId(@Param('id')id: string){
        // Like to fetch in a param 
        // from the requests
        // define in the get route 
        // and in the function below 
        // take out the param with the help of the param decorator and specify in the id and the type of param you are expecting in

        return this.myModuleService.getUserWithId(id)


    }

    @Get("interns")
    findInAllInterns(){
        return this.myModuleService.getUsers('INTERN')
    }

    // here we are taking in the body and storing it in a variable called user and type checking that
    // the user body must be in this format before giving it to the service 

    // and in service too we are checking in the format of the user once and then creating in a useer 
    @Post()
    createUser(@Body() user : CreateUserDto){
        return this.myModuleService.createUser(user)
    }

// The logic will be handled in the service file 
// Creating in the patch route 

        @Patch(":id")
        updateUserInfo(
        @Param('id') id: string,
        @Body() updatedUser: { name: string; email: string; role: 'INTERN' | 'Admin' }
        ) {
        return this.myModuleService.update(id, updatedUser);
        }

    @Delete(":id")
    deletUserInNest(@Param('id') id:string){
        return this.myModuleService.delete(id)
    } 

}
