export interface IKeyPar {
  privateKey: string;
  publicKey: string;
}

export abstract class IEncryptConnectionDomainService {
  abstract generateKeyPar(): IKeyPar;
  abstract decryptMessage(
    privateKey: string,
    message: NodeJS.ArrayBufferView,
  ): string;
}
