import { r as programmes } from "./site-CQYCktQf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as PageHero, t as CTA } from "./SiteLayout-BWFi_G4a.mjs";
import { t as ProgrammeCard } from "./ProgrammeCard-BpZFdK3s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes.index-_7cAYsUf.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Programmes",
		title: "Three pathways built for real classrooms.",
		text: "Pick one or combine all three. Every programme comes with lesson plans, student projects and progress reviews."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3",
		children: programmes.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammeCard, {
			p,
			index: i
		}, p.slug))
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
] });
//#endregion
export { SplitComponent as component };
