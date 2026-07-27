import { t as require_jsx_runtime } from "../index.js";
import { t as J } from "./dist-BM2nt3fN.js";
//#region components/theme-provider.tsx
var import_jsx_runtime = require_jsx_runtime();
function ThemeProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(J, {
		attribute: "class",
		defaultTheme: "system",
		enableSystem: true,
		disableTransitionOnChange: true,
		children
	});
}
//#endregion
export { ThemeProvider };
