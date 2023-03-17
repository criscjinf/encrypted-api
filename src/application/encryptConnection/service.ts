import { Injectable } from '@nestjs/common';
import { IEncryptConnectionDomainService } from 'src/domain/encryptConnection/interface';
import { IEncryptConnectionRepository } from 'src/infrastructure/database/encryptConnection/interface';
import { IEncryptConnectionService } from './interface';

@Injectable()
export class EncryptConnectionService implements IEncryptConnectionService {
  constructor(
    private readonly encryptConnectionDomain: IEncryptConnectionDomainService,
    private readonly encryptConnectionRepository: IEncryptConnectionRepository,
  ) {}
  async generatePublicKey(section: string): Promise<string> {
    const keyPar = this.encryptConnectionDomain.generateKeyPar();
    await this.encryptConnectionRepository.upsert(section, keyPar);
    return keyPar.publicKey;
  }
}
