import { delay, motion, stagger } from 'framer-motion';
import { useState } from 'react';
const Temp = () => {
	const [open, setOpen] = useState(false);
	const variants = {
		visible:(i) =>({
			opacity: 1,
			x: 100,
			transition: {
                delay: i * 0.5,
                type: 'spring',
				stiffness: 200,
				damping: 100,
                staggerChildren: 0.2
			},
		}),
		hidden: { opacity: 0 },
	};
	const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
	return (
		<div className="course">
			{/* <motion.div
				className="box"
                initial={{opacity:0,scale:0.5}}
				animate={{
					opacity: 1,
                    scale:1
				}}
				transition={{ duration: 2, delay: 2 }}
			></motion.div> */}
			{/* <motion.div
				className="box"
				initial={{ opacity: 0.5, scale: 0.5 }}
				transition={{ duration: 2 }}
				whileHover={{ scale: 2, opacity: 1,rotate:45}}
                drag
                whileTap={{backgroundColor:'darkcyan'}}
                whileDrag={{scale:1}}
                whileInView={{scale:2}}
			></motion.div> */}
			{/* <motion.div
				className="box"
				variants={variants}
				// initial='hidden'
				animate={open ? 'visible' : 'hidden'}
			></motion.div>
            <button
				onClick={() => {
					setOpen((val) => !val);
				}}
			>
				Click
			</button>
            */}
			<motion.ul initial='hidden' animate='visible' variants={variants}>
				{items.map((itm,i) => (
					<motion.li variants={variants} key={itm} custom={i}>
                        {itm}
                    </motion.li>
				))}
			</motion.ul>
			
		</div>
	);
};

export default Temp;
