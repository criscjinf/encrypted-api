import { Module } from '@nestjs/common';
import { EncryptConnectionController } from './controller';
import { EncryptConnectionModule } from 'src/application/encryptConnection/module';

@Module({
  controllers: [EncryptConnectionController],
  imports: [EncryptConnectionModule],
})
export class EncryptConnectionPresentationModule {}
