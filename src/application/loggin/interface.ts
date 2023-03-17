export abstract class ILoginService {
  abstract signin(
    user: string,
    password: NodeJS.ArrayBufferView,
    section: string,
  ): Promise<string>;
}
