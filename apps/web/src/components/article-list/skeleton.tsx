export const Skeleton = () => {
	return (
		<div
			role="status"
			className=" animate-pulse divide-y divide-gray-200  dark:divide-gray-700 dark:border-gray-700 "
		>
			<div className="flex  items-center justify-between p-3">
				<div className="w-full">
					<div className="h-2 w-1/2 rounded-full bg-gray-200 dark:bg-lightGray/20"></div>
				</div>
				<div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-lightGray/20"></div>
			</div>
			<div className="flex items-center justify-between p-3">
				<div className="w-full">
					<div className="h-2 w-1/2 rounded-full bg-gray-200 dark:bg-lightGray/20"></div>
				</div>
				<div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-lightGray/20"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};
