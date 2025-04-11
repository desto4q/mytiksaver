import { useAtom } from "jotai";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import { nav_links, side_bar_atom } from "~/client/client_state";

function Navbar() {
	let [open, setOpen] = useAtom(side_bar_atom);
	return (
		<div className="h-20 flex items-center border-b border-primary/25">
			<nav className="flex gap mx-auto  container items-center px-2 md:px-0">
				<Link
					to={"/"}
					className="btn btn-soft btn-primary"
				>
					MyTikSaver
				</Link>
				<button
					className="md:hidden place-items-center grid btn btn-ghost ml-auto"
					onClick={() => {
						setOpen(true);
					}}
				>
					<Menu />
				</button>
				<div className="hidden ml-auto md:flex items-center gap-2 ">
					{nav_links.map((e) => (
						<Link
							className="btn btn-sm btn-ghost hover:bg-primary/25"
							to={e.link}
							// onClick={()=>{
							// 	setOpen(!open)
							// }}
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
