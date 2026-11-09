import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as GraduationCap, d as ChartColumn, f as CalendarCheck, l as FolderOpen, n as Users, s as Landmark } from "../_libs/lucide-react.mjs";
import { i as PageHero, t as CTA } from "./SiteLayout-BWFi_G4a.mjs";
import { t as hero_default } from "./hero-B1i9E7Iy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-us-DbeltARv.js
var import_jsx_runtime = require_jsx_runtime();
var points = [
	{
		icon: CalendarCheck,
		t: "Steady rhythm",
		d: "Grade plans, review checkpoints and a dependable yearly calendar."
	},
	{
		icon: FolderOpen,
		t: "Student work",
		d: "Projects, showcases and presentations families can see and touch."
	},
	{
		icon: Landmark,
		t: "A clear story",
		d: "A confident answer to “what are we building beyond academics?”"
	},
	{
		icon: GraduationCap,
		t: "Policy aligned",
		d: "Mapped to NEP 2020 and NCF 2023 across all major boards."
	},
	{
		icon: Users,
		t: "Teacher support",
		d: "Training, toolkits and ongoing help for your staff."
	},
	{
		icon: ChartColumn,
		t: "Visible progress",
		d: "Simple reports for leadership and parents each term."
	}
];
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Why us",
			title: "A programme your school can confidently explain.",
			text: "Leaders need more than nice session photos. They need evidence, progression and a coherent story."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3",
			children: points.map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-2xl",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: d
					})
				]
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Classroom session",
				loading: "lazy",
				width: 1600,
				height: 1008,
				className: "aspect-[16/7] w-full rounded-3xl object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { WhyUs as component };
