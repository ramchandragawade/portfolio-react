import './navbar.scss';
import { motion } from 'framer-motion';
const Navbar = () => {
	return (
		<div className="navbar">
			{/* {Sidebar} */}
			<div className="wrapper">
				<motion.span
					className="logospan"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Ramchandra Gawade
				</motion.span>
				<div className="social">
					<a href="#">
						<img src="/facebook.png" alt="facebook" />
					</a>
					<a href="#">
						<img src="/insta.png" alt="instagram" />
					</a>
					<a href="#">
						<img src="/linkedin.png" alt="linkedin" />
					</a>
					<a href="#">
						<img src="/github.png" alt="github" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
