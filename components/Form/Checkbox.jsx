export default function (props) {
	const { checked, setChecked } = props;
	return (
		<div className="mt-3 flex">
			<div className="flex">
				<input
					type="checkbox"
					id="hard-work"
					className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
					checked={checked}
					onChange={(e) => setChecked((prev) => !prev)}
				/>
			</div>
			<div className="ms-3">
				<label
					htmlFor="hard-work"
					className="text-sm text-gray-600 dark:text-gray-400"
				>
					By submitting this form I commit to work hard
				</label>
			</div>
		</div>
	);
}
