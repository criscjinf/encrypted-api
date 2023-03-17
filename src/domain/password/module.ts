import { Module } from '@nestjs/common';
import { IPasswordDomainService } from './interface';
import { PasswordDomainService } from './service';

@Module({
  providers: [
    {
      provide: IPasswordDomainService,
      useClass: PasswordDomainService,
    },
  ],
  exports: [IPasswordDomainService],
})
export class PasswordDomainModule {}
