import { useLoaderData } from "react-router";
import { ttdl } from "ruhend-scraper";

export let loader = async () => {
	let url =
		"https://www.tiktok.com/@shakirah350/video/7490899580670856454?lang=en";
	let resp = await ttdl(url);
    return resp
};
function index() {
	let data = useLoaderData();
	return <div>index</div>;
}

export default index;
