import { Module } from '@nestjs/common';
import { EncryptConnectionDomainModule } from 'src/domain/encryptConnection/module';
import { EncryptConnectionRepositoryModule } from 'src/infrastructure/database/encryptConnection/module';
import { IEncryptConnectionService } from './interface';
import { EncryptConnectionService } from './service';

@Module({
  imports: [EncryptConnectionDomainModule, EncryptConnectionRepositoryModule],
  providers: [
    {
      provide: IEncryptConnectionService,
      useClass: EncryptConnectionService,
    },
  ],
})
export class EncryptConnectionModule {}
