import { Module } from '@nestjs/common';
import { EncryptConnectionDomainModule } from 'src/domain/encryptConnection/module';
import { PasswordDomainModule } from 'src/domain/password/module';
import { EncryptConnectionRepositoryModule } from 'src/infrastructure/database/encryptConnection/module';
import { PasswordRepositoryModule } from 'src/infrastructure/database/password/module';
import { SingUpController } from './controller';
import { ISignUpService } from './interface';
import { SignUpService } from './service';

@Module({
  controllers: [SingUpController],
  imports: [
    PasswordDomainModule,
    PasswordRepositoryModule,
    EncryptConnectionDomainModule,
    EncryptConnectionRepositoryModule,
  ],
  providers: [
    {
      provide: ISignUpService,
      useClass: SignUpService,
    },
  ],
})
export class SignUpModule {}
