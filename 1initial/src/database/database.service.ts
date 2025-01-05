import { Injectable, OnModuleInit} from '@nestjs/common';

// Importing in the prisma client 
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {

async onModuleInit() {
    // awaiting in the connection to the prisma 
        await this.$connect();
    }
}
