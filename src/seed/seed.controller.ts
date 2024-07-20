import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ValidRoles } from '../auth/interfaces/valid-roles.interface';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth(ValidRoles.superAdmin)
  executedSeed() {
    return this.seedService.runSeed();
  }
}
