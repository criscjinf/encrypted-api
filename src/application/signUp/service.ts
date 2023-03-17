import { Injectable } from '@nestjs/common';
import { IEncryptConnectionDomainService } from 'src/domain/encryptConnection/interface';
import { IPasswordDomainService } from 'src/domain/password/interface';
import { IEncryptConnectionRepository } from 'src/infrastructure/database/encryptConnection/interface';
import { IPasswordRepository } from 'src/infrastructure/database/password/interface';
import { ISignUpService } from './interface';

@Injectable()
export class SignUpService implements ISignUpService {
  constructor(
    private readonly passwordDomain: IPasswordDomainService,
    private readonly passwordRepository: IPasswordRepository,
    private readonly encryptConnectionDomain: IEncryptConnectionDomainService,
    private readonly encryptConnectionRepository: IEncryptConnectionRepository,
  ) {}
  async subscribe(user, password, section): Promise<void> {
    console.log(this.encryptConnectionRepository);
    const pairKey = await this.encryptConnectionRepository.search(section);
    console.log(pairKey);
    const passwordDecripted = this.encryptConnectionDomain.decryptMessage(
      pairKey.privateKey,
      password,
    );
    console.log(passwordDecripted);
    const encryptedCredentials = this.passwordDomain.encryptCredentials({
      user,
      password: passwordDecripted,
    });
    await this.passwordRepository.upsert(user, encryptedCredentials);
  }
}
