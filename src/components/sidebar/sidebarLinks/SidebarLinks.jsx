import React from 'react';

const SidebarLinks = () => {
	const items = ['Homepage', 'Services', 'Projects', 'Contact', 'About'];
	return (
		<div className="links">
			{items.map((itm) => (
				<a href={`#${itm}`} key={itm}>
					{itm}
				</a>
			))}
		</div>
	);
};

export default SidebarLinks;
