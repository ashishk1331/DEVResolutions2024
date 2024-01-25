import exportAsImage from "@/util/exportAsImage.js";

export default function (props) {
	const { card, goals, setGoals } = props;
	return (
		<div className="relative w-full px-16">
			{/* Card */}
			<div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
				<h1 className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl lg:leading-tight dark:text-white">
					#<span className="text-blue-600">DEV</span>Resolutions2024
				</h1>
				<p className="mt-1 text-gray-800 dark:text-gray-200">
					Set your sights on personal success, and share your
					(DEV)eloper Goals for January!
				</p>
				<form>
					<div className="mt-6 grid gap-4 lg:gap-6">
						{Array(3)
							.fill("")
							.map((_, index) => (
								<div>
									<label
										htmlFor="hs-work-email-hire-us-1"
										className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
									>
										Goal #{index + 1}
									</label>
									<input
										type="text"
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
										value={goals[index]}
										onChange={(e) =>
											setGoals[index](e.target.value)
										}
									/>
								</div>
							))}
					</div>
					{/* End Grid */}
					{/* Checkbox */}
					<div className="mt-3 flex">
						<div className="flex">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
							/>
						</div>
						<div className="ms-3">
							<label
								htmlFor="remember-me"
								className="text-sm text-gray-600 dark:text-gray-400"
							>
								By submitting this form I commit to work hard
							</label>
						</div>
					</div>
					{/* End Checkbox */}
					<div className="mt-6 grid">
						<button
							type="submit"
							className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							onClick={(e) => {
								e.preventDefault();
								exportAsImage(
									card.current,
									"#DEVResolutions2024",
								);
							}}
						>
							Printout card
						</button>
					</div>
				</form>
				<div className="mt-3 text-center">
					<p className="text-sm text-gray-500">
						Say hi to the creator{" "}
						<a
							href="https://twitter.com/AshishK1331"
							className="text-blue-600 decoration-2 hover:underline font-medium"
						>
							ashishk
						</a>
					</p>
				</div>
			</div>
			{/* End Card */}
		</div>
	);
}
