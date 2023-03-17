export abstract class IEncryptConnectionService {
  abstract generatePublicKey(section: string): Promise<string>;
}
