import { Link } from "react-router-dom";
import { assets } from "../data/assets";

const Footer = () => {
	return (
		<>
			<div className='bg-text_bold md:px-16 px-8 text-primary py-10 grid gap-12 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
				<div className='col-span-2'>
					<Link to='/' className='text-3xl pb-5 inline-block font-bold'>
						JubaSh<span className='text-yellow_accent_2'>House</span>
					</Link>
					<p className='pb-6'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Repellendus alias laudantium illo dolore incidunt ad eveniet
						obcaecati illum ipsum maiores modi neque vero inventore dolorem
						itaque ipsa odit quod voluptate necessitatibus dignissimos, rerum
						minima accusamus.
					</p>
					<div className='flex gap-5'>
						<img src={assets.facebook_icon} alt='' className='w-[40px]' />
						<img src={assets.twitter_icon} alt='' className='w-[40px]' />
						<img src={assets.linkedin_icon} alt='' className='w-[40px]' />
					</div>
				</div>
				{/* Company Links  */}
				<div className=''>
					<h1 className='text-2xl font-bold pb-3'>Company</h1>
					<ul className=''>
						<li className='pb-3 hover:text-yellow_accent_2'>
							<Link to='/'>Home</Link>
						</li>
						<li className='pb-3 hover:text-yellow_accent_2'>
							<Link to='/'>About Us</Link>
						</li>
						<li className='pb-3 hover:text-yellow_accent_2'>
							<Link to='/'>Delivery</Link>
						</li>
						<li className='pb-3 hover:text-yellow_accent_2'>
							<Link to='/'>Terms & Conditions</Link>
						</li>
					</ul>
				</div>
				{/* Contat Us Info  */}
				<div className=''>
					<h1 className='text-2xl font-bold pb-3'>Get in touch</h1>
					<p className='pb-3'>+250-914-254-254</p>
					<p className=''>jubaspicehouse@gmail.com</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
