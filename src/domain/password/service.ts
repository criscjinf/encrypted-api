import { randomBytes, scryptSync } from 'crypto';
import {
  ICredentials,
  IEncrypedCredentials,
  IPasswordDomainService,
} from './interface';

export class PasswordDomainService implements IPasswordDomainService {
  private generateHash(password: string, salt: string): string {
    return scryptSync(password, salt, 64).toString('hex');
  }
  validateUser(
    credentials: ICredentials,
    encryptedCredentials: IEncrypedCredentials,
  ): boolean {
    return (
      encryptedCredentials &&
      credentials &&
      encryptedCredentials.hash ===
        this.generateHash(credentials.password, encryptedCredentials.salt)
    );
  }

  encryptCredentials({ user, password }: ICredentials): IEncrypedCredentials {
    const salt = randomBytes(16).toString();
    return {
      user: user,
      hash: this.generateHash(password, salt),
      salt,
    };
  }
}
