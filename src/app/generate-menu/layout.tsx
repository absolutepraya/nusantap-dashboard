import React, { Suspense } from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

const GenerateMenuLayout: React.FC<LayoutProps> = ({ children }) => {
	return <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>{children}</Suspense>;
};

export default GenerateMenuLayout;
