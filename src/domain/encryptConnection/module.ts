import { Module } from '@nestjs/common';
import { IEncryptConnectionDomainService } from './interface';
import { EncryptConnectionDomainService } from './service';

@Module({
  providers: [
    {
      provide: IEncryptConnectionDomainService,
      useClass: EncryptConnectionDomainService,
    },
  ],
  exports: [IEncryptConnectionDomainService],
})
export class EncryptConnectionDomainModule {}
