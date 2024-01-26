export default function (props) {
	const { goal, setGoal, index } = props;
	return (
		<div>
			<label
				htmlFor="hs-work-email-hire-us-1"
				className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
			>
				Goal #{index}
			</label>
			<input
				type="text"
				className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
				value={goal}
				onChange={(e) => setGoal(e.target.value)}
			/>
		</div>
	);
}
