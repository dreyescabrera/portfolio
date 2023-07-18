'use client';

type HamburguerButtonProps = {
	isActive: boolean;
	callback: () => void;
};

export const HamburguerButton = ({ isActive, callback }: HamburguerButtonProps) => {
	const rotateStyles = isActive ? 'rotate-45 translate-y-1' : '';
	const invertedRotateStyles = isActive ? 'rotate-[-45deg] -translate-y-1.5' : '';

	return (
		<button
			type="button"
			title="Toggle Menu"
			className="fixed bottom-6 right-6 bg-quaternary dark:bg-secondary flex flex-col gap-2 justify-center items-center w-14 h-14 rounded-full z-20 cursor-pointer shadow shadow-darkGray md:hidden"
			onClick={callback}
		>
			<span
				className={`w-7 h-0.5 bg-gray-100 rounded-full transition-transform duration-500 ease-in-out 
           ${rotateStyles}`}
			></span>
			<span
				className={`w-7 h-0.5 bg-gray-100 rounded-full transition-transform duration-500 ease-in-out 
          ${invertedRotateStyles}`}
			></span>
		</button>
	);
};
