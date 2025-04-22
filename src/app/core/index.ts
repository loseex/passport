import { Fitter } from "./fitter";

class Core {
  private fitter: Fitter = new Fitter();

  /**
   * Метод для отправки http запроса.
   * @returns { Promise<Response> }
   */
  static async makeCall(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    try {
      return await fetch(input, init);
    } catch (e) {
      throw new Error(e as string);
    }
  }

  /**
   * Метод для инициализации ядра веб-приложения.
   * Является стартовой точкой приложения.
   * @static
   */
  static launch(): void {
    const _c = new Core();

    _c.fitter.bootstrap();

    return void 0;
  }
}

export default Core;
