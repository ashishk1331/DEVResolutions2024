import { useState } from "react";

import Header from "./Form/Header";
import Footer from "./Form/Footer";
import InputBox from "./Form/InputBox";
import Checkbox from "./Form/Checkbox";
import SubmitButton from "./Form/SubmitButton";

import exportAsImage from "@/util/exportAsImage.js";

export default function (props) {
	const { card, goals, setGoals } = props;
	const [checked, setChecked] = useState(false);
	return (
		<div className="relative w-full xl:px-16 flex">
			<div className="w-fit flex flex-col m-auto border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
				<Header />
				<form>
					<div className="mt-6 grid gap-4 lg:gap-6">
						{Array(3)
							.fill("")
							.map((_, index) => (
								<InputBox
									index={index + 1}
									goal={goals[index]}
									setGoal={setGoals[index]}
								/>
							))}
					</div>

					<Checkbox checked={checked} setChecked={setChecked} />

					<SubmitButton
						card={card}
						exportAsImage={exportAsImage}
						checked={checked}
					/>
				</form>
				<Footer />
			</div>
		</div>
	);
}
