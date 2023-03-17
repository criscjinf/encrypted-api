export abstract class ISignUpService {
  abstract subscribe(
    user: string,
    password: NodeJS.ArrayBufferView,
    section: string,
  ): Promise<void>;
}
