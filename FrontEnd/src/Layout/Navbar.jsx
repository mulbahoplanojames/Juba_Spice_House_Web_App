import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import navLinks from "/src/Constant/Constant.jsx";
import { Link } from "react-router-dom";
import { assets } from "../data/assets";

/**
 * The Navbar component renders the navigation bar of this website.
 * It contains links to different pages and a contact us button.
 * It also has a responsive menu for smaller devices.
 */
const Navbar = () => {
	// State variable to keep track of whether the menu is open or not.
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [menu, setMenu] = useState("Home");

	return (
		<>
			<nav className={`flex justify-between items-center bg-white py-4`}>
				{/* Link to the home page */}
				<Link to='/' className='text-2xl font-bold'>
					JubaSh<span className='text-yellow_accent_2'>House</span>
				</Link>
				{/*//! Menu items for larger devices and mapping through the links */}
				<ul className='max-lg:hidden'>
					{navLinks.map((navlink) => (
						<li
							key={navlink.label}
							className={`inline-block px-8 
							
							`}
						>
							<Link
								to={navlink.path}
								className={`font-montserrat text-text_light focus:text-1 text-base leading-normal ${
									menu === navlink.label
										? "pb-2 border-b-2 border-yellow_accent_2"
										: ""
								}`}
								onClick={() => setMenu(navlink.label)}
							>
								{navlink.label}
							</Link>
						</li>
					))}
				</ul>
				{/*//! Contact Us button */}
				<div className='lg:gap-x-6 gap-x-4 flex justify-center items-center'>
					<img
						src={assets.search_icon}
						alt='search icon'
						className='w-6 h-6 cursor-pointer max-lg:hidden'
					/>
					<div className='relative'>
						<img
							src={assets.basket_icon}
							alt='cart icon'
							className='w-6 h-6 cursor-pointer'
						/>
						<div className='absolute -top-2 -right-1 w-3 h-3 rounded-full bg-yellow_accent_2'></div>
					</div>
					<Link
						to='/signin'
						className='py-1.5 lg:px-4 px-3 border-[1px] border-text_light text-sm lg:text-base rounded-3xl text-black hover:opacity-50'
					>
						sign in
					</Link>
					{/*//! Menu toggle button for smaller devices */}
					<TbMenu2
						className='max-lg:block hidden text-3xl cursor-pointer'
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					/>
				</div>
			</nav>

			{/*//! Responsive menu for smaller devices */}
			{isMenuOpen && (
				<div>
					<nav className='lg:bottom-auto bg-yellow_accent_2 fixed top-0 bottom-0 left-0 right-0 z-40'>
						{/* Close button for the menu */}
						<div
							className='max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer'
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
						>
							<MdOutlineCancelPresentation className=' text-3xl text-white' />
						</div>
						<ul className=' lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full'>
							{/* Menu items for smaller devices */}
							{navLinks.map((navlink) => (
								<li
									key={navlink.label}
									onClick={() => {
										setIsMenuOpen(!isMenuOpen);
									}}
								>
									<Link
										to={navlink.path}
										className='font-montserrat active:text-1 text-2xl leading-normal text-white'
									>
										{navlink.label}
									</Link>
								</li>
							))}
							<Link
								to='/signin'
								className='py-1.5 lg:px-4 px-5 border-[1px] border-white text-xl lg:text-lg rounded-3xl text-white hover:opacity-50'
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								sign in
							</Link>
						</ul>
					</nav>
				</div>
			)}
		</>
	);
};

export default Navbar;
