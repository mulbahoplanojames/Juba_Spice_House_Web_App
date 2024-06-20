import { useState } from "react";
import { assets } from "../../data/assets";

const FoodCard = (props) => {
	const { name, image, price, description, cateory } = props;

	const [itemCount, setItemCount] = useState(0);

	return (
		<>
			<div className='shadow-md rounded-xl m-auto overflow-hidden h-fit'>
				{/* image wripper  */}
				<div className='relative'>
					<img src={image} alt={`${cateory} image`} className='w-full' />
					{
						/* Add to cart button */
						!itemCount ? (
							<img
								src={assets.add_icon_white}
								alt='add_to_cart'
								className='w-[35px] h-[35px] cursor-pointer absolute bottom-4 right-4'
								onClick={() => setItemCount((prev) => prev + 1)}
							/>
						) : (
							// counter wripper
							<div className='flex items-center gap-3 absolute bottom-4 right-4 bg-white rounded-full p-2'>
								<img
									src={assets.remove_icon_red}
									alt='remove_from_cart'
									onClick={() => setItemCount((prev) => prev - 1)}
									className='w-[25px] h-[25px] cursor-pointer'
								/>
								<p>{itemCount}</p>
								<img
									src={assets.add_icon_green}
									alt='added_to_cart'
									className='w-[25px] h-[25px] cursor-pointer'
									onClick={() => setItemCount((prev) => prev + 1)}
								/>
							</div>
						)
					}
				</div>

				{/* food info  */}
				<div className='px-3 py-5'>
					<div className='flex justify-between items-center mb-2'>
						<p className='font-bold'>{name}</p>
						<img src={assets.rating_starts} alt='' className='w-[80px]' />
					</div>
					<p className='text-[14px] pb-3 text-text_light'>{description}</p>
					<p className='text-lg text-accent_light font-bold'>${price}</p>
				</div>
			</div>
		</>
	);
};

export default FoodCard;
