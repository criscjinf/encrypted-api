import { Body, Controller, Post } from '@nestjs/common';
import { IEncryptConnectionService } from '../../application/encryptConnection/interface';

@Controller('encrypt-connection')
export class EncryptConnectionController {
  constructor(
    private readonly encryptConnectionService: IEncryptConnectionService,
  ) {}
  @Post()
  async encrypt(@Body() section: string): Promise<string> {
    return this.encryptConnectionService.generatePublicKey(section);
  }
}
