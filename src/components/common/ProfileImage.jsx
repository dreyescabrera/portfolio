import tinyURL from "@assets/img/mini-profile-picture.webp";
import URL from "@assets/img/profile-picture.webp";

export const ProfileImage = ({ shape }) => {
	switch (shape) {
		case "circle":
			return (
				<img
					src={tinyURL}
					alt="Profile Image"
					className="w-[130px] min-[375px]:w-[150px] object-cover object-top rounded-full aspect-square shadow-[0_0_0_10px] shadow-darkGray 3xl:w-52"
					loading="lazy"
				/>
			);
		case "square":
			return (
				<img
					src={URL}
					alt="Profile Image"
					className="w-3/4 h-full max-w-xs self-center rounded"
					loading="lazy"
				/>
			);
		default:
			throw new Error("ProfileImage shape needs to be defined.");
	}
};
