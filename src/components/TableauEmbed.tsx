'use client';
import React, { useEffect, useRef } from 'react';

interface TableauEmbedProps {
	htmlContent: string;
}

const TableauEmbed: React.FC<TableauEmbedProps> = ({ htmlContent }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (container) {
			// Inject the HTML content
			container.innerHTML = htmlContent;

			// Extract and execute any scripts within the HTML
			const scripts = container.getElementsByTagName('script');
			for (let i = 0; i < scripts.length; i++) {
				const script = scripts[i];
				const newScript = document.createElement('script');

				// Copy all attributes from the original script to the new script
				Array.from(script.attributes).forEach((attr) => {
					newScript.setAttribute(attr.name, attr.value);
				});

				// Copy the script content
				newScript.text = script.innerText;

				// Replace the old script with the new one to execute it
				script.parentNode?.replaceChild(newScript, script);
			}
		}

		// Cleanup function to remove scripts if the component unmounts
		return () => {
			if (container) {
				container.innerHTML = '';
			}
		};
	}, [htmlContent]);

	return <div ref={containerRef}></div>;
};

export default TableauEmbed;
