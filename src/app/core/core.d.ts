import ReactDOM from "react-dom/client";

export namespace ICore {
  export type PureFunction = () => React.ReactNode;
  export type Node = () => HTMLDivElement;
  export type ReactDOM = ReactDOM.Root | null;

  export enum Applications {
    APPLICATION = "application",
    CRASH = "crash",
  }
}
