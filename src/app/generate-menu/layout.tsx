import React, { Suspense } from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

const GenerateMenuLayout: React.FC<LayoutProps> = ({ children }) => {
	return <Suspense fallback={<div>Loading Generate Menu...</div>}>{children}</Suspense>;
};

export default GenerateMenuLayout;
