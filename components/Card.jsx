import { forwardRef } from 'react';

export default forwardRef(Card);

function Card(props, ref) {
	const { goals } = props;

	return (
		<div className="sm:w-[600px] sm:h-[600px] aspect-square bg-[#4241FF] p-8 m-auto" ref={ref}>
			<div className="flex flex-col gap-3 items-left text-black p-4 h-full bg-[#7270FF] rounded-xl border-2 border-black font-medium">
				<div className="flex items-top gap-4">
					<div className="balls flex items-center gap-2">
						<div className="w-3 h-3 bg-black rounded-full border-2 border-black" />
						<div className="w-3 h-3 border-2 border-black rounded-full" />
						<div className="w-3 h-3 border-2 border-black rounded-full" />
					</div>
					<div className="w-fit bg-white text-xs sm:text-normal rounded-t-xl p-2 px-4 border-2 border-black w-fit flex items-center gap-4 sm:gap-8">
						#DEVResolutions2024
						<X />
					</div>
				</div>
				<div className="w-full bg-white rounded-xl p-1 px-4 border-2 border-black text-xs sm:text-normal">
					<p>dev.to</p>
				</div>
				<div className="flex flex-col items-left justify-around h-full w-full bg-black text-white rounded-xl p-2 px-6">
					<h1 className="text-xl sm:text-4xl font-bold mx-auto">
						My (Dev)eloper Goals
					</h1>
					<div className="w-full h-[2px] rounded-full bg-white sm:-my-4" />
					{goals.map((title) => (
						<Goal text={title} />
					))}
				</div>
			</div>
		</div>
	);
}

function Goal({ text }) {
	return (
		<div className="flex items-center gap-4 sm:gap-8 px-2">
			<div className="w-5 sm:w-10 h-5 sm:h-10 aspect-square rounded-md border-2 border-white" />
			<p className="text-sm sm:text-3xl font-light">{text}</p>
		</div>
	);
}

function X() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="#000000"
			viewBox="0 0 256 256"
			className="w-4 h-4 stroke-4 stroke-black"
		>
			<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
		</svg>
	);
}
