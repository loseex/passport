import Core from "@/app/core";
import { ICore } from "@/app/core/core.d";
import { EventEmitter } from "@/app/core/event-emitter";

export class HealthAPI {
  private eventEmitter = new EventEmitter();

  /**
   * Проверка работы Backend сервера.
   * @async
   */
  async check(enabled: boolean): Promise<void> {
    if (!enabled) return void 0;
    try {
      const response = await Core.makeCall("/api/v1/status", {
        method: "GET",
      });
      if (!response.ok) throw new Error();
    } catch {
      this.eventEmitter.emit(
        ICore.EventEmitter.Events.MOUNT,
        ICore.Applications.CRASH
      );
    }
  }
}
