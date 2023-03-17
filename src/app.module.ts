import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EncryptConnectionPresentationModule } from './api-presentation/encryptConnection/module';
import { LoginModule } from './application/loggin/module';
import { SignUpModule } from './application/signUp/module';

@Module({
  imports: [SignUpModule, LoginModule, EncryptConnectionPresentationModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(TemasAuthMiddleware).forRoutes('*');
  // }
}
