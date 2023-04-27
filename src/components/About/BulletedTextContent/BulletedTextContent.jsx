import { Icon } from "../../common/Icon";
import { TextContent } from "../../common/TextContent";

export const BulletedTextContent = ({ children }) => {
	return (
		<TextContent>
			<Icon
				type="arrowLeft"
				styles="relative -top-px w-4 h-4 inline-block text-primary dark:text-terciary mr-2"
			/>
			{children}
		</TextContent>
	);
};
