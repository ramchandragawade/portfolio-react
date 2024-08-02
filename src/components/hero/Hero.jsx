import './hero.scss';

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<div className="txtContainer">
					<h2>{'Ramchandra Gawade'.toUpperCase()}</h2>
					<h1>{'Senior Software Engineer'}</h1>
					<div className="buttons">
						<button>See the latest works</button>
						<button>Contact Me</button>
					</div>
					<img src="scroll.png" alt="" />
				</div>
			</div>
			<div className="imgContainer">
				<img src="hero.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
