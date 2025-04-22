import { ICore } from "../core.d";

export async function loadApplication() {
  return await Object.values(
    import.meta.glob<ICore.PureFunction>(
      /* @vite-ignore */ "/src/app/core/modules/app.application.tsx",
      {
        import: "default",
      }
    )
  )[0]();
}

export async function loadNotAvailable() {
  return await Object.values(
    import.meta.glob<ICore.PureFunction>(
      /* @vite-ignore */ "/src/app/core/modules/not-available.application.tsx",
      {
        import: "default",
      }
    )
  )[0]();
}
