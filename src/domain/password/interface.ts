export interface IEncrypedCredentials {
  user: string;
  hash: string;
  salt: string;
}

export interface ICredentials {
  user: string;
  password: string;
}

export abstract class IPasswordDomainService {
  abstract encryptCredentials(credentials: ICredentials): IEncrypedCredentials;
  abstract validateUser(
    credentials: ICredentials,
    encryptedCredentials: IEncrypedCredentials,
  ): boolean;
}
