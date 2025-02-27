import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:['start start', 'end start']
    });

    const yText = useTransform(scrollYProgress,[0,1],['0%','400%']);
    const yBG = useTransform(scrollYProgress,[0,1],['0%','100%']);

	return (
		<div
			className="parallax"
            ref={ref}
			style={{
				background:
					type === 'skills'
						? 'linear-gradient(180deg, #111132, #0c0c1d)'
						: 'linear-gradient(180deg, #111132, #505064)',
			}}
		>
			<motion.h1 style={{y:yText}}>{type === 'skills' ? 'What We Do?' : 'What We Did?'}</motion.h1>
			<motion.div className="mountains"></motion.div>
			<motion.div className="planets" style={{
                y:yBG,
                backgroundImage: `url(${type==='skills' ? '/planets.png':'/sun.png'})`

            }}></motion.div>
			<motion.div className="stars" style={{x:yBG}}></motion.div>
		</div>
	);
};

export default Parallax;
