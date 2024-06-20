import { assets } from "../../data/assets";

const Header = () => {
	return (
		<>
			<div
				className='h-[70vh] rounded-lg text-primary my-10 mx-auto relative bg-no-repeat bg-center bg-cover'
				id='home_header'
			>
				<div className='md:w-[70%] w-full text-white absolute bottom-10 lg:pl-20 md:pl-12 pl-6 pr-2'>
					<h1 className='lg:text-6xl text-5xl font-bold md:pr-20 pb-6'>
						Place your favorite food order here
					</h1>
					<p className='text-lg pb-6'>{assets.headerText}</p>
					<button className='bg-primary text-text_light font-bold py-3 px-6 rounded-3xl hover:bg-yellow-200 transition-all duration-300'>
						View Menu
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
