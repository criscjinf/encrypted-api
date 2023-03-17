import { Body, Controller, Post } from '@nestjs/common';
import { ICredentialsDto } from '../loggin/dto';
import { ISignUpService } from './interface';

@Controller('signup')
export class SingUpController {
  constructor(private readonly signUpService: ISignUpService) {}
  @Post()
  async subscribe(
    @Body() { user, password, section }: ICredentialsDto,
  ): Promise<void> {
    return await this.signUpService.subscribe(user, password, section);
  }
}
