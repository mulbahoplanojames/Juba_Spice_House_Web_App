// Importing the assets object from the data/assets file. This object contains various
// assets used in the component such as the box_3d image.

import { assets } from "../../data/assets";

// Defining a functional component called CallToAction. It is responsible for rendering
// the call to action section of the webpage.
const CallToAction = () => {
	return (
		<>
			<div className='bg-yellow_accent_2 h-[40vh] rounded-lg text-text_light my-10 mx-auto relative flex justify-between  gap-20'>
				<img src={assets.box_3d} alt='' className='md:w-[40%] w-[80%]' />
				<div className='h-fit absolute right-3 lg:max-w-[40rem] md:max-w-[30rem] text-center md:text-left bottom-10'>
					{/* Call to action text */}
					<h1 className='text-4xl text-white font-bold pb-6'>
						We are here to serve you 24/7 with our best service and food quality
					</h1>
					{/* Call to action button */}
					<button className='bg-primary text-text_light font-bold py-3 px-6 rounded-3xl hover:bg-yellow-200 transition-all duration-300'>
						Order Now
					</button>
				</div>
			</div>
		</>
	);
};

// Exporting the CallToAction component so that it can be used in other parts of the application.
export default CallToAction;
