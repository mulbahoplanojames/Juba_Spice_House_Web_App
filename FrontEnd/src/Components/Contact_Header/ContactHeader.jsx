import { assets } from "../../data/assets";

const ContactHeader = () => {
	return (
		<>
			<div className='md:h-[50vh] h-[40vh] text-center lg:px-56 px-4 text-white bg-yellow_accent_3 flex justify-center items-center flex-col relative rounded-md mb-16 mt-6'>
				<h1 className='md:text-6xl text-4xl pb-4 uppercase font-bold'>
					Contact Us
				</h1>
				<p className='text-lg z-10'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
					neque iste officia. Reprehenderit culpa neque ut nisi, voluptatum
					ratione sed!
				</p>
				<img
					src={assets.contact_3d}
					alt='phone image'
					className='absolute md:bottom-0 md:left-0 md:w-[10rem] w-[5rem] bottom-0 left-0 animate-pulse'
				/>
				<img
					src={assets.contact_3d_message}
					alt='message image'
					className='absolute md:top-5 ms:right-0 md:w-[14rem] w-[5rem] top-0 right-0 animate-pulse'
				/>
			</div>
		</>
	);
};

export default ContactHeader;
