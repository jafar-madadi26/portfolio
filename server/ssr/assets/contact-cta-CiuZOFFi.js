import { D as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
import { n as createLucideIcon, t as profile } from "./portfolio-4GR-gqY_.js";
//#region node_modules/lucide-react/dist/esm/icons/check.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("Check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/copy.js
/**
* @license lucide-react v0.446.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("Copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
//#endregion
//#region components/contact-cta.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ContactCta() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copyEmail = async () => {
		await navigator.clipboard.writeText(profile.email);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20 text-center md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold md:text-4xl",
				children: "Like what you see?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-2xl font-semibold text-blue-600 dark:text-blue-400 md:text-3xl",
				children: "Get in touch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: "Email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${profile.email}`,
					className: "text-lg font-medium hover:text-blue-600",
					children: profile.email
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "icon-button",
					onClick: copyEmail,
					"aria-label": "Copy email address",
					children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: "Connect with me on"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex justify-center gap-5 text-lg font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: profile.github,
					target: "_blank",
					rel: "noreferrer",
					className: "hover:text-blue-600",
					children: "GitHub"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: profile.linkedin,
					target: "_blank",
					rel: "noreferrer",
					className: "hover:text-blue-600",
					children: "LinkedIn"
				})]
			})
		]
	});
}
//#endregion
export { ContactCta as default };
