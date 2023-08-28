import Image from 'next/image';

type ProfileImageProps = {
	shape: 'circle' | 'square';
};

export const ProfileImage = ({ shape }: ProfileImageProps) => {
	switch (shape) {
		case 'circle':
			return (
				<Image
					src={'/img/mini-profile-picture.webp'}
					alt="Profile Image"
					width={150}
					height={150}
					className="aspect-square w-[130px] rounded-full object-cover object-top shadow-[0_0_0_10px] shadow-darkGray min-[375px]:w-36 2xl:w-44 3xl:w-52"
				/>
			);

		case 'square':
			return (
				<Image
					src={'/img/profile-picture.webp'}
					alt="Profile Image"
					width={400}
					height={600}
					className="h-full w-3/4 max-w-xs self-center rounded"
				/>
			);

		default:
			throw new Error(`Invalid image shape: ${shape as string}`);
	}
};
