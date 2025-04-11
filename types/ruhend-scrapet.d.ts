declare module "ruhend-scraper" {
	export interface TTDLResult {
		author: string;
		avatar: string;
		bookmark: string;
		comment: string;
		cover: string;
		duration: string; // says "deprecated", but still a string
		like: string;
		music: string;
		published: string;
		region: string;
		title: string;
		username: string;
		video: string;
		video_hd: string;
		video_wm: string;
		views: string;
	}

	export function ttdl(
		url: string
		//   options?: {
		//     quality?: "high" | "medium" | "low";
		//     server?: string;
		//   }
	): Promise<TTDLResult>;
}
