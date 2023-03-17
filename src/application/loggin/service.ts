import { Injectable } from '@nestjs/common';
import { IEncryptConnectionDomainService } from 'src/domain/encryptConnection/interface';
import { IPasswordDomainService } from 'src/domain/password/interface';
import { IEncryptConnectionRepository } from 'src/infrastructure/database/encryptConnection/interface';
import { IPasswordRepository } from 'src/infrastructure/database/password/interface';
import { ILoginService } from './interface';

@Injectable()
export class LoginService implements ILoginService {
  constructor(
    private readonly passwordDomain: IPasswordDomainService,
    private readonly passwordRepository: IPasswordRepository,
    private readonly encryptConnectionDomain: IEncryptConnectionDomainService,
    private readonly encryptConnectionRepository: IEncryptConnectionRepository,
  ) {}
  async signin(
    user: string,
    password: NodeJS.ArrayBufferView,
    section: string,
  ): Promise<string> {
    const pairKey = await this.encryptConnectionRepository.search(section);
    const passwordDecripted = this.encryptConnectionDomain.decryptMessage(
      pairKey.privateKey,
      password,
    );
    const encryptedCredentials = await this.passwordRepository.search(user);

    return this.passwordDomain.validateUser(
      {
        user,
        password: passwordDecripted,
      },
      encryptedCredentials,
    )
      ? 'Login bem sucedido!'
      : 'Credenciais de acesso inválidas';
  }
}
