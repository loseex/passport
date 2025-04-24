import ReactDOM from "react-dom/client";
import { ICore } from "./core.d";
import { loadApplication, loadNotAvailable } from "./utils/__codegen__module";
import { EventEmitter } from "./event-emitter";
import { HealthAPI } from "./api/health";

export class Fitter {
  private node: ICore.Node = () =>
    document.getElementById("root") as HTMLDivElement;
  private react_dom: ICore.ReactDOM = null;

  private eventEmitter: EventEmitter = new EventEmitter();

  private healthAPI = new HealthAPI();

  private applications: Record<
    ICore.Applications,
    Promise<ICore.PureFunction>
  > = {
    [ICore.Applications.APPLICATION]: loadApplication(),
    [ICore.Applications.CRASH]: loadNotAvailable(),
  };

  /**
   * Монтирует компонент по path в указанный DOM-узел.
   * @async
   */
  lazyLoader(path: ICore.Applications): void {
    (async () => {
      const pure = await this.applications[path];
      try {
        this.mount(pure);
      } catch (e) {
        const title = "[ReactLazyModuleLoader]::trace::";
        console.log(title, pure);
        throw new Error(title + e);
      }
    })();
  }

  /**
   * Монтирует компонент приложения в указанный DOM-узел.
   * @public
   */
  mount(module: ICore.PureFunction): void {
    if (this.react_dom !== null) this.react_dom.render(module());
    else console.warn("Core::Fitter::ReactDOM is not loaded.");
  }

  private subscribe() {
    this.eventEmitter.on(ICore.EventEmitter.Events.MOUNT, (key) =>
      this.lazyLoader(key)
    );
  }

  bootstrap(): void {
    this.react_dom = ReactDOM.createRoot(this.node());
    this.subscribe();

    this.healthAPI.check(false);

    this.eventEmitter.emit(
      ICore.EventEmitter.Events.MOUNT,
      ICore.Applications.APPLICATION
    );

    return void 0;
  }
}
