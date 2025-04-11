import { atom } from "jotai";



let string_atom = atom<string>("");
let side_bar_atom = atom<boolean>(false)
let nav_links = [
	{
		link: "https://deflicks.vercel.app",
		title: "Stream Movie",
	},
	{
		link: "",
		title: "Twitter Downloader",
	},
	{
		link: "",
		title: "Youtube Downloader",
	},
];
export { string_atom ,side_bar_atom,nav_links};
