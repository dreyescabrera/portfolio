import React from "react";

function HamburguerButton({ sidebarIsOpen, setSidebarIsOpen }) {
	return (
		<div
			className="fixed bottom-6 right-6 bg-quaternary dark:bg-secondary flex justify-center items-center w-14 h-14 rounded-full z-10 cursor-pointer shadow shadow-black md:hidden"
			onClick={() => {
				setSidebarIsOpen((prev) => !prev);
				document.documentElement.classList.toggle("preventScroll");
			}}
		>
			<div
				className={`w-7 h-0.5 bg-gray-100 rounded-full transition-all duration-500 ease-in-out 
           before:content[''] before:absolute before:w-7 before:h-0.5 before:bg-gray-100 before:rounded-full before:transition-all before:duration-500 before:ease-in-out before:-translate-y-2
           after:content[''] after:absolute after:w-7 after:h-0.5 after:bg-gray-100 after:rounded-md after:transition-all after:duration-500 after:ease-in-out after:translate-y-2
           ${
							sidebarIsOpen
								? "bg-inherit before:rotate-45 before:translate-y-0 after:rotate-[-45deg] after:translate-y-0"
								: undefined
						}`}
			></div>
		</div>
	);
}

export { HamburguerButton };
