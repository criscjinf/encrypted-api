import { Body, Controller, Post } from '@nestjs/common';
import { ICredentialsDto } from './dto';
import { ILoginService } from './interface';

@Controller('signin')
export class LoginController {
  constructor(private readonly loginService: ILoginService) {}
  @Post()
  async signin(
    @Body() { user, password, section }: ICredentialsDto,
  ): Promise<string> {
    return await this.loginService.signin(user, password, section);
  }
}
