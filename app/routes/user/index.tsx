import { useEffect } from "react";
import type { Route } from "./+types";
import * as dl from "ruhend-scraper";
async function TEST_TIKTOK_DL() {
	let link = "https://www.tiktok.com/@shakirah350/video/7491665525186055429";
	let resp = await dl.ttdl(link);
	return resp;
}

export let loader = async () => {
	let resp = await TEST_TIKTOK_DL();
	return resp;
};

function index({ loaderData }: Route.ComponentProps) {
	let data = loaderData;
	useEffect(() => {
		
	}, []);
	return (
		<div>
			loaded {}
			{/* index <Suspense>{JSON.stringify(data)}</Suspense> */}
		</div>
	);
}

export default index;
