import { defineConfig } from "eslint/config";
import nugraphixNextConfig from "@nugraphix/config/eslint/next.mjs";

export default defineConfig([
  ...nugraphixNextConfig,
  // You can add app-specific overrides here later, e.g.:
  // {
  //   files: ["src/app/(admin)/**"],
  //   rules: {
  //     "@typescript-eslint/no-explicit-any": "off",
  //   },
  // },
]);
