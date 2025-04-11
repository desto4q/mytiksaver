let instructions = [
	{
		title: "Copy the URL",
		body: "Copy the URL of the TikTok video you want to download.",
	},
	{
		title: "Paste the URL",
		body: "Paste the URL in the input field above.",
	},
	{
		title: `Click Search`,
		body: " Click the `Search` button to get your video.",
	},
];

const faqs = [
	{
		question: "Can I download private TikTok videos?",
		answer: "No, our TikTok Video Downloader can only download public TikTok videos.",
	},
	{
		question: "Is there a limit to the number of videos I can download?",
		answer: "No, you can download as many TikTok videos as you like using our service.",
	},
	{
		question: "Can I download videos from any TikTok account?",
		answer: "Yes, you can download videos from any public TikTok account.",
	},
	{
		question:
			"Do I need to create an account to use the TikTok Video Downloader?",
		answer: "No, our service is completely free and does not require registration.",
	},
	{
		question: "Can I use MyTikSaver on my mobile phone?",
		answer: "Yes, MyTikSaver is fully compatible with both desktop and mobile devices.",
	},
	{
		question: "Do I need to install any software to use MyTikSaver?",
		answer: "No, MyTikSaver is a web-based service. You don't need to install any software or extensions.",
	},
];

function Faqs() {
	return (
		<div className="mx-auto container mt-12 bg-base-200 p-4 rounded-md outline outline-primary/25">
			<h2 className="text-lg font-bold mb-4">
				Get Started with TikTok Video Downloader
			</h2>
			<p>
				Welcome to our easy-to-use TikTok Video Downloader. Follow these
				steps to download your favorite TikTok videos:
			</p>
			<h2 className="text-xl font-black mt-4">Instructions:</h2>
			<div className="p-2 flex flex-col gap-2">
				{instructions.map((e, i) => (
					<div className="flex items-center flex-wrap ">
						<p className="mr-2 ">{i + 1}.</p>{" "}
						<span className="font-black mr-2 text-nowrap"> {e.title}:</span>{" "}
						<p>{e.body}</p>
					</div>
				))}
			</div>
			<p className="bg-base-100 p-4 rounded-md mt-4">
				<span className="font-bold text-primary">Note:</span> MyTikSaver
				is not a tool of TikTok, we have no relationship with TikTok and
				the company ByteDance. We only support Tiktok users to download
				our videos on Tiktok without watermark easily and quickly. Thank
				you!
			</p>

			<div className="flex flex-col gap-4 p-4 mt-4">
				{faqs.map((e) => (
					<div className="flex flex-col gap-1">
						<h2 className="font-bold text-lg">Q: {e.question}</h2>
						<p className="bold opacity-70">A: {e.answer}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Faqs;
