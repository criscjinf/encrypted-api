import { Module } from '@nestjs/common';
import { EncryptConnectionDomainModule } from 'src/domain/encryptConnection/module';
import { PasswordDomainModule } from 'src/domain/password/module';
import { EncryptConnectionRepositoryModule } from 'src/infrastructure/database/encryptConnection/module';
import { PasswordRepositoryModule } from 'src/infrastructure/database/password/module';
import { LoginController } from './controller';
import { ILoginService } from './interface';
import { LoginService } from './service';

@Module({
  controllers: [LoginController],
  imports: [
    PasswordDomainModule,
    PasswordRepositoryModule,
    EncryptConnectionDomainModule,
    EncryptConnectionRepositoryModule,
  ],
  providers: [
    {
      provide: ILoginService,
      useClass: LoginService,
    },
  ],
})
export class LoginModule {}
