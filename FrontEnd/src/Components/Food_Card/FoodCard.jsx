import { assets } from "../../data/assets";

const FoodCard = (props) => {
	const { name, image, price, description, cateory } = props;

	return (
		<>
			<div className='shadow-md rounded-xl m-auto overflow-hidden h-fit'>
				{/* image wripper  */}
				<div className=''>
					<img src={image} alt={`${cateory} image`} className='w-full' />
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
