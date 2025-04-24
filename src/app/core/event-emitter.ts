import { ICore } from "./core.d";

export class EventEmitter {
  private static instance: EventEmitter;

  private static events: ICore.EventEmitter.EventsList;

  constructor() {
    if (!EventEmitter.instance) {
      EventEmitter.events = {
        [ICore.EventEmitter.Events.MOUNT]: [],
      };
      EventEmitter.instance = this;
    }

    return EventEmitter.instance;
  }

  public on(
    event: ICore.EventEmitter.Events,
    listener: ICore.EventEmitter.EventCallback
  ) {
    EventEmitter.events[event].push({ once: false, listener });
  }

  public once(
    event: ICore.EventEmitter.Events,
    listener: ICore.EventEmitter.EventCallback
  ) {
    EventEmitter.events[event].push({ once: true, listener });
  }

  public emit<T extends any[]>(event: ICore.EventEmitter.Events, ...args: T) {
    EventEmitter.events[event].forEach((action) => {
      if (action.once) {
        this.removeListener(event, action.listener);
      }
      action.listener(...args);
    });
  }

  public removeListener(
    event: ICore.EventEmitter.Events,
    listener: ICore.EventEmitter.EventCallback
  ) {
    EventEmitter.events[event] = EventEmitter.events[event].filter(
      (action) => action.listener !== listener
    );
  }

  public removeAllListeners(event: ICore.EventEmitter.Events) {
    EventEmitter.events[event].length = 0;
  }
}
