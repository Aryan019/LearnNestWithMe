import { Test, TestingModule } from '@nestjs/testing';
import { MyModuleController } from './my-module.controller';

describe('MyModuleController', () => {
  let controller: MyModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyModuleController],
    }).compile();

    controller = module.get<MyModuleController>(MyModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
