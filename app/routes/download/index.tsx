import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getResp } from "~/client/api";
import { string_atom } from "~/client/client_state";
import SearchBar from "~/components/SearchBar";
import { nanoid } from "nanoid";
import axios from "axios";
import { toast } from "sonner";
import Faqs from "~/components/Faqs";
interface VIDEODATA {
	region: string;
	title: string;
	avatar: string;
	author: string;
	username: string;
	comment: string;
	views: string;
	cover: string;
	like: string;
	bookmark: string;
	published: string;
	video: string;
	video_wm: string;
	video_hd: string;
	music: string;
	duration: string;
}
function index() {
	let [url_string, setUrl] = useAtom(string_atom);
	let [progress, setProgress] = useState(0);

	useEffect(() => {
		console.log("progress", progress);
	}, [progress]);
	let nav = useNavigate();
	useEffect(() => {
		if (url_string.length < 1) {
			nav("/");
		}
	}, []);
	let data = useQuery<VIDEODATA>({
		queryKey: [url_string],
		queryFn: async () => await getResp(url_string),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	if (data.isFetching) {
		return (
			<div className="mx-auto container h-[500px] grid place-items-center">
				<p className="bg-primary/50 p-4 text-lg font-bold rounded-md">
					loading
				</p>
			</div>
		);
	}
	if (data.isError) {
		return (
			<div className="mx-auto container h-[500px] grid place-items-center">
				<div className="py-2 gap-2 flex-col">
					<p>error occured</p>
					<button
						className="btn btn-error btn-lg"
						onClick={() => {
							data.refetch();
						}}
					>
						Reload
					</button>
				</div>
			</div>
		);
	}
	let id = nanoid(6);
	if (!data.data) {
		return (
			<div className="mx-auto container h-[500px] grid place-items-center">
				<div className="py-2 gap-2 flex-col">
					<p>error occured</p>
					<button
						className="btn btn-error btn-lg"
						onClick={() => {
							data.refetch();
						}}
					>
						Reload
					</button>
				</div>
			</div>
		);
	}
	let download_file = async (url: string, title: string) => {
		const toastId = toast.loading("Downloading...", {
			position: "top-right",
			duration: Infinity,
		});
		try {
			// Start the toast with a loading state and store the toast ID

			// Make the Axios request to download the file
			const response = await axios.get(url, {
				responseType: "blob", // Ensures we get binary data (like a file)
				onDownloadProgress: (progressEvent) => {
					// Calculate the progress percentage
					const total = progressEvent.total!;
					const current = progressEvent.loaded;
					let curr = Math.ceil((current / total) * 100);

					// Update the state with the current progress
					setProgress(curr);

					// Update the toast with the current progress
					toast(`Downloading... ${curr}%`, {
						id: toastId,
					});
				},
			});

			// Check if the response is valid
			if (!response || !response.data) {
				toast.dismiss(toastId);

				toast.error("Failed to download file");
				throw new Error("Download failed");
			}

			// Create a blob object from the response data
			const blob = response.data;

			// Create a URL for the blob
			const downloadUrl = window.URL.createObjectURL(blob);

			// Create a temporary <a> element to trigger the download
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.download = title;

			// Append the link to the body, trigger the click event to download, and then remove the link
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			// Clean up the object URL after the download
			window.URL.revokeObjectURL(downloadUrl);
			// Close the toast when download is complete
			toast.dismiss(toastId);
			toast.success("downloaded");
		} catch (error) {
			toast.dismiss(toastId);

			// Handle errors (e.g., network issues or invalid URLs)
			toast.error("download failed");
			console.error(error);
		}
	};

	return (
		<div className="mx-auto container flex flex-col gap-2 px-2 md:px-0 ">
			<h2 className="mt-2 text-xl font-bold">Results:</h2>
			<p className="wrap-break-word bg-base-200 p-2 text-sm rounded-md mb-4">
				{url_string}
			</p>
			<div className="flex w-full  gap-2">
				<div className="min-w-fit">
					<img
						src={data.data?.cover}
						className="h-60 rounded"
						alt=""
					/>
					<div className="py-2">
						<p className="font-bold">@{data.data?.username}</p>
						<p className="text-sm opacity-50">
							{data.data?.author}
						</p>
						{/* <p className="text-sm opacity-50">{data.data?.}</p> */}
						{/* <p className="te">{data.data?.title}</p> */}
					</div>
				</div>
				<div className="flex flex-col gap-4 py-2 ml-auto my-auto">
					<h2 className="">Download Options:</h2>
					<button
						onClick={() => {
							download_file(
								data.data?.video as string,
								`${data.data?.author}${id}.mp4`
							);
						}}
						className="btn btn-primary"
					>
						Video
					</button>
					<button
						onClick={() => {
							download_file(
								data.data?.video_wm as string,
								`${data.data?.author}${id}_wm.mp4`
							);
						}}
						className="btn btn-primary"
					>
						Video_wm
					</button>
					<button
						onClick={async () => {
							download_file(
								data.data?.video_hd as string,
								`${data.data?.author}${id}_hd.mp4`
							);
						}}
						className="btn btn-primary"
					>
						Video_hd
					</button>
				</div>
			</div>
			<div className="w-full max-w-lg mx-auto mt-4">
				<SearchBar />
			</div>
			<h2>{}</h2>
			<Faqs/>
		</div>
	);
}

export default index;
