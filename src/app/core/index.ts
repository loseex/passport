import { Fitter } from "./fitter";
import { UrlQueryBuilder } from "./utils/url-builder";

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
   * Перенаправление пользователя на другой url.
   * @see UrlQueryBuilder
   */
  static redirect(url: string, options: Record<string, string>): void {
    const _u = UrlQueryBuilder.format(url, options);
    return window.location.replace(_u);
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
