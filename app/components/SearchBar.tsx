import { useAtom } from "jotai";
import type { SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { string_atom } from "~/client/client_state";
import { Search } from "lucide-react";
function SearchBar() {
	let [url_string, setUrl] = useAtom(string_atom);
	let nav = useNavigate();
	let onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		let form_data = new FormData(e.target as HTMLFormElement);
		let search = form_data.get("search") as string;

		if (search.length < 1) {
			return toast.error("input empty");
		}
		if (!search.includes("tiktok.com")) {
			return toast.error("invalid url");
		}
		setUrl(search);
		nav("/Download");
	};
	return (
		<form
			className="join w-full"
			onSubmit={onSubmit}
		>
			<input
				name="search"
				placeholder="search here "
				type="text"
				className="grow input-lg input join-item focus:outline-none focus:border-primary/50 duration-150 text-sm"
			/>
			<button className="btn-soft btn-lg btn-secondary btn join-item ">
				<Search />
			</button>
		</form>
	);
}

export default SearchBar;
