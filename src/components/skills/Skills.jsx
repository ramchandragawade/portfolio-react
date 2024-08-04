import './skills.scss';
import { motion } from 'framer-motion';
const data = [
	{
		id: 'a',
		title: 'Branding',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque cum ipsum quo neque dolorum voluptate, sequi praesentium placeat veniam! Recusandae sit labore consequuntur quis, nihil totam quidem natus tempore!',
	},
	{
		id: 'b',
		title: 'Branding',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque cum ipsum quo neque dolorum voluptate, sequi praesentium placeat veniam! Recusandae sit labore consequuntur quis, nihil totam quidem natus tempore!',
	},
	{
		id: 'c',
		title: 'Branding',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque cum ipsum quo neque dolorum voluptate, sequi praesentium placeat veniam! Recusandae sit labore consequuntur quis, nihil totam quidem natus tempore!',
	},
	{
		id: 'd',
		title: 'Branding',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque cum ipsum quo neque dolorum voluptate, sequi praesentium placeat veniam! Recusandae sit labore consequuntur quis, nihil totam quidem natus tempore!',
	},
];
const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity:1,
		y:0,
		transition: {
			duration:1,
			staggerChildren: 0.1
		}
	},
};
const Skills = () => {
	return (
		<motion.div
			className="skills"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer">
				<p>
					I focus on helping your brand grow
					<br />
					and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="/people.webp" alt="" />
					<h1>
						<b>Unique</b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<b>For Your</b> Business.
					</h1>
					<button>What We Do?</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				{data.map((itm) => (
					<motion.div
						className="box"
						key={itm.id}
						whileHover={{ background: 'lightgray', color: 'black' }}
					>
						<h2>{itm.title}</h2>
						<p>{itm.text}</p>
						<button>Go</button>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Skills;
