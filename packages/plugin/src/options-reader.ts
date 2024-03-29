import { Options, OptionsReader } from "typedoc";
import { THEME_NAME } from "./constants";

export class TypedocRendererThemeOptionsReader implements OptionsReader {
  name = "typedoc-renderer-theme-reader";
  readonly order = 1000;
  readonly supportsPackages = false;

  read(container: Options) {
    if (container.getValue("theme") === "default") {
      container.setValue("theme", THEME_NAME);
    }
  }
}
