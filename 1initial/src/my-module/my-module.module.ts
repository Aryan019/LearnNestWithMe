import { Module } from '@nestjs/common';
import { MyModuleController } from './my-module.controller';
import { MyModuleService } from './my-module.service';

@Module({
  controllers: [MyModuleController],
  providers: [MyModuleService]
})
export class MyModuleModule {

}
