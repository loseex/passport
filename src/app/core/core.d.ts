import ReactDOM from "react-dom/client";

export namespace ICore {
  export type PureFunction = () => React.ReactNode;
  export type Node = () => HTMLDivElement;
  export type ReactDOM = ReactDOM.Root | null;

  export enum Applications {
    APPLICATION = "application",
    CRASH = "crash",
  }

  export namespace EventEmitter {
    export type EventCallback = (...args: any[]) => void;

    export type IEvent = {
      once: boolean;
      listener: EventCallback;
    };

    export enum Events {
      MOUNT = "fitter::mount",
    }

    export interface EventsList {
      [Events.MOUNT]: IEvent[];
    }
  }
}
