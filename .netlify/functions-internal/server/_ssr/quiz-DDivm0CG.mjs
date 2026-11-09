import { r as __toESM } from "../_runtime.mjs";
import { i as quizQuestions } from "./site-CQYCktQf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-DDivm0CG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function resultBand(score, total) {
	const pct = score / (total * 2);
	if (pct >= .75) return "Future leader";
	if (pct >= .4) return "Builder";
	return "Explorer";
}
function Quiz() {
	const [name, setName] = (0, import_react.useState)("");
	const [started, setStarted] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const total = quizQuestions.length;
	const current = quizQuestions[step] ?? quizQuestions[0];
	const done = step >= total;
	const input = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x flex min-h-[70vh] items-center justify-center py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-xl md:p-10",
			children: !started ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setStarted(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-accent",
						children: "Student check"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl md:text-4xl",
						children: "Enter a name and begin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Student name",
						className: `${input} mt-6`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "number",
						min: 6,
						max: 18,
						placeholder: "Age",
						className: `${input} mt-3`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-6 w-full rounded-full bg-primary py-3.5 font-semibold text-primary-foreground",
						children: "Start the quiz"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: [total, " questions · about 3 minutes · instant result"]
					})
				]
			}) : done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-accent",
						children: "Result"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 text-4xl md:text-5xl",
						children: [
							name,
							", you're a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: resultBand(score, total)
							}),
							"!"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted-foreground",
						children: [
							"Score: ",
							score,
							" / ",
							total * 2
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setStep(0);
							setScore(0);
						},
						className: "mt-8 rounded-full border border-foreground/20 px-6 py-3 font-semibold hover:bg-muted",
						children: "Try again"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Question ",
						step + 1,
						" / ",
						total
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.topic })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-accent transition-all",
						style: { width: `${step / total * 100}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-2xl md:text-3xl",
					children: current.q
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-3",
					children: current.options.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setScore(score + i);
							setStep(step + 1);
						},
						className: "flex w-full items-center gap-4 rounded-2xl border border-border p-4 text-left hover:border-accent hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold",
							children: "ABC"[i]
						}), o]
					}, o))
				})
			] })
		})
	});
}
//#endregion
export { Quiz as component, resultBand };
