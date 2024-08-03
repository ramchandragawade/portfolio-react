import './hero.scss';
import { motion } from 'framer-motion';
const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};
const sliderVariant = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-220%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 30,
		},
	},
};
const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="txtContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>
						{'Ramchandra Gawade'.toUpperCase()}
					</motion.h2>
					<motion.h1 variants={textVariants}>
						{'Senior Software Engineer'}
					</motion.h1>
					<motion.div className="buttons" variants={textVariants}>
						<button>See the latest works</button>
						<motion.button
							style={{ color: 'black', backgroundColor: 'white' }}
							initial={{
								opacity: 0.75,
							}}
							animate={{
								opacity: 1,
								transition: {
									duration: 0.7,
									type: 'spring',
									repeat: Infinity,
									repeatType: 'mirror'
								},
							}}
						>
							Contact Me
						</motion.button>
					</motion.div>
					<motion.img
						src="scroll.png"
						alt=""
						variants={textVariants}
						animate="scrollButton"
					/>
				</motion.div>
			</div>
			<motion.div
				className="slidingTxt"
				variants={sliderVariant}
				initial="initial"
				animate="animate"
			>
				EXTJS SENCHA REACTJS JAVASCRIPT
			</motion.div>
			<div className="imgContainer">
				<img src="hero.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
