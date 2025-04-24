export class UrlQueryBuilder {
  /**
   * Создание url ссылки с возможностью указывания query параметров.
   * @param url Основной url к которому будут добавляться параметры.
   * @param options Параметры в виде объекта.
   *
   * @example
   * URLBuilder.format("https://localhost:8080", { id: '17484842' })
   * // Вернет https://localhost:8080?id=17484842
   */
  static format(url: string, options?: Record<string, string>): string {
    return url + (options ? this.split(options) : "");
  }

  /**
   * Форматирование параметров в ссылке из options.
   * @param options Параметры в виде объекта.
   */
  private static split(options: Record<string, string>): string {
    const params: string[] = Object.keys(options).map(
      (key: string) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`
    );
    return params.length ? "?" + params.join("&") : "";
  }
}
