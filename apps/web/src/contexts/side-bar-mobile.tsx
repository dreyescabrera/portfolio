import { createContext, useState, useContext, type ReactNode } from 'react';

type TSidebarContext = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
};

const initalState: TSidebarContext = {
	isSidebarOpen: false,
	toggleSidebar: () => void 0,
};

const SidebarContext = createContext(initalState);

export function useSidebarMobileContext() {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error('useMyContext must be used within a MyContextProvider');
	}
	return context;
}

export function SidebarMobileProvider({ children }: { children: ReactNode }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	const contextValue = {
		isSidebarOpen,
		toggleSidebar,
	};

	return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}
