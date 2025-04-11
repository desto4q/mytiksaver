import SearchBar from "~/components/SearchBar";

function index() {
	return (
		<div className="mx-auto container px-2 md:px-0 ">
			<div className="flex  flex-col gap-2 items-center mt-12">
				<h1 className="text-2xl text-center font-black">Download Tiktok Videos</h1>
				<h3 className="text-center">Download TikTok video without watermark for free</h3>

				<div className="mt-4 w-full max-w-xl">
					<SearchBar></SearchBar>
				</div>
			</div>
		</div>
	);
}

export default index;
