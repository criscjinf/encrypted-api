import { generateKeyPairSync, privateDecrypt } from 'crypto';
import { IEncryptConnectionDomainService, IKeyPar } from './interface';

export class EncryptConnectionDomainService
  implements IEncryptConnectionDomainService
{
  generateKeyPar(): IKeyPar {
    const { privateKey, publicKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048,

      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },

      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });
    return { privateKey, publicKey };
  }

  decryptMessage(privateKey: string, message: NodeJS.ArrayBufferView): string {
    return privateDecrypt(privateKey, message).toString('utf-8');
  }
}
