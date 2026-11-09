import { n as colorClass, r as programmes } from "./site-CQYCktQf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Check } from "../_libs/lucide-react.mjs";
import { t as CTA } from "./SiteLayout-BWFi_G4a.mjs";
import { t as Route } from "./programmes._slug-DfktQeoN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes._slug-BEJmM8ps.js
var import_jsx_runtime = require_jsx_runtime();
function Detail() {
	const { slug } = Route.useLoaderData();
	const p = programmes.find((x) => x.slug === slug);
	const c = colorClass[p.color];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/programmes",
					className: "text-sm text-muted-foreground hover:text-foreground",
					children: "← All programmes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-6 text-sm font-semibold uppercase tracking-widest ${c.text}`,
					children: p.grades
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl md:text-6xl",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground",
					children: p.short
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.image,
				alt: p.name,
				width: 1280,
				height: 960,
				className: "aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-4xl",
				children: "What students gain"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: p.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: `h-5 w-5 ${c.text}` }), o]
				}, o))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-12 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-4xl",
				children: "Grade journey"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: p.stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-3xl border border-border bg-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-flex h-10 w-10 items-center justify-center rounded-full ${c.bg} font-bold text-primary-foreground`,
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl",
							children: s.band
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: s.focus
						})
					]
				}, s.band))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Detail as component };
