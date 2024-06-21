const ContactFormNewsletter = () => {
	return (
		<>
			{/* <ContactForm /> */}
			<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  gap-y-14 place-items-center mb-20'>
				<form action='' className='col-span-2 md:order-first order-last'>
					<div className='flex justify-between items-center mb-3 flex-wrap'>
						<input
							type='email'
							placeholder='Email'
							className='md:w-[48%] w-full bg-[#eaeef3] h-[2.8rem] outline-none rounded-xl px-4 md:mb-0 mb-3'
						/>
						<input
							type='tel'
							placeholder='Phone'
							className='md:w-[48%] w-full bg-[#eaeef3] h-[2.8rem] outline-none rounded-xl px-4'
						/>
					</div>
					<input
						type='text'
						placeholder='Name'
						className='bg-[#eaeef3] w-full h-[2.8rem] outline-none rounded-xl px-4 mb-4'
					/>
					<textarea
						name='comment'
						placeholder='Message'
						className='bg-[#eaeef3] w-full h-[10rem] outline-none rounded-xl px-4 mb-4'
					></textarea>
					<button className='bg-secondary hover:bg-yellow_accent_2 transition-all duration-300 px-10 py-2 text-primary text-xl rounded-full'>
						Submit
					</button>
				</form>

				{/* News letter section */}
				<div
					className='bg-no-repeat bg-center bg-cover h-fit px-5 py-8 rounded-xl capitalize text-primary w-full'
					id='newsletter'
				>
					<h1 className='text-2xl font-bold pb-2'>Our newsletters</h1>
					<p className='pb-3'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
						harum quia qui aliquid vel, natus neque?
					</p>
					<form action=''>
						<input
							type='email'
							placeholder='Email'
							className='w-full h-[2.8rem] text-secondary outline-none rounded-xl px-4 mb-4'
						/>
						<button className='px-4 py-1 rounded-xl bg-secondary text-primary w-full h-[2.8rem] text-lg hover:bg-yellow_accent_2 transition-all duration-300'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactFormNewsletter;
