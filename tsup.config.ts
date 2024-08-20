import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["electron"],
  splitting: false,
  sourcemap: false,
  clean: true,
  cjsInterop: true,
  skipNodeModulesBundle: true,
  treeshake: true,
  outDir: "dist-electron",
  external: ["electron"],
  format: ["cjs"],
  bundle: true,
});
