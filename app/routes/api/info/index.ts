import { ttdl } from "ruhend-scraper";
import type { Route } from "./+types";

export let loader = async ({ request }: { request: Request }) => {
	let data = await request.formData();
	let search = data.get("search");
	return Response.json({ hello: "world" });
};
export let action = async (res: Route.ActionArgs) => {
	let form = await res.request.formData();
	let search = form.get("search") as string;
	try {
		let resp = await ttdl(search);

		return Response.json(resp, {
			status: 200,
		});
	} catch (err) {
		return Response.json(
			{
				message: "error",
			},
			{
				status: 500,
			}
		);
	}
};
