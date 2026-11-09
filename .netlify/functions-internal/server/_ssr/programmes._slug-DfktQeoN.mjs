import { r as programmes } from "./site-CQYCktQf.mjs";
import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes._slug-DfktQeoN.js
var $$splitComponentImporter = () => import("./programmes._slug-BEJmM8ps.mjs");
var Route = createFileRoute("/programmes/$slug")({
	loader: ({ params }) => {
		const p = programmes.find((x) => x.slug === params.slug);
		if (!p) throw notFound();
		return { slug: p.slug };
	},
	head: ({ loaderData }) => {
		const p = programmes.find((x) => x.slug === loaderData?.slug);
		const title = p ? `${p.name} — Skillnest` : "Programme — Skillnest";
		return { meta: [
			{ title },
			{
				name: "description",
				content: p?.short ?? "Skillnest programme"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: p?.short ?? "Skillnest programme"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
