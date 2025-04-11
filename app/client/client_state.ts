import { atom } from "jotai";



let string_atom = atom<string>("");
let side_bar_atom = atom<boolean>(false)

export { string_atom ,side_bar_atom};
