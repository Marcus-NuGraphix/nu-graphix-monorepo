// packages/config/eslint/next.mjs
import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Export a plain array of flat-config entries
const nugraphixNextConfig = [
  ...nextVitals,
  ...nextTs,
  // Shared ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
];

export default nugraphixNextConfig;
