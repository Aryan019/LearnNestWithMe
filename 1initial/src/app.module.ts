import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyModuleModule } from './my-module/my-module.module';

@Module({
  imports: [MyModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
