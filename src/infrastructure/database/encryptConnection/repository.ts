import { IKeyPar } from 'src/domain/encryptConnection/interface';
import { Repository } from '../repository';
import { IEncryptConnectionRepository } from './interface';

export class EncryptConnectionRepository
  extends Repository<IKeyPar>
  implements IEncryptConnectionRepository {}
