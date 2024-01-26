export default function (props) {
	const { exportAsImage, card, checked } = props;
	return (
		<div className="mt-6 grid">
			<button
				type="submit"
				disabled={!checked}
				className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
				onClick={(e) => {
					e.preventDefault();
					exportAsImage(card.current, "#DEVResolutions2024");
				}}
			>
				Print out
			</button>
		</div>
	);
}
