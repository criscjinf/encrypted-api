import { Module } from '@nestjs/common';
import { IEncryptConnectionRepository } from './interface';
import { EncryptConnectionRepository } from './repository';

@Module({
  providers: [
    {
      provide: IEncryptConnectionRepository,
      useClass: EncryptConnectionRepository,
    },
  ],
  exports: [IEncryptConnectionRepository],
})
export class EncryptConnectionRepositoryModule {}
