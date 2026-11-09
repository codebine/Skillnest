import { n as colorClass } from "./site-CQYCktQf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProgrammeCard-BpZFdK3s.js
var import_jsx_runtime = require_jsx_runtime();
function ProgrammeCard({ p, index }) {
	const c = colorClass[p.color];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/programmes/$slug",
		params: { slug: p.slug },
		className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.image,
				alt: p.name,
				loading: "lazy",
				width: 1280,
				height: 960,
				className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `absolute left-4 top-4 rounded-full ${c.bg} px-3 py-1 text-xs font-bold text-primary-foreground`,
				children: ["0", index + 1]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-muted-foreground",
					children: p.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: c.text,
						children: p.grades
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: ["View programme ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProgrammeCard as t };
