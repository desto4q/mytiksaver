import { useAtom } from "jotai";
import { LucideOctagon } from "lucide-react";
import { Link } from "react-router";
import { nav_links, side_bar_atom } from "~/client/client_state";



function Sidebar() {
	// let pathname = useLocation();

	let [open, setOpen] = useAtom(side_bar_atom);

	return (
		<div
			className={`"flex fixed top-0 duration-150  ${
				open
					? "bg-neutral-900/50 backdrop-blur-sm"
					: "bg-transparent pointer-events-none"
			} z-20 isolate" w-dvw`}
			onClick={() => {
				setOpen(false);
			}}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={`flex flex-col items-center duration-150 sticky top-0  w-[252px] h-dvh px-4 py-4  ${
					!open ? "-translate-x-full" : ""
				}`}
			>
				<div className="h-20 p-2 bg-base-100  w-full flex items-center rounded-md">
					<a
						href=""
						className="btn btn-circle btn-ghost"
					>
						<LucideOctagon />
					</a>
					<p className="text-md font-black"> MytikSave</p>
				</div>
				<div className="md:block hidden mb-2  w-full"></div>

				<nav className="w-full flex flex-col gap-4 bg-base-100 p-2 h-full rounded-md py-4">
					<h2 className="px-2 font-bold text-lg">Links:</h2>
					{nav_links.map((e) => {
						return (
							<Link
								className={`btn btn-secondary btn-soft text-sm w-full justify-start text-left `}
								to={e.link}
								key={e.title}
							>
								<p className="">{e.title}</p>
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	);
}

export default Sidebar;
