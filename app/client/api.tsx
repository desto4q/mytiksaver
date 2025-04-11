let getResp = async (url: string) => {
	let form_data = new FormData();
	form_data.append("search", url);
	let resp = await fetch("/api/info", {
		method: "POST",
		body: form_data,
	});
	return resp.json();
};
export { getResp };
