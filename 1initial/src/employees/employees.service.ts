import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

// Calling in the db services 
// Will Inject them now 
import { PrismaClient, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { read } from 'fs';

@Injectable()
export class EmployeesService {

  // Injecting in the dependency in our project 
  constructor (private readonly databaseService :DatabaseService){}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      // createEmployeeDto as it is defined in upper 
      data: createEmployeeDto
    })
  }

  async findAll() {
    // return `This action returns all employees`;
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} employee`;
    return this.databaseService.employee.findUnique({where: {id}})
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    // return `This action updates a #${id} employee`;
    return this.databaseService.employee.update({where: {id}, data: updateEmployeeDto})
  }

  async remove(id: number) {
    // return `This action removes a #${id} employee`;
    return this.databaseService.employee.delete({where: {id}})
  }
}
