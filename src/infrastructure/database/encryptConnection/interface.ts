import { IKeyPar } from 'src/domain/encryptConnection/interface';

export abstract class IEncryptConnectionRepository {
  abstract upsert(key: string, value: IKeyPar): Promise<void>;
  abstract search(key: string): Promise<IKeyPar>;
}
