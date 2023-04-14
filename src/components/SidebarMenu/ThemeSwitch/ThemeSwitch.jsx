import { useState, useEffect } from "react";
import { Icon } from "@common/Icon";

export const ThemeSwitch = () => {
	const [isDark, setIsDark] = useState(false);

	const switchTheme = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
			return;
		}
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
		setIsDark(true);
	};

	useEffect(() => {
		const userTheme = localStorage.getItem("theme");
		const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches;
		if (userTheme === "dark" || (!userTheme && systemTheme)) {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		}
	}, []);

	return (
		<div className="flex gap-2 items-center justify-center mt-2 xs:mt-6 md:self-start">
			<Icon type="sun" styles="w-6 h-full text-white" />
			<div
				className="w-14 h-6 p-0.5 bg-red-50  rounded-full overflow-hidden cursor-pointer"
				onClickCapture={switchTheme}
			>
				<div
					className={`w-5 h-full bg-gradient-to-r from-terciary to-primary bg-terciary rounded-full transition-transform duration-500 ease-in-out ${
						isDark ? "translate-x-8 rotate-180" : ""
					}`}
				></div>
			</div>
			<Icon type="moon" styles="w-6 h-full text-white" />
		</div>
	);
};
