import { Module } from '@nestjs/common';
import { IPasswordRepository } from './interface';
import { PasswordRepository } from './service';

@Module({
  providers: [
    {
      provide: IPasswordRepository,
      useClass: PasswordRepository,
    },
  ],
  exports: [IPasswordRepository],
})
export class PasswordRepositoryModule {}
