import { IEncrypedCredentials } from 'src/domain/password/interface';
import { Repository } from '../repository';
import { IPasswordRepository } from './interface';

export class PasswordRepository
  extends Repository<IEncrypedCredentials>
  implements IPasswordRepository {}
