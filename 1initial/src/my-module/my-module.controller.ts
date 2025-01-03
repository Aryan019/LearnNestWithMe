import { Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('my-module') // It makes it localhost:/my-module It is doing in that 
export class MyModuleController {


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
        return []
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

        return [id]


    }

    @Get("interns")
    findInAllInterns(){
        return []
    }

    @Post()
    createUser(@Body() user: {}){
        return user 
    }

// The logic will be handled in the service file 
// Creating in the patch route 

    @Patch(":id")
    updateUserInfo(@Param('id') id:string,@Body() userUpdate:{}){
         return {id, ...userUpdate}
    }

    @Delete(":id")
    deletUserInNest(@Param('id') id:string){
        return [id]
    }

}
