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
					className="w-[130px] min-[375px]:w-[150px] object-cover object-top rounded-full aspect-square shadow-[0_0_0_10px] shadow-darkGray 3xl:w-52"
				/>
			);

		case 'square':
			return (
				<Image
					src={'/img/profile-picture.webp'}
					alt="Profile Image"
					width={400}
					height={600}
					className="w-3/4 h-full max-w-xs self-center rounded"
				/>
			);

		default:
			throw new Error('Invalid image shape: ' + shape);
	}
};
