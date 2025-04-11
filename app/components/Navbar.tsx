import { useAtom } from "jotai";
import { Link } from "react-router";
import { side_bar_atom } from "~/client/client_state";

let nav_links = [
	{
		link: "",
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
function Navbar() {
	let [open,setOpen] =useAtom(side_bar_atom)
	return (
		<div className="h-20 flex items-center border-b border-primary/25">
			<nav className="flex gap mx-auto  container items-center px-2 md:px-0">
				<Link
					to={"/"}
					className="btn btn-soft btn-primary"
				>
					TikSave
				</Link>
				<div className="hidden ml-auto md:flex items-center gap-2 ">
					{nav_links.map((e) => (
						<Link
							className="btn btn-sm btn-ghost hover:bg-primary/25"
							to={"/"}
							onClick={()=>{
								setOpen(!open)
							}}
							key={e.title}
						>
							{e.title}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
