import { IEncrypedCredentials } from 'src/domain/password/interface';

export abstract class IPasswordRepository {
  abstract upsert(key: string, value: IEncrypedCredentials): Promise<void>;
  abstract search(key: string): Promise<IEncrypedCredentials>;
}
