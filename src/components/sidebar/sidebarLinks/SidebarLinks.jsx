import { motion } from 'framer-motion';
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        },
    },
};
const itemVariants = {
    open: {
        y:0,
        opacity: 1
    },
    closed: {
        y:50,
        opacity: 0
    },
};
const SidebarLinks = () => {
	const items = ['Homepage', 'Skills & Experience', 'Projects', 'Contact', 'About'];
	return (
		<motion.div className="links" variants={variants}>
			{items.map((itm) => (
				<motion.a href={`#${itm}`} key={itm} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
					{itm}
				</motion.a>
			))}
		</motion.div>
	);
};

export default SidebarLinks;
